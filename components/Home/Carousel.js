"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PlayIcon from "@/assets/Icons/PlayIcon";




function Carousel({ images }) {
 
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
       navigation={true}
        pagination={{ dynamicBullets: true }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {images.map(
          (item, index) =>
            item.bannerImage !== null && (
              <SwiperSlide key={index}>
                <div className="relative">
                  <img
                    src={item.bannerImage}
                    className="w-full sm:h-[300px] h-[200px] object-cover rounded-xl"
                  />

                  <div className="absolute w-full height-1/2 -z-1 bottom-0 left-0 items-center justify-center  "
                  style={{
                    backgroundImage: `linear-gradient(rgba(27, 26, 39, 0) 0%, rgba(38, 36, 65, 0.3) 30%, rgb(0, 0, 0) 100%)`,
                  }}
                  >
                    <div className="mx-5 mt-12 mb-4 sm:mx-10 sm:mt-24 text-white flex justify-between items-start sm:items-center">
                     
                        <p
                        className="text-xl mt-2 sm:mt-0 sm:text-2xl font-semibold"
                        >
                          
                          {item.title.english !== null
                            ? item.title.english.length > 35
                              ? item.title.english.substring(0, 35) + "..."
                              : item.title.english
                            : item.title.romaji.length > 35
                            ? item.title.romaji.substring(0, 35) + "..."
                            : item.title.romaji}
                        </p>

                         <Link href={`/id/${item.idMal}`} className="btn justify-center btn-primary" >
              <PlayIcon className="md:h-4 md:w-4" />
             <div className="hidden md:block">
             Search
             </div>

            </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </div>
  );
}






export default Carousel;
