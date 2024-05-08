import Link from "next/link";

export default function CardListWithHeading({title,page,data,pageCount}) {
  return (
    <div>
        <div className="m-4 sm:my-8 mx-20 mb-4 sm:mb-8 text-white">
          <h1 className="text-2xl sm:text-3xl font-extralight mb-4 ">
            <span className="font-semibold">{title}</span> Results
          </h1>
          <div className="grid justify-between grid-cols-[repeat(auto-fill,110px)] gap-0 gap-y-6 sm:grid-cols-[repeat(auto-fill,160px)] sm:gap-4">
            {data.Page.media.map((item, i) => (
              <Link className="no-underline" key={item.idMal} href={`/id/${item.idMal}`}>
                <img className="w-32 h-44 rounded-md sm:rounded-lg object-cover sm:w-40 sm:h-60" src={item.coverImage.extraLarge} alt="" />
                <p className="font-normal text-lg max-w-40">
                  {item.title.english !== null
                    ? item.title.english
                    : item.title.userPreferred}
                </p>
              </Link>
            ))}
          </div>
          {data.Page.media.length === 0 && <h2 className="text-center">No Results Found</h2>}

{pageCount !== undefined &&
  <div className="mt-10 mb-8 flex items-center justify-center gap-4">
          {pageCount > 1 && (
              <Link className="py-3 px-8 text-white border-2 border-[#53507a] rounded-lg" href={`/${page.toLowerCase()}/` + (parseInt(pageCount) - 1)}>
                Previous
              </Link>
            )}
            <Link  className="py-3 px-8 text-white border-2 border-[#53507a] rounded-lg"href={`/${page.toLowerCase()}/` + (parseInt(pageCount) + 1)}>Next</Link>
            </div>
            
}

        </div>
     
    </div>
  );
}

