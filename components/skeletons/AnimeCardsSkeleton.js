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
            //   width={
            //     width <= 600 ? (width <= 400 ? "100px" : "120px") : "160px"
            //   }
            //   height={
            //     width <= 600 ? (width <= 400 ? "160px" : "180px") : "235px"
            //   }
              className="w-40 h-60 inline-flex"
              borderRadius={"0.5rem"}
              baseColor={"#262539"}
              highlightColor={"#34324D"}
            />
            <Skeleton
            //   width={width <= 600 ? "120px" : "160px"}
              className="w-40 h-10 "
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
