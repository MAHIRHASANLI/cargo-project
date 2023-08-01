import React from 'react';

import { arrayTestimonial } from "../data";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../assets/slider.css"
import { Pagination } from "swiper/modules";

const TestimonialSlider = () => {
    return (
        <Swiper slidesPerView={'auto'} spaceBetween={20} pagination={{ clickable: true }} modules={[Pagination]} className='mySwiper'>
            {
                arrayTestimonial && arrayTestimonial.map((item, ind) => {
                    return (
                        <SwiperSlide key={ind} className='bg-white rounded-[20px] border xl:max-w-[645px] max-h-[330px] md:pt-[60px] pt-[40px] px-[35px] xl:px-[70px] pb-[50px] flex items-center gap-x-[30px] shadow-xl'>
                            <img className='' src={item.image} alt={item.name} />

                            <div className='text-start'>
                                <h5 className='text-[17px] font-normal'>{item.name}</h5>
                                <p className='md:text-[16px] text-[12px] mb-[10px]'>{item.web}</p>
                                <p className='md:text-[16px] text-[12px]'>{item.title}</p>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default TestimonialSlider;