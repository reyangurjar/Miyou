import { TrendingAnimeQuery } from "@/hooks/searchQueryStrings";
import {request} from "graphql-request"
import { NextResponse } from "next/server";

export async function GET() {
    try {
      const data = await request(process.env.ANILIST_GRAPHQL_URL,TrendingAnimeQuery,{page: 1,perPage:15});
      return NextResponse.json(data, {
        status: 200,
        headers: {
          'Cache-Control': 's-maxage=86400, stale-while-revalidate',
        },
      });
    } catch (error) {
      console.error('Error fetching GraphQL data:', error);
      return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
    }
  }