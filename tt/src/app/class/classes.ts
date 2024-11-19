export class Data {
  ty: string = '';
  UC: string = '';
  ID: string = '';

  needIDs = new needIDs();
}

class needIDs {
  operator?: string[];
  bus?: string[];
  busstopPole?: string[];
  busroutePattern?: string[];

  pushBusstopPoleID(id: string) {
    if (!this.busstopPole) {
      this.busstopPole = [];
    }
    this.busstopPole.push(id);
  }
  pushBusroutePatternID(id: string) {
    if (!this.busroutePattern) {
      this.busroutePattern = [];
    }
    this.busroutePattern.push(id);
  }
}

export type DataClasses = Bus | BusTimetable | BusroutePattern | BusstopPole;

export class Bus extends Data {
  ty: 'odpt:Bus' = 'odpt:Bus' as const;
  UC: string = 'ucode';
  ID: string = 'odptId';
  busNumber: string = '';
  Gdate: string = '';
  Vdate: string = '';
  frequency: number = 0;
  busroutePatternID: string = '';
  busTimetableID: string | null = null;
  operatorID: string = '';
  startingBusstopPoleID: string | null = null;
  terminalBusstopPoleID: string | null = null;
  fromBusstopPoleID: string | null = null;
  fromBusstopPoleTime: string | null = null;
  toBusstopPoleID: string | null = null;
  progress: number | null = 0;
  position: [number, number] | null = null;
  speed: number | null = null;
  azimuth: number | null = null;
  doorStatus: 'open' | 'close' | 'self' | null = null;
  occupancyStatus: 0 | 1 | 2 | 3 | 4 | 5 | 6 | null = null;

  needIDs = new needIDs();

  static build(odpt: unknown): Bus | null {
    if (isObject(odpt)) {
      const cls: Bus = new Bus();
      if (odpt["@type"] !== "odpt:Bus") return null;
      if (isStr(odpt["@id"])) {cls.UC = odpt["@id"]} else return null;
      if (isStr(odpt["owl:sameAs"])) {cls.ID = odpt["owl:sameAs"]} else return null;
      if (isStr(odpt["odpt:busNumber"])) {cls.busNumber = odpt["odpt:busNumber"]} else return null;
      if (isStr(odpt["dc:date"])) {cls.Gdate = odpt["dc:date"]} else return null;
      if (isStr(odpt["dct:valid"])) {cls.Vdate = odpt["dct:valid"]};
      if (isNum(odpt["odpt:frequency"])) {cls.frequency = odpt["odpt:frequency"]} else return null;
      if (isStr(odpt["odpt:busroutePattern"])) {
        cls.busroutePatternID = odpt["odpt:busroutePattern"]
        cls.needIDs.pushBusroutePatternID(odpt["odpt:busroutePattern"]);
      } else return null;
      if (isStr(odpt["odpt:busTimetable"])) {cls.busTimetableID = odpt["odpt:busTimetable"]};
      if (isStr(odpt["odpt:operator"])) {cls.operatorID = odpt["odpt:operator"]} else return null;
      if (isStr(odpt["odpt:startingBusstopPole"])) {
        cls.startingBusstopPoleID = odpt["odpt:startingBusstopPole"]
        cls.needIDs.pushBusstopPoleID(odpt["odpt:startingBusstopPole"]);
      };
      if (isStr(odpt["odpt:terminalBusstopPole"])) {
        cls.terminalBusstopPoleID = odpt["odpt:terminalBusstopPole"]
        cls.needIDs.pushBusstopPoleID(odpt["odpt:terminalBusstopPole"]);
      };
      if (isStr(odpt["odpt:fromBusstopPole"])) {
        cls.fromBusstopPoleID = odpt["odpt:fromBusstopPole"]
        cls.needIDs.pushBusstopPoleID(odpt["odpt:fromBusstopPole"]);
      };
      if (isStr(odpt["odpt:fromBusstopPoleTime"])) {
        cls.fromBusstopPoleTime = odpt["odpt:fromBusstopPoleTime"]};
      if (isStr(odpt["odpt:toBusstopPole"])) {
        cls.toBusstopPoleID = odpt["odpt:toBusstopPole"]
        cls.needIDs.pushBusstopPoleID(odpt["odpt:toBusstopPole"]);
      };
      if (isNum(odpt["odpt:progress"])) {cls.progress = odpt["odpt:progress"]};
      if (isNum(odpt["geo:lat"]) && isNum(odpt["geo:long"])) {cls.position = [odpt["geo:lat"], odpt["geo:long"]];}
      if (isNum(odpt["odpt:speed"])) {cls.speed = odpt["odpt:speed"]};
      if (isNum(odpt["odpt:azimuth"])) {cls.azimuth = odpt["odpt:azimuth"]};
      if (isStr(odpt["odpt:doorStatus"])) {occupancyStatus.get(odpt["odpt:doorStatus"])};
      return cls;
    } else return null;
  }
}

