import axios from "axios";
import { Params } from "next/dist/server/request/params";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: { params: Params }) {
  const { params } = context;
  const query = (await params).query || '';
  const url = "https://api.odpt.org/api/v4/datapoints/" + query;

  try {
    const response = await axios.get(url, { params: {"acl:consumerKey": acl_consumerKey()} });
    return NextResponse.json(response.data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: 'データの取得に失敗しました' },
      { status: 500 }
    );
  }
}

const acl_consumerKey = (): string => {
  return process.env.ACL || '';
}