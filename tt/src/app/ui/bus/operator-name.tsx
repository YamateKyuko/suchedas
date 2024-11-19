export function OperatorName({ID}: {ID: string | string[]}) {
  return (
    <>
      {isArr(ID) ? ID.map((id, index) => <OperatorP key={id + index} ID={id} />) : <OperatorP ID={ID} />}
    </>
  );
}

function OperatorP({ID}: {ID: string}) {
  return (
    <>
      {ID == 'odpt.Operator:OdakyuBus' && <p>小田急バス</p>}
      {ID == 'odpt.Operator:KeioBus' && <p>京王バス</p>}
    </>
  );
}

const isArr = (x: unknown): x is unknown[] => Array.isArray(x);