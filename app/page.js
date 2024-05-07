import Link from "next/link"
import Carousel from "../components/Home/Carousel";
import AnimeCards from "@/components/Home/AnimeCards";

const getData = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/recommend");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  }
}

export default async function Home() {
 
  
  // function checkSize() {
  //   if (typeof window !== "undefined") {

  //     let lsData = localStorage.getItem("Watching");
    
  //   lsData = JSON.parse(lsData);
  //   if (lsData.length === 0) {
  //     return false;
    
  //   }
  //     return true;
    
  // }
  // }  if(error) return <>Failed To Load. {console.log(error)} </>
  const data = await getData()
  return (
    
    <div>
      <div className="sm:mt-6 sm:mb-4 sm:mx-20 mt-4 mx-4 mb-0">
        <p className="sm:text-4xl text-2xl font-extralight text-white mb-4">
          <span className="font-semibold">Recommended</span> to you
        </p>

        {data  && <Carousel images={data.Page.media} />}

        {/* {typeof window !== "undefined"?
            localStorage.getItem("Watching") && checkSize() && (
             <div>
              <div className="flex justify-between items-center sm:mt-0 my-4 text-white">
               <p className="text-2xl sm:text-3xl font-extralight mt-4  ">
                  <span className="font-semibold">>Continue</span> Watching
               </p>
               </div>
    <WatchingEpisodes />
             </div>
           ) 
           : null
            } */}
  
  
        <div>
          <div className="flex justify-between items-center sm:mt-0 my-4 text-white">
            <p className="text-2xl sm:text-3xl font-extralight mt-4  ">
              <span className="font-semibold">Trending</span> Now
            </p>
            <Link className="underline  font-serif text-lg " href="/trending/1">View All</Link>
          </div>
          <AnimeCards count={10} criteria="airing" />
        </div>
        <div>
          <div className="flex justify-between items-center sm:mt-0 my-4 text-white">
             <p className="text-2xl sm:text-3xl font-extralight mt-4  ">
              <span className="font-semibold">All Time</span> Popular
             </p>
            <Link  className="underline  font-serif text-lg " href="/popular/1">View All</Link>
          </div>
          <AnimeCards count={10} criteria="bypopularity" />
        </div>
        <div>
          <div className="flex justify-between items-center sm:mt-0 my-4 text-white">
             <p className="text-2xl sm:text-3xl font-extralight mt-4  ">
              <span className="font-semibold">Top 100</span> Anime
             </p>
            <Link className="underline  font-serif text-lg " href="/top100/1">View All</Link>
          </div>
          <AnimeCards count={10} criteria="all" />
        </div>
        <div>
          <div className="flex justify-between items-center sm:mt-0 my-4 text-white">
             <p className="text-2xl sm:text-3xl font-extralight mt-4  ">
              <span className="font-semibold"> All Time</span> Favourite
             </p>
            <Link className="underline  font-serif text-lg "  href="/favourites/1">View All</Link>
          </div>
          <AnimeCards count={10} criteria="favorite" />
        </div>
        <div>
          <div className="flex justify-between items-center sm:mt-0 my-4 text-white">
             <p className="text-2xl sm:text-3xl font-extralight mt-4  ">
              <span className="font-semibold"> Popular</span> Movies
             </p>
            <Link className="underline  font-serif text-lg " href="/movies">View All</Link>
          </div>
          <AnimeCards count={10} criteria="movie" />
        </div>
            
   
      </div>
    </div>
  );
}
// const Heading = styled.p`
//   font-size: 1.8rem;
//   color: white;
//   font-weight: 200;
//   margin-top: 1rem;
//   span {
//     font-weight: 600;
//   }

//   @media screen and (max-width: 600px) {
//     font-size: 1.5rem;
//   }
// `;
// const HeadingWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 1rem;
//   @media screen and (max-width: 600px) {
//     margin-top: 1rem;
//   }
// `;


// const Link = styled(Link)`
//   color: white;
//   font-size: 1.1rem;
//   
// `;