const occupancyStatus: Map<string, 0 | 1 | 2 | 3 | 4 | 5 | 6> = new Map([
  ["odpt:occupancyStatus:veryLow", 0],
  ["odpt:occupancyStatus:low", 1],
  ["odpt:occupancyStatus:middle", 2],
  ["odpt:occupancyStatus:high", 3],
  ["odpt:occupancyStatus:veryHigh", 4],
  ["odpt:occupancyStatus:full", 5],
  ["odpt:occupancyStatus:unknown", 6]
]);

export class BusTimetable extends Data {
  ty: 'odpt:BusTimetable' = 'odpt:BusTimetable' as const;
  UC: string = 'ucode';
  ID: string = 'odptId';
  Gdate: string | null = null;
  Idate: string | null = null;
  Vdate: string | null = null;
  title: string = '不明';
  operatorID: string = '';
  busroutePatternID: string = '';
  calendarID: string = '';
  busTimetableObjects: Map<string, BusTimetableObject> = new Map();

  needIDs = new needIDs();

  static build(odpt: unknown): BusTimetable | null {
    if (isObject(odpt)) {
      const cls = new BusTimetable();
      if (odpt["@type"] !== "odpt:BusTimetable") return null;
      if (isStr(odpt["@id"])) {cls.UC = odpt["@id"]} else return null;
      if (isStr(odpt["owl:sameAs"])) {cls.ID = odpt["owl:sameAs"]} else return null;
      if (isStr(odpt["dc:date"])) {cls.Gdate = odpt["dc:date"]};
      if (isStr(odpt["dct:issued"])) {cls.Idate = odpt["dct:issued"]};
      if (isStr(odpt["dct:valid"])) {cls.Vdate = odpt["dct:valid"]};
      if (isStr(odpt["dc:title"])) {cls.title = odpt["dc:title"]};
      if (isStr(odpt["odpt:kana"]) && cls.title == '不明') {cls.title = odpt["odpt:kana"]};
      if (isStr(odpt["odpt:operator"])) {cls.operatorID = odpt["odpt:operator"]} else return null;
      if (isStr(odpt["odpt:busroutePattern"])) {
        cls.busroutePatternID = odpt["odpt:busroutePattern"]
        cls.needIDs.pushBusroutePatternID(odpt["odpt:busroutePattern"]);
      } else return null;
      if (isStr(odpt["odpt:calendar"])) {cls.calendarID = odpt["odpt:calendar"]} else return null;
      if (isArr(odpt["odpt:busTimetableObject"])) {
        odpt["odpt:busTimetableObject"].forEach((obj: unknown) => {
          if (isObject(obj)) {
            const clsObj = BusTimetableObject.build(obj);
            if (clsObj) cls.busTimetableObjects.set(clsObj.busstopPoleID, clsObj);
          }
        });
      }
      return cls;
    } else return null;
  }
}

export class BusTimetableObject {
  index: number = 0;
  busstopPoleID: string = '';
  arrivalTime: string | null = null;
  departuretime: string | null = null;
  sign: string = '';
  isNonStep: boolean | null = null;
  isMidnight: boolean | null = null;
  canGetOn: boolean | null = null;
  canGetOff: boolean | null = null;
  note: string = '';

