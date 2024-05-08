import CardListWithHeading from "@/components/CardListWithHeading"
import fetchData from "@/hooks/fetchData"


const Trending = async({params}) => {
  const getData= async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/trending/${params.pageCount}`);
      console.log("request sent to " + `http://localhost:3000/api/trending/${params.pageCount}`)
      const result = await response.json();
      return result;
    }
    catch (error) {
      console.error('Error fetching data:', error);
      throw new Error('Failed to fetch data');
    }
  }
// console.log(params.pageCount)
const data = await getData()
  return (
    <div>
    <CardListWithHeading title={"Trending Anime"}  page="trending" data={data} pageCount={params.pageCount}/>
    </div>
  )
}

export default Trending;