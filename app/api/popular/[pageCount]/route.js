import { PopularAnimeQuery } from "@/hooks/searchQueryStrings";
import {request} from "graphql-request"
import { NextResponse } from "next/server";

export async function GET(Request,{params}) {

    const pageCount = params.pageCount;
    try {
      const data = await request(process.env.ANILIST_GRAPHQL_URL,PopularAnimeQuery,{page: pageCount,perPage:50});
      console.log("request got on popular" + pageCount)
      return NextResponse.json(data, {
        status: 200,
        headers: {
          'Cache-Control': 'max-age=86400',
        },
      });
    } catch (error) {
      console.error('Error fetching GraphQL data:', error);
      return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
    }
  }