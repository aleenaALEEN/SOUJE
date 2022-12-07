
import React from 'react';


// import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import img1 from '../images/11-1140x570.jpg';
import img2 from '../images/01-1140x570.jpg';
import img3 from '../images/02-1140x570.jpg';
import Head from "./head";
import { Heading } from "./data";

export default function SliderComponent() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}   
                modules={[ Pagination, Navigation]}
                className="mySwiper h-[40vh] w-[100%]"
            >
                <SwiperSlide className="text-white flex flex-col hover:text-pink-400 hover:bg-pink-400 duration-1000 cursor-pointer" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.5)),url(${img1})` ,backgroundSize:"100% 100%"}}>
                   <Head data={{head:<h1 className='text-[17px] leading-tight sm:text-[40px] lg:text-[60px] font-bold '>{Heading.h1}</h1>}}/>
                   <hr className="h-[3px] w-[58%] bg-white"></hr>
                </SwiperSlide>
                <SwiperSlide className="text-white  flex flex-col hover:text-pink-400 duration-1000 cursor-pointer" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.5)),url(${img2})` ,backgroundSize:"100% 100%"}}>
                   <Head data={{head:<h1 className='text-[17px] leading-tight sm:text-[40px] lg:text-[60px] font-bold'>{Heading.h2}</h1>}}/> 
                   <hr className="h-[3px] w-[72%] bg-white"></hr>
                </SwiperSlide>
                <SwiperSlide className="text-white  flex flex-col hover:text-pink-400 duration-1000 cursor-pointer" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.5)),url(${img3})` ,backgroundSize:"100% 100%"}}>
                   <Head data={{head:<h1 className='text-[17px] leading-tight sm:text-[40px] lg:text-[60px] font-bold'>{Heading.h3}</h1>}}/>
                   <hr className="h-[3px] w-[75%] bg-white"></hr>
                </SwiperSlide>
            </Swiper>
        </>
    );
}