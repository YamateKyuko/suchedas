import { BusstopPole } from '@/app/class/classes'
import { getBusstopPole } from '@/app/lib/data';
import Link from 'next/link';
import React from 'react'

export default async function BusstopPoleTable({titleQuery}: {titleQuery: string}) {
  const busstopPoles: BusstopPole[] = await getBusstopPole({"title": titleQuery});

  return (
    <ul>
      {busstopPoles.map((res) => (
        <li key={res.ID}>
          <Link href={"/bus/datapoints/" + res.ID}>
            <h2>{res.ID}</h2>
            <p>{res.operatorIDs}</p>
            <p>{res.busroutePatternIDs?.join(' , ')}</p>
            <p>{res.busstopPoleNumber}</p>
            <p>{res.platformNumber}</p>
          </Link>
        </li>
      ))}
      {!busstopPoles.length && <li>データがありません</li>}
    </ul>
  )
}

// const sameBusstopPole = (a: BusstopPole, b: BusstopPole): boolean => {















// ______________________________________________________________________________________

// type template_summarisedBusstopPole = {
//   title: string,
//   position: [number, number],
//   busstopPoles: BusstopPole[],
// }

// const summarisedBusstopPoles: template_summarisedBusstopPole[] = [];

// const summarizedChanger = (res: BusstopPole) => {
//   const pos = res.position || [0, 0];
//   if (pos) {
//     let isPushed = false;
//     for (const summarised of summarisedBusstopPoles) {
//       const latDif = Math.abs(pos[0] - summarised.position[0]);
//       const lonDif = Math.abs(pos[1] - summarised.position[1]);
//       if (latDif < 0.001 && lonDif < 0.001) {
//         summarised.busstopPoles.push(res);
//         isPushed = true;
//         return;
//       }
//     };
//     if (!isPushed) summarisedBusstopPoles.push({
//       title: res.title,
//       position: res.position || [0, 0],
//       busstopPoles: [res],
//     });
//   }
// }

// busstopPoles.forEach((res) => {
//   summarizedChanger(res);
// });

// return (
//   <ul>
//     {summarisedBusstopPoles.map((res, index) => (
//       <li key={index}>
//         <h2>{res.title}</h2>
//         <p>{res.position?.join(' , ')}</p>
//         <ul>
//           {res.busstopPoles.map((busstopPole) => (
//             <li key={busstopPole.ID}>
//               {busstopPole.ID}
//             </li>
//           ))}
//         </ul>
//       </li>
//     ))}
//     {busstopPoles.length === 0 && <li>データがありません</li>}
//   </ul>
// )