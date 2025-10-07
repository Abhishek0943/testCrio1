"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { swiperContent } from "@/constants/swiperContent";

const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      className="h-[70vh]  mb-1"
      spaceBetween={100}
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
      }}
    >
      {swiperContent.map((content) => {
        return (
          <SwiperSlide>
            <div className="drop-shadow-2xl h-full flex flex-1 justify-around items-center p-5 max-md:flex-col max-sm:p-0 max-sm:pb-20 max-sm:gap-0">
              <div className="flex flex-col text-center gap-8 w-[550px] max-sm:w-auto max-sm:gap-3">
                <h1 className="text-5xl font-bold max-sm:text-3xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent">
                  {content.heading}
                </h1>
                <h2 className="text-xl font-bold max-sm:text-lg bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent">
                  {content.description}
                </h2>
                <div></div>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src={content.imageUrl}
                  alt={content.alt}
                  width={content.alt === "hero" ? 300 : 700}
                  height={0}
                  priority={true}
                  className={`max-sm:p-2 rounded-sm max-sm:rounded-xl ${
                    content.alt === "hero" ? "max-sm:w-[280px] w-[380px]" : ""
                  }`}
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperComponent;
