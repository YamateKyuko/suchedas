// import { Bus } from "@/app/class/classes";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const params: {[k: string]: string} = {"acl:consumerKey": acl_consumerKey()};
  searchParams.forEach((value, key) => {
    switch (key) {
      case 'ID':
        params['owl:sameAs'] = value;
        break;
      case 'title':
        params['dc:title'] = value;
        break;
    }
  });
  const url = "https://api.odpt.org/api/v4/odpt:BusstopPole";

  try {
    const response = await axios.get(url, { params });
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

