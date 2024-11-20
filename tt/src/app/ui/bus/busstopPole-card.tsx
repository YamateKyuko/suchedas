// import { BusstopPole } from '@/app/class/classes'
// import { getBusstopPole } from '@/app/lib/data';
// import Link from 'next/link';
// import React from 'react'

import { BusstopPole } from "@/app/class/classes";
import { getBusroutePattern } from "@/app/lib/data";
import { Suspense } from "react";
import { OperatorName } from "./operator-name";
import Link from "next/link";

export default async function BusstopPoleCard({busstopPole}: {busstopPole: BusstopPole}) {
  return (
    <li>
      <h2>{busstopPole.title}</h2>
      <OperatorName ID={busstopPole.operatorIDs} />
      {busstopPole.busroutePatternIDs && busstopPole.busroutePatternIDs.length > 0 && (
        <Suspense fallback={<p>Loading...</p>}>
          <BusroutePatterns ids={busstopPole.busroutePatternIDs} />
        </Suspense>
      )}
    </li>
  )
}

async function BusroutePatterns({ids}: {ids: string[]}) {
  const BusroutePatterns = await getBusroutePattern({ID: ids.join(',')});
  return (
    <>
      {BusroutePatterns.map((res, i) => (
        <div key={res.ID + i}>
          <Link href={"/bus/datapoints/" + res.ID}>
            <h4>{res.title}</h4>
          </Link>
          {/* <p>{res.title}</p> */}
          <p>時刻表</p>
        </div>
      ))}
    </>
  )
}