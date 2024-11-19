import React from 'react'
import { BusroutePattern } from '@/app/class/classes';
import { getBusroutePattern } from '@/app/lib/data';

export default async function busroutePatternCard() {
  const busroutePatterns: BusroutePattern[] = await getBusroutePattern({
    // 'ID': 'odpt.BusroutePattern:SeibuBus.Ishi22.63008.1'
  });
  return (
    <ul>
      {busroutePatterns.map((res) => (
        <li key={res.UC}>
          <h2>{res.ID}</h2>
          {/* <p>{res.operatorID}</p>
          <p>{res.busrouteID}</p>
          <p>{res.busroutePatternSectionID}</p>
          <p>{res.direction}</p>
          <p>{res.kana}</p>
          <p>{res.romaji}</p>
          <p>{res.origin}</p>
          <p>{res.destination}</p>
          <p>{res.busroutePatternOriginID}</p>
          <p>{res.busroutePatternDestinationID}</p>
          <p>{res.busroutePatternSectionOriginID}</p>
          <p>{res.busroutePatternSectionDestinationID}</p>
          <p>{res.busroutePatternSection}</p>
          <p>{res.busroutePatternSectionOrder}</p>
          <p>{res.busroutePatternSectionDistance}</p>
          <p>{res.busroutePatternSectionTravelTime}</p>
          <p>{res.busroutePatternSection}</p> */}
        </li>
      ))}
    </ul>
  )
}