  static build(odpt: unknown): BusTimetableObject | null {
    if (isObject(odpt)) {
      const cls = new BusTimetableObject();
      if (isNum(odpt["odpt:index"])) {cls.index = odpt["odpt:index"]} else return null;
      if (isStr(odpt["odpt:busstopPole"])) {cls.busstopPoleID = odpt["odpt:busstopPole"]} else return null;
      if (isStr(odpt["odpt:arrivalTime"])) {cls.arrivalTime = odpt["odpt:arrivalTime"]};
      if (isStr(odpt["odpt:departureTime"])) {cls.departuretime = odpt["odpt:departureTime"]};
      if (isStr(odpt["odpt:destinationSign"])) {cls.sign = odpt["odpt:destinationSign"]};
      if (isBol(odpt["odpt:isNonStepBus"])) {cls.isNonStep = odpt["odpt:isNonStepBus"]};
      if (isBol(odpt["odpt:isMidnight"])) {cls.isMidnight = odpt["odpt:isMidnight"]};
      if (isBol(odpt["odpt:canGetOn"])) {cls.canGetOn = odpt["odpt:canGetOn"]};
      if (isBol(odpt["odpt:canGetOff"])) {cls.canGetOff = odpt["odpt:canGetOff"]};
      if (isStr(odpt["odpt:note"])) {cls.note = odpt["odpt:note"]};
      return cls;
    } else return null;
  }
}

export class BusroutePattern extends Data {
  ty: 'odpt:BusroutePattern' = 'odpt:BusroutePattern' as const;
  UC: string = 'ucode';
  ID: string = 'odptId';
  Gdate: string = '';
  Vdate: string | null = null;
  title: string = '';
  operatorID: string = '';
  busroute: string | null = null;
  pattern: string | null = null;
  direction: string | null = null;
  region: GeoJSON.LineString | null = null;
  busstopPoleOrder: Map<string, BusstopPoleOrder> = new Map();
  note: string = '';
  busLocationURL: string | null = null;

  static build(odpt: unknown): BusroutePattern | null {
    if (isObject(odpt)) {
      const cls = new BusroutePattern();
      if (odpt["@type"] !== "odpt:BusroutePattern") return null;
      if (isStr(odpt["@id"])) {cls.UC = odpt["@id"]} else return null;
      if (isStr(odpt["owl:sameAs"])) {cls.ID = odpt["owl:sameAs"]} else return null;
      if (isStr(odpt["dc:date"])) {cls.Gdate = odpt["dc:date"]} else return null;
      if (isStr(odpt["dct:valid"])) {cls.Vdate = odpt["dct:valid"]};
      if (isStr(odpt["dc:title"])) {cls.title = odpt["dc:title"]} else return null;
      if (isStr(odpt["odpt:operator"])) {cls.operatorID = odpt["odpt:operator"]} else return null;
      if (isStr(odpt["odpt:busroute"])) {cls.busroute = odpt["odpt:busroute"]};
      if (isStr(odpt["odpt:pattern"])) {cls.pattern = odpt["odpt:pattern"]};
      if (isStr(odpt["odpt:direction"])) {cls.direction = odpt["odpt:direction"]};
      if (isLis(odpt["geo:region"])) {cls.region = odpt["geo:region"]};
      if (isArr(odpt["odpt:busstopPoleOrder"])) {
        odpt["odpt:busstopPoleOrder"].forEach((obj: unknown) => {
          if (isObject(obj)) {
            const clsObj = BusstopPoleOrder.build(obj);
            if (clsObj) cls.busstopPoleOrder.set(clsObj.busstopPoleID, clsObj);
          }
        });
      }
      return cls;
    } else return null;
  }
}

export class BusstopPoleOrder {
  busstopPoleID: string = '';
  index: number = 0;
  openingDoorsToGetOn: 0 | 1 | null = null;
  openingDoorsToGetOff: 0 | 1 | null = null;
  note: string = '';

