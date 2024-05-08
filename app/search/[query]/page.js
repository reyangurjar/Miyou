import CardListWithHeading from "@/components/CardListWithHeading"



const Popular = async({params}) => {
  const getData= async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/search/${params.query}`);
      console.log("request sent to " + `http://localhost:3000/api/search/${params.query}`)
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
    <CardListWithHeading title={"Search Anime "}  page="top100" data={data} />
    </div>
  )
}

export default Popular;