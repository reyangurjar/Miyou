import { searchAnimeQuery } from "@/hooks/searchQueryStrings";
import {request} from "graphql-request"
import { NextResponse } from "next/server";

export async function GET(Request,{params}) {

    const query = params.query;
    try {
      const data = await request(process.env.ANILIST_GRAPHQL_URL,searchAnimeQuery,{search: query});
      console.log("request got on search with query   " + query)
      return NextResponse.json(data, {
        status: 200,
        headers: {
          'Cache-Control': 'max-age=86400,',
        },
      });
    } catch (error) {
      console.error('Error fetching GraphQL data:', error);
      return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
    }
  }