  static build(odpt: unknown): BusstopPoleOrder | null {
    if (isObject(odpt)) {
      const cls = new BusstopPoleOrder();

      if (isStr(odpt["odpt:busstopPole"])) {cls.busstopPoleID = odpt["odpt:busstopPole"]} else return null;
      if (isNum(odpt["odpt:index"])) {cls.index = odpt["odpt:index"]} else return null;
      if (isStr(odpt["odpt:openingDoorsToGetOn"])) cls.openingDoorsToGetOn = openingDoor.get(odpt["odpt:openingDoorsToGetOn"]) || null;
      if (isStr(odpt["odpt:openingDoorsToGetOff"])) cls.openingDoorsToGetOff = openingDoor.get(odpt["odpt:openingDoorsToGetOff"]) || null;
      if (isStr(odpt["odpt:note"])) {cls.note = odpt["odpt:note"]};

      return cls;
    } else return null;
  }
}

const openingDoor: Map<string, 0 | 1> = new Map([
  ["odpt:openingDoors:front", 0],
  ["odpt:openingDoors:middle", 1]
]);

export class BusstopPole extends Data {
  ty: 'odpt:BusstopPole' = 'odpt:BusstopPole' as const;
  UC: string = 'ucode';
  ID: string = 'odptId';
  Gdate: string = '';
  Vdate: string | null = null;
  title: string = '';
  position: [number, number] | null = null;
  busroutePatternIDs: string[] | null = null;
  operatorIDs: string[] = [];
  busstopPoleNumber: string | null = null;
  platformNumber: string | null = null;
  busstopPoleTimetableIDs: string[] | null = [];

  needIDs = new needIDs();

  static build(odpt: unknown): BusstopPole | null {
    if (isObject(odpt)) {
      const cls = new BusstopPole();
      if (odpt["@type"] !== "odpt:BusstopPole") return null;
      if (isStr(odpt["@id"])) {cls.UC = odpt["@id"]} else return null;
      if (isStr(odpt["owl:sameAs"])) {cls.ID = odpt["owl:sameAs"]} else return null;
      if (isStr(odpt["dc:date"])) {cls.Gdate = odpt["dc:date"]} else return null;
      if (isStr(odpt["dct:valid"])) {cls.Vdate = odpt["dct:valid"]};
      if (isStr(odpt["dc:title"])) {cls.title = odpt["dc:title"]} else return null;
      if (isNum(odpt["geo:lat"]) && isNum(odpt["geo:long"])) {cls.position = [odpt["geo:lat"], odpt["geo:long"]]};
      if (isArr(odpt["odpt:busroutePattern"])) {
        odpt["odpt:busroutePattern"].forEach((id: unknown) => {
          if (isStr(id)) {
            if (!cls.busroutePatternIDs) cls.busroutePatternIDs = [];
            cls.busroutePatternIDs.push(id)
            cls.needIDs.pushBusroutePatternID(id)
          }
        });
      }
      if (isArr(odpt["odpt:operator"])) {
        odpt["odpt:operator"].forEach((id: unknown) => {
          if (isStr(id)) cls.operatorIDs.push(id);
        });
      }
      if (isStr(odpt["odpt:busstopPoleNumber"])) {cls.busstopPoleNumber = odpt["odpt:busstopPoleNumber"]};
      if (isStr(odpt["odpt:platformNumber"])) {cls.platformNumber = odpt["odpt:platformNumber"]};
      if (isArr(odpt["odpt:busstopPoleTimetable"])) {
        odpt["odpt:busstopPoleTimetable"].forEach((id: unknown) => {
          if (isStr(id)) {
            if (!cls.busstopPoleTimetableIDs) cls.busstopPoleTimetableIDs = [];
            cls.busstopPoleTimetableIDs.push(id)
          };
        });
      }
      return cls;
    } else return null;
  }
}

type sthObj = {[key: string]: unknown};
const isObject = (x: unknown): x is sthObj =>
  x !== null && (typeof x === 'object' || typeof x === 'function')

const isStr = (x: unknown): x is string => typeof x === 'string';
const isNum = (x: unknown): x is number => typeof x === 'number';
const isArr = (x: unknown): x is unknown[] => Array.isArray(x);
const isBol = (x: unknown): x is boolean => typeof x === 'boolean';
const isLis = (x: unknown): x is GeoJSON.LineString => {
  if (isObject(x) && x.type === 'LineString' && isArr(x.coordinates)) return true;
  return false;
}
// const strProp = (odptVal: unknown) => {
//   if (isStr(odptVal)) return odptVal;
// }
