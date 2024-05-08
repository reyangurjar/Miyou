import CardListWithHeading from "@/components/CardListWithHeading"



const Popular = async({params}) => {
  const getData= async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/top100/${params.pageCount}`);
      console.log("request sent to " + `http://localhost:3000/api/top100/${params.pageCount}`)
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
    <CardListWithHeading title={"Top 100 Anime"}  page="top100" data={data} pageCount={params.pageCount}/>
    </div>
  )
}

export default Popular;