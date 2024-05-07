

export default function CardListWithHeading() {
  
  return (
    <div>
        <Parent className="m-4 sm:my-8 mx-20 mb-4 sm:mb-8 text-white">
          <Heading className="text-2xl sm:text-3xl font-extralight ">
            <span className="font-semibold">Search</span> Results
          </Heading>
          <CardWrapper className="grid justify-between grid-cols-[repeat(auto-fill,110px)] gap-0 gap-y-6 sm:grid-cols-[repeat(auto-fill,160px)] sm:gap-4">
            {data.Page.media.map((item, i) => (
              <Wrapper className="no-underline" key={item.idMal} href={`/id/${item.idMal}`}>
                <img className="w-32 h-44 rounded-md sm:rounded-lg object-cover sm:w-40 sm:h-60" src={item.coverImage.extraLarge} alt="" />
                <p className="font-normal text-lg max-w-40">
                  {item.title.english !== null
                    ? item.title.english
                    : item.title.userPreferred}
                </p>
              </Wrapper>
            ))}
          </CardWrapper>
          {data.Page.media.length === 0 && <h2 className="text-center">No Results Found</h2>}
        </Parent>
     
    </div>
  );
}

