"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import AnimeCardsSkeleton from "@/components/skeletons/AnimeCardsSkeleton";
export default function AnimeCards({criteria, count}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from API
        const response = await fetch(`/api/myanimelist/${criteria}?count=${count}`,{next: {revalidate: 86400}});
        const result = await response.json();
        setData(result);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <AnimeCardsSkeleton />
        // "Loading Your DATA"
      ) : 
      <Swiper
          slidesPerView={7}
          spaceBetween={35}
          scrollbar={{
            hide: false,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            "@0.75": {
              slidesPerView: 4,
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
          {data.data.map((item, i) => (
            <SwiperSlide key={i}>
              <div>
                <Link href={"id/" + item.node.id}>
                  <img loading="lazy" className="w-28 h-40 sm:w-40 sm:h-60 rounded-lg mb-1 object-cover" src={item.node.main_picture.large} alt="" />
                </Link>
                <p className="text-white text-lg font-normal">{item.node.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      }
      
    </div>
  );
}




 
