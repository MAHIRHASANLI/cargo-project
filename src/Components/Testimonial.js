import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../style.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const array = [
    {
        name: "Serena",
        email: "sena.com",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore, ducimus tenetur vitae aspernatur dignissimos natus dolore nihil porro non.",
        image: "https://dthezntil550i.cloudfront.net/ha/latest/ha1810280446487590005970747/62597934-3fdd-4b55-a76f-f1c875ae5666.png"
    },
    {
        name: "Natalia",
        email: "natalia.com",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore, ducimus tenetur vitae aspernatur dignissimos natus dolore nihil porro non.",
        image: "https://dthezntil550i.cloudfront.net/ha/latest/ha1810280446487590005970747/62597934-3fdd-4b55-a76f-f1c875ae5666.png"
    },
    {
        name: "Serena",
        email: "sena.com",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore, ducimus tenetur vitae aspernatur dignissimos natus dolore nihil porro non.",
        image: "https://dthezntil550i.cloudfront.net/ha/latest/ha1810280446487590005970747/62597934-3fdd-4b55-a76f-f1c875ae5666.png"
    },
    {
        name: "Serena",
        email: "sena.com",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore, ducimus tenetur vitae aspernatur dignissimos natus dolore nihil porro non.",
        image: "https://dthezntil550i.cloudfront.net/ha/latest/ha1810280446487590005970747/62597934-3fdd-4b55-a76f-f1c875ae5666.png"
    },
    {
        name: "Serena",
        email: "sena.com",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore, ducimus tenetur vitae aspernatur dignissimos natus dolore nihil porro non.",
        image: "https://dthezntil550i.cloudfront.net/ha/latest/ha1810280446487590005970747/62597934-3fdd-4b55-a76f-f1c875ae5666.png"
    }
]

const TestimonialSection = () => {
    return (
        <section className='lg:h-[90vh] bg-[#A074E8]'>
            <div className='lg:max-w-[75%] md:max-w-[80%] w-[90%] mx-auto'>
                <h2 className='mb-4 text-[28px] font-[600] leading-none text-center tracking-tight text-gray-900 md:text-[40px] lg:text-[44px] dark:text-white' data-aos="fade-down" data-aos-delay="100">Testimonials</h2>
                <Swiper
                    breakpoints={{
                        // when window width is >= 480px
                        // when window width is >= 640px
                        0: {
                            width: 0,
                            slidesPerView: 1,
                        },
                        540: {
                            width: 640,
                            slidesPerView: 1,
                        },
                        // when window width is >= 640px
                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },
                    }}
                    navigation={true}
                    spaceBetween={15}
                    slidesPerView={1}
                    pagination={true}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                >
                    {
                        array && array.map((item, ind) => {
                            return (
                                <SwiperSlide className='flex justify-center items-center bg-[red] rounded-[12px] h-[300px]' key={ind}>
                                    <div className='bg-[red]'>
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div>
                                        <h5>{item.name}</h5>
                                        <p>{item.email}</p>
                                        <p>{item.title}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>
        </section>
    )
}

export default TestimonialSection