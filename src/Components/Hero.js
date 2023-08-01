import React from 'react'


const HeroSection = () => {
    return (
        <section className='lg:min-h-[90vh] py-12 flex justify-center items-center'>
            <div className='lg:max-w-[75%] md:max-w-[80%] w-[90%] mx-auto flex items-center justify-between flex-col lg:flex-row' >
                <div className='xl:text-left text-center'>
                    <h1 className='xl:max-w-[600px] mb-6 lg:mb-12 text-4xl font-bold leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white' data-aos="fade-down" data-aos-delay="400" data-aos-duration="400">Order Products Faster Easier</h1>
                    <p className='xl:max-w-[350px] mb-6 text-[14px] font-normal text-gray-500 lg:text-[18px] md:text-[16px]' data-aos="fade-down" data-aos-delay="500" data-aos-duration="500">Order your favorite foods at any time and wewill dellver them right to where you are</p>
                    <button className="bg-[#A074E8] text-white hover:bg-[white] hover:text-[#A074E8] transition-all font-bold px-4 rounded-full py-3 mb-8 shadow-md" data-aos="fade-down" data-aos-delay="600" data-aos-duration="600">Get Started</button>
                </div>
                <div className='' data-aos="fade-up" data-aos-delay="600">
                    <img src="https://img.freepik.com/premium-vector/courier-motorcycle-delivery-online-service_18591-65876.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;