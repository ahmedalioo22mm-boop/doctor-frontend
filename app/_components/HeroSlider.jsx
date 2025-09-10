"use client";

/** @format */

import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import Image from "next/image";
import { Button } from "@/components/ui/button";

function HeroSlider() {
  const slides = [
    {
      image: "/img/heroslider/hero-carousel-1.jpg",
      title: "Your Health, Our Priority",
      text: "We provide advanced medical care with experienced doctors, modern technology, and a caring approach for every patient.",
    },
    {
      image: "/img/heroslider/hero-carousel-2.jpg",
      title: "Specialized Medical Services",
      text: "From cardiology to pediatrics, our expert teams are ready to help you and your family stay healthy and safe.",
    },
    {
      image: "/img/heroslider/hero-carousel-3.jpg",
      title: "Easy Online Appointments",
      text: "Book your appointment quickly and conveniently with top doctors at your preferred time.",
    }
  ];

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
     {slides.map((slide,index)=>(
 <SwiperSlide key={index} >

<div className="relative w-full h-[80vh]">
  <Image src={slide.image} alt={slide.title} fill style={{ objectFit: 'cover' }}/>
  <div className="absolute inset-0  bg-opacity-30 flex flex-col justify-center items-center text-center text-cyan-600 px-4">
    <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
    <p className="max-w-xl">{slide.text}</p>
   <Button>read More</Button>
  </div>
</div>
</SwiperSlide>
     ))}
        
      </Swiper>
    </section>
  );
}

export default HeroSlider;