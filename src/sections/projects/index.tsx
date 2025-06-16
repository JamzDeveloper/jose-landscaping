"use client";
import Image from "next/image";
import { CustomButton } from "@/components/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const ProjectSection: React.FC = () => {
  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-20 py-16 bg-white">
      {/* Contenedor del título y descripción */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12 lg:gap-16">
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#00350FB2] font-bold leading-tight">
          Project Gallery
        </h2>

        {/* Descripción */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl w-full md:w-1/2 lg:w-2/3 leading-relaxed">
          Explore our landscape projects, where creativity and nature blend to
          create vibrant, sustainable spaces that enhance outdoor living.
        </p>
      </div>

      {/* Área de proyectos */}
      <div className="mt-16 w-full  rounded-lg">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/carousel/image 6.png"
                fill
                alt="image"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[300px]">
              <Image src="/images/image-banner.png" fill alt="image"></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/carousel/image 1.png"
                fill
                alt="image"
              ></Image>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/carousel/image 2.png"
                fill
                alt="image"
              ></Image>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/carousel/image 3.png"
                fill
                alt="image"
              ></Image>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/carousel/image 4.png"
                fill
                alt="image"
              ></Image>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/carousel/image 5.png"
                fill
                alt="image"
              ></Image>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/carousel/image 6.png"
                fill
                alt="image"
              ></Image>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/carousel/image 7.png"
                fill
                alt="image"
              ></Image>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/carousel/image 8.png"
                fill
                alt="image"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/carousel/image 9.png"
                fill
                alt="image"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/carousel/image 10.png"
                fill
                alt="image"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/carousel/image 11.png"
                fill
                alt="image"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/carousel/image 12.png"
                fill
                alt="image"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/carousel/image 13.png"
                fill
                alt="image"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/carousel/image 14.png"
                fill
                alt="image"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/carousel/image 15.png"
                fill
                alt="image"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/carousel/image 16.png"
                fill
                alt="image"
              ></Image>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Botón */}
      <div className="mt-10 flex justify-center w-full">
        <CustomButton />
      </div>
    </section>
  );
};

export default ProjectSection;
