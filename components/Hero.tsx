"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    img: "/images/wan.jpg",
    title: "WAN 2.2 Image generation.",
    desc: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic features.",
    btn: "Try WAN 2.2",
  },
  {
    img: "/images/flux.jpg",
    title: "FLUX.1 Krea",
    desc: "We’re making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    btn: "Learn More",
  },
  {
    img: "/images/flux2.png",
    title: "FLUX.2 Krea",
    desc: "Generate complex images with the brand new and powerful WAN 2.3 model.",
    btn: "Try WAN 2.3",
  },
  {
    img: "/images/grafitti.png",
    title: "FLUX.3 Krea",
    desc: "We’re making the weights to our FLUX.1 Krea model open-source.",
    btn: "Learn More Krea",
  },
];

export default function Hero() {
  return (
    <section className="mt-6 relative">
      <Swiper
        modules={[Pagination, Navigation, Keyboard]}
        pagination={{
          el: ".custom-swiper-pagination",
          clickable: false, 
        }}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true, 
        }}
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-2xl overflow-hidden"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={slide.img}
                alt={slide.title}
                width={1200}
                height={500}
                className="object-cover w-full h-72 md:h-96"
              />

              {/* Overlay content bottom-left */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-left">
                <div className="max-w-md">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {slide.title}
                  </h2>
                  <p className="mt-2 text-sm md:text-base text-gray-200">
                    {slide.desc}
                  </p>
                </div>

                {/* Button at bottom-right */}
                {slide.btn && (
                  <div className="absolute bottom-6 right-6">
                    <button className="px-6 py-4 bg-white text-black rounded-lg text-lg font-semibold shadow hover:bg-gray-100">
                      {slide.btn}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* External pagination container */}
      <div className="custom-swiper-pagination flex justify-center mt-4"></div>

      {/* Navigation arrows */}
      <div className="custom-swiper-button-prev absolute top-1/2 left-4 -translate-y-1/2 z-10 cursor-pointer bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800">
        <ChevronLeft className="w-8 h-8 font-bold" />
      </div>
      <div className="custom-swiper-button-next absolute top-1/2 right-4 -translate-y-1/2 z-10 cursor-pointer bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800">
        <ChevronRight className="w-8 h-8 font-bold" />
      </div>

      {/* Custom styles for Swiper */}
      <style jsx global>{`
        /* Dots */
        .custom-swiper-pagination .swiper-pagination-bullet {
          background: black !important;
          opacity: 0.6;
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          margin: 0 6px !important;
          pointer-events: none;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background: black !important;
          opacity: 1;
          width: 14px;
          height: 14px;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.9);
        }

        /* Disabled arrows */
        .swiper-button-disabled {
          opacity: 0.4 !important;
          cursor: not-allowed !important;
          pointer-events: none !important;
        }
      `}</style>
    </section>
  );
}
