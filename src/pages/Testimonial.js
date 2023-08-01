import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const array = [
    {
        name: "Serena",
        email: "sena.com",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore, ducimus tenetur vitae aspernatur dignissimos natus dolore nihil porro non.",
        image: "https://e1.pxfuel.com/desktop-wallpaper/128/834/desktop-wallpaper-hot-girl-random-girl.jpg"
    },
    {
        name: "Natalia",
        email: "natalia.com",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore, ducimus tenetur vitae aspernatur dignissimos natus dolore nihil porro non.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR0qrFtIqXKB2M3P8zNGAHtZBmtkkJzKFTuQ&usqp=CAU"
    },
    {
        name: "Serena",
        email: "sena.com",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore, ducimus tenetur vitae aspernatur dignissimos natus dolore nihil porro non.",
        image: "https://e1.pxfuel.com/desktop-wallpaper/128/834/desktop-wallpaper-hot-girl-random-girl.jpg"
    },
    {
        name: "Serena",
        email: "sena.com",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore, ducimus tenetur vitae aspernatur dignissimos natus dolore nihil porro non.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR0qrFtIqXKB2M3P8zNGAHtZBmtkkJzKFTuQ&usqp=CAU"
    },
    {
        name: "Serena",
        email: "sena.com",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore, ducimus tenetur vitae aspernatur dignissimos natus dolore nihil porro non.",
        image: "https://e1.pxfuel.com/desktop-wallpaper/128/834/desktop-wallpaper-hot-girl-random-girl.jpg"
    }
]

const TestimonialSection = () => {
    return (
        <section className='bg-[#A074E8] py-[100px]' data-aos="fade-up">
                <h2 className='mb-4 text-[28px] font-[600] leading-none  tracking-tight text-[white] text-center md:text-[40px] lg:text-[44px] dark:text-white' data-aos="fade-down" data-aos-delay="100">Testimonials</h2>
            <div className='lg:max-w-[75%] md:max-w-[80%] w-[90%] mx-auto pt-[50px]'>
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
                                <SwiperSlide className='rounded-[12px]' key={ind}>
                                    <div className='flex justify-between items-start md:gap-x-5 gap-x-4 rounded-[12px] h-[220px] w-full md:px-[50px] px-[30px] py-[30px] relative'>
                                    <div className=' h-full w-[200px] flex justify-center items-start'>
                                        <img className='w-[60px] h-[60px] object-cover rounded-[50%] ' src={item.image} alt={item.name}/>
                                    </div>
                                    <div className='text-start'>
                                        <h5 className='text-[17px] font-normal'>{item.name}</h5>
                                        <p className='text-[13px] mb-[10px]'>{item.email}</p>
                                        <p className='text-[12px]'>{item.title}</p>
                                    </div>
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