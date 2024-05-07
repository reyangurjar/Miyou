import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import Skeleton from "react-loading-skeleton";

import "swiper/css";
import "swiper/css/scrollbar";

function AnimeCardsSkeleton() {
    
  return (
    <div
      style={{
        marginBottom: "1rem",
      }}
    >
      <Swiper
        slidesPerView={7}
        spaceBetween={35}
        scrollbar={{
          hide: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 4,
            spaceBetween: 35,
          },
          "@1.30": {
            slidesPerView: 5,
            spaceBetween: 35,
          },
          "@1.50": {
            slidesPerView: 7,
            spaceBetween: 35,
          },
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {[...Array(8)].map((x, i) => (
          <SwiperSlide key={i}>
            <Skeleton
              className=" w-28 h-44 sm:w-40 sm:h-60"
              borderRadius={"0.5rem"}
              baseColor={"#262539"}
              highlightColor={"#34324D"}
            />
            <Skeleton
              className="w-28  sm:w-40  "
              baseColor={"#262539"}
              highlightColor={"#34324D"}
              count={2}
              style={{
                marginTop: "1rem",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default AnimeCardsSkeleton;
