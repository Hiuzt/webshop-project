import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import carousel1 from "../../files/products/carousel1.jpg"
import carousel2 from "../../files/products/carousel2.jpg"
import carousel3 from "../../files/products/carousel3.jpg"
import carousel4 from "../../files/products/carousel4.jpg"
import carousel5 from "../../files/products/carousel5.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

import 'swiper/css/scrollbar';

const HomeSlider = () => {
    const swiperStyle = {
        "--swiper-pagination-color": 'rgb(37 99 235)',
        "--swiper-pagination-bullet-width": "20px",
        "--swiper-pagination-bullet-border-radius": "2px",
        "--swiper-pagination-bullet-inactive-color": "#000000",
        "--swiper-pagination-bullet-inactive-opacity": "0.5",
        "--swiper-pagination-bullet-height": "5px"
    }

    return (
        <div className="m-auto">
            <Swiper
                style={
                    swiperStyle
                }
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                autoplay={{ delay: 5000 }}
                slidesPerView={1}
                centeredSlides={true}
                pagination={{ clickable: true }}

            >
                <SwiperSlide><img className="w-full max-h-[455px]" src={carousel1} alt=""/></SwiperSlide>
                <SwiperSlide><img className="w-full max-h-[455px]" src={carousel2} alt="" /></SwiperSlide>
                <SwiperSlide><img className="w-full max-h-[455px]" src={carousel3} alt=""/></SwiperSlide>
                <SwiperSlide><img className="w-full max-h-[455px]" src={carousel4} alt=""/></SwiperSlide>
                <SwiperSlide><img className="w-full max-h-[455px]" src={carousel5} alt=""/></SwiperSlide>
                <SwiperSlide><img className="w-full max-h-[455px]" src={carousel5} alt=""/></SwiperSlide>
                <SwiperSlide><img className="w-full max-h-[455px]" src={carousel5} alt=""/></SwiperSlide>
                <SwiperSlide><img className="w-full max-h-[455px]" src={carousel5} alt=""/></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HomeSlider