import DatapointCard from "@/app/ui/bus/datapoint-card";

// {params}: {params: {query: string}}
export default async function Page(props: {
  params?: Promise<{
    query?: string;
  }>;
}
  // {params}: {params: {query: string}}
) {
  const query = (await props.params)?.query || '';
  return (
    <div>
      <h1>PagePage</h1>
      <DatapointCard query={query} />
    </div>
  );
}