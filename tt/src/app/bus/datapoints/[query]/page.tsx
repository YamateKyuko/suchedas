import DatapointCard from "@/app/ui/bus/datapoint-card";

// {params}: {params: {query: string}}
export default async function Page({params}: {params: {query: string}}) {
  const {query} = await params;
  console.log(query);
  return (
    <div>
      <h1>PagePage</h1>
      <DatapointCard query={query} />
    </div>
  );
}