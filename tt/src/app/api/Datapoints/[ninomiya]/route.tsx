// import axios from "axios";
// import { NextRequest, NextResponse } from "next/server";

import { NextResponse } from "next/server";

export async function GET(
//   _request: NextRequest,
//   { params }: { params: {ninomiya: string} }
) {
//   const id = (await params).ninomiya || '';
//   const url = `https://api.odpt.org/api/v4/datapoints/${id}`;

//   try {
//     const response = await axios.get(url, {
//       params: { "acl:consumerKey": acl_consumerKey() },
//     });
//     return NextResponse.json(response.data);
//   } catch (error) {
//     console.log(error);
    return NextResponse.json(
      { error: 'データの取得に失敗しました' },
      { status: 500 }
    );
//   }
}

// const acl_consumerKey = (): string => {
//   return process.env.ACL || '';
// };