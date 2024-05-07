import { NextResponse } from "next/server";

export async function GET(Request,{params}) {
  const criteria = params.criteria;
  const searchParams = Request.nextUrl.searchParams
  const count = searchParams.get('count')
  

    try {
      const res = await fetch(`https://api.myanimelist.net/v2/anime/ranking?ranking_type=${criteria}&limit=${count}`,
       { 
          headers: {
            'X-MAL-CLIENT-ID': process.env.MYANIMELIST_CLIENT_ID,
          },
          }
     
      )
      const data = await res.json()
      return NextResponse.json(data, {
        status: 200,
        headers: {
          'Cache-Control': 'max-age=86400, stale-while-revalidate',
        },
      });

    } catch (error) {
      console.error('Error fetching GraphQL data:', error);
      return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
    }
  }