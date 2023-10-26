import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'

const SwiperButtons = () => {
    const swiper = useSwiper();
    const [isActiveLeft, setActiveLeft] = useState(false)
    const [isActiveRight, setActiveRight] = useState(true)

    useEffect(() => {
        swiper.on("slideChange", (swiper) => {
            setActiveRight(true)
            setActiveLeft(true)
            if (swiper.isEnd) {
                return setActiveRight(false)
            }
            if (swiper.isBeginning) {
                return setActiveLeft(false)
            }        
        })    
    }, [swiper])

    return (
        <>
            <button className={`${isActiveLeft ? "opacity-100": "opacity-0"} group absolute ml-5 bg-white top-1/2 z-10 rounded-full w-12 h-12 hover:bg-black shadow-[0_0_22px] shadow-black/30`} onClick={() => swiper?.slidePrev()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:fill-white w-6 h-6 transform -rotate-90 m-auto" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>
            </button>
            <button className={`${isActiveRight ? "opacity-100": "opacity-0"} group absolute right-0 mr-5 bg-white top-1/2 z-10 rounded-full w-12 h-12 hover:bg-black shadow-[0_0_22px] shadow-black/30`} onClick={() => swiper?.slideNext()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:fill-white w-6 h-6 transform rotate-90 m-auto" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>
            </button>
        </>

    )
}

export default SwiperButtons