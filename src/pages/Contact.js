import React from 'react'

const ContactSection = () => {
    return (
        <section className='p-[70px] mt-[80px] border-t-[1px]'>
            <div className='lg:max-w-[80%] md:max-w-[90%] w-[90%] mx-auto flex justify-between items-center lg:flex-row flex-col'>
                <div className='lg:text-start text-center'>
                    <h2 className='mb-4 text-[26px] font-[600] leading-none  tracking-tight text-gray-900 md:text-[40px] lg:text-[42px] dark:text-white' data-aos="fade-up" data-aos-delay="400">Contact Us From Here</h2>
                    <p className='text-[15px] font-normal text-gray-500 md:text-[16px] lg:text-[17px] dark:text-gray-400 mt-5' data-aos="fade-up" data-aos-delay="500">Get limited 1 week free try our features!</p>
                </div>
                <div className='flex justify-center items-center lg:flex-row flex-col lg:gap-5'>
                    <button className="bg-[#ec4899] text-white hover:bg-[white] hover:text-[#ec4899] transition-all font-bold px-4 rounded-full py-3 shadow-md mt-[30px] lg:mt-0" data-aos="fade-up" data-aos-delay="400">Learn More</button>
                    <button className='bg-white hover:bg-[#A074E8] hover:text-white transition-all px-6 py-3 rounded-3xl border-1  items-center gap-x-2  shadow-md md:block md:w-auto mt-[30px] lg:mt-0' data-aos="fade-up" data-aos-delay="500">Request Demo <i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </section>
    )
}

export default ContactSection