import { BusroutePattern, DataClasses } from "@/app/class/classes";
import { getDatapoints } from "@/app/lib/data";
import BusstopPoleCard from "./busstopPole-card";

export default async function DatapointCard({query}: {query: string}) {
  const data: DataClasses | null = await getDatapoints(query);
  return (
    <ul>
      {data ? (
        <>
          {/* {data.ty == 'odpt:BusroutePattern' && (<BusroutePattern>)} */}
          {data.ty == 'odpt:BusstopPole' && (<BusstopPoleCard busstopPole={data} />)}
        </>
      ): (
        <p>No Data</p>
      )}
    </ul>
  );
}