import axios from "axios";
import { Bus, BusroutePattern, BusstopPole, BusTimetable, DataClasses } from "../class/classes";

// type getBusParamsType = {[k in keyof Bus]?: string[]}

export async function getDatapoints(id: string): Promise<DataClasses | null> {
  const res = await axios.get(getPath('/api/Datapoints/'), { params: {ID: id} });
  if (isArr(res.data)) {
    const data = res.data[0];
    if (!isObject(data)) return null;
    if (data['@type'] === 'odpt:Bus') return Bus.build(data);
    if (data['@type'] === 'odpt:BusTimetable') return BusTimetable.build(data);
    if (data['@type'] === 'odpt:BusroutePattern') return BusroutePattern.build(data);
    if (data['@type'] === 'odpt:BusstopPole') return BusstopPole.build(data);
    return null;
  } else return null;
}


export async function getBus(params: {[k in keyof Bus]?: string}): Promise<Bus[]> {
  const res = await axios.get(getPath('/api/Bus'), { params });
  const clses: Bus[] = [];

  if (isArr(res.data)) {
    res.data.forEach((data: unknown) => {
      const cls = Bus.build(data);
      if (cls) clses.push(cls);
    });
    return clses;
  };
  return [];
};

export async function getBusroutePattern(params: {[k in keyof BusroutePattern]?: string}): Promise<BusroutePattern[]> {
  const res = await axios.get(getPath('/api/BusroutePattern'), { params });
  const clses: BusroutePattern[] = [];
  if (isArr(res.data)) {
    res.data.forEach((data: unknown) => {
      const cls = BusroutePattern.build(data);
      if (cls) clses.push(cls);
    });
    return clses;
  };
  return [];
};

export async function getBusstopPole(params: {[k in keyof BusstopPole]?: string}): Promise<BusstopPole[]> {
  const res = await axios.get(getPath('/api/BusstopPole'), { params });
  const clses: BusstopPole[] = [];
  if (isArr(res.data)) {
    res.data.forEach((data: unknown) => {
      const cls = BusstopPole.build(data);
      if (cls) clses.push(cls);
    });
    return clses;
  };
  return [];
};

// export async function getOperator(params: {[k: string]: string}): Promise<unknown[]> {
//   let owlSameAS: string[] | null = null;
//   let 
//   Object.entries(params).forEach(([key, value]) => {
//     switch (key) {
//       case 'ID':
//         owlSameAS = value.split(',');
//         break;
//       case 'title':
//         p['dc:title'] = value;
//         break;
//     }
//   });
//   const operators = [
//     {
//       "owl:sameAs": "odpt.Operator:JR-East",
//       "dc:title": "JR東日本"
//     },
//     {
//       "owl:sameAs": "odpt.Operator:Toei",
//       "dc:title": "都営"
//     },
//     {
//       "owl:sameAs": "odpt.Operator:TokyoMetro",
//       "dc:title": "東京メトロ"
//     },
//     {
//       "owl:sameAs": "odpt.Operator:ToyoKosoku",
//       "dc:title": "東葉高速鉄道"
//     },
//     {
//       "owl:sameAs": "odpt.Operator:Keisei",
//       "dc:title": "京成電鉄"
//     },
//     {
//       "owl:sameAs": "odpt.Operator:Keio",
//       "dc:title": "京王電鉄"
//     },
//     {
//       "owl:sameAs": "odpt.Operator:Keikyu",
//       "dc:title": "京急電鉄"
//     },
//     {
//       "owl:sameAs": "odpt.Operator:Seibu",
//       "dc:title": "西武鉄道"
//     },
//     {
//       "owl:sameAs": "odpt.Operator:Tokyu",
//       "dc:title": "東急電鉄"
//     },
//     {
//       "owl:sameAs": "odpt.Operator:Odakyu",
//       "dc:title": "小田急電鉄"
//     },
//     {
//       "owl:sameAs": "odpt.Operator:Yurikamome",
//       "dc:title": "ゆりかもめ"
//     },
//     {
//       "owl:sameAs": "odpt.Operator:Tobu",
//       "dc:title": "東武鉄道"
//     },
//     {
//       "owl:sameAs": "odpt.Operator:TokyoMonorail",
//       "dc:title": "東京モノレール"
//     },
//     {
//       "owl:sameAs": "odpt.Operator:TX",
//       "dc:title": "東京臨海高速鉄道"
//     },
//     {
//       "owl:sameAs": "odpt.Operator:TWR",
//       "dc:title": "東京臨海高速鉄道"
//     }
//   ]
// }


const isArr = (obj: unknown): obj is unknown[] => {
  return Array.isArray(obj);
}

type sthObj = {[key: string]: unknown};
const isObject = (x: unknown): x is sthObj =>
  x !== null && (typeof x === 'object' || typeof x === 'function')


const getPath = (path: string): string => isDevelopment() ? 'http://127.0.0.1:3000' + path : path;
const isDevelopment = (): boolean => process.env.NODE_ENV === 'development';