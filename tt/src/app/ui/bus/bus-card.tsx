import { Bus } from "@/app/class/classes";
import { getBus } from "@/app/lib/data";
import styles from './uiNavBus.module.css';
export default async function BusCard() {
  const buses: Bus[] = await getBus({
    'busroutePatternID': 'odpt.BusroutePattern:SeibuBus.Ishi22.63008.1'
  });
  return (
    <ul>
      {buses.map((res) => (
        <li key={res.UC} className={nameClassName(res.operatorID)}>
          <h2>{res.busNumber}</h2>
          <p>{res.Gdate}</p>
          <p>{res.Vdate}</p>
          <p>{res.frequency}</p>
          <p>{res.busroutePatternID}</p>
          <p>{res.busTimetableID}</p>
          <p>{res.operatorID}</p>
          <p>{res.startingBusstopPoleID}</p>
          <p>{res.terminalBusstopPoleID}</p>
          <p>{res.fromBusstopPoleID}</p>
          <p>{res.fromBusstopPoleTime}</p>
          <p>{res.toBusstopPoleID}</p>
          <p>{res.progress}</p>
          <p>{res.position}</p>
          <p>{res.speed}</p>
          <p>{res.azimuth}</p>
          <p>{res.doorStatus}</p>
          <p>{res.occupancyStatus}</p>
        </li>
      ))}
    </ul>
  );
}

const nameClassName = (operatorID: string): string => {
  const classNames: string[] = ['busCard'];
  switch (operatorID) {
    case 'odpt.Operator:Toei':
      classNames.push('Toei');
      break;
    case 'odpt.Operator:SeibuBus':
      classNames.push('SeibuBus');
      break;
    case 'odpt.Operator:YokohamaMunicipal':
      classNames.push('YokohamaMunicipal');
      break;
  }
  return classNames.map((className) => styles[className]).join(' ');
};





