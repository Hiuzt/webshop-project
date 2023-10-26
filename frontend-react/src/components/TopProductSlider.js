import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import ProductCard from './home/ProductCard';
import SwiperButtons from './home/SwiperButtons';

const TopProductSlider = () => {

    const bestSellersArray = [
        ["https://platincdn.com/3818/pictures/thumb/300X-RORZUEYNSH9132021122643_izeltas-8244-trendserisi-takim-dolabi.jpg", "Hollywood equipments storage", 2500, 10, 1, 0],
        ["https://platincdn.com/3818/pictures/thumb/300X-NFYDOEIBVA913202112381_izeltas-8241-pro-takim-dolabi.jpg", "Hollywood equipments storage large", 5000, 0, 0, 0],
        ["https://platincdn.com/3818/pictures/thumb/300X-HDYBTRYWKC3132023215710_MATKAP01.webp", "Hollywood equipments storage large", 3000, 0, 0, 0],
        ["https://platincdn.com/3818/pictures/thumb/300X-OJVHLUTYGN1013202113942_DHT-D12010003-3-Ton-Kriko-Standi-w.jpg", "Hollywood equipments storage large", 2500, 10, 0, 0],
        ["https://platincdn.com/3818/pictures/thumb/300X-INBDCVTVWP928202192756_dht-D11010003-400-lumen-calisma-lambasi-FOL.jpg", "Hollywood equipments storage large", 2500, 10, 1, 0],
    ]

    return (
        <>

            <Swiper 
                slidesPerView={1} 
                spaceBetween={0} 
                modules={[Navigation]}
                breakpoints={{
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 12,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 12,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 12,
                    },
                }}
            
            >
                {bestSellersArray.map((productValue, productIndex) => (
                    <SwiperSlide className="h-full" key={productIndex}><ProductCard productSource = {productValue} /></SwiperSlide>
                ))}
                <SwiperButtons />

            </Swiper>

        </>
    )
}

export default TopProductSlider