export default async function fetchData(url) {
    console.log(url)
    try {
        const response = await fetch(url,{next: {revalidate: 86400}});
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        return {error: 'Failed to fetch data'}
    }
}