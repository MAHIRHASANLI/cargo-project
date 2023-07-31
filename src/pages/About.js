
const AboutSection = () => {
    return (
        <section className='w-[100%] pb-4'>
            <div className='lg:max-w-[75%] md:max-w-[80%] w-[90%] mx-auto flex items-center justify-between md:flex-row flex-col bg-[#FAE8F4] rounded-[40px] lg:py-[70px] py-[40px] md:px-[30px] px-[30px] lg:pr-[100px]'>
                <div data-aos="zoom-in" data-aos-delay="600" data-aos-duration="600">
                    <img src='https://cdni.iconscout.com/illustration/premium/thumb/location-tracking-app-4475005-3714158.png' alt='' />
                </div>
                <div className='lg:text-left text-center h-full'>
                    <h2 className='mb-4 text-[26px] font-medium leading-none text-gray-900 md:text-[40px] lg:text-[44px] dark:text-white' data-aos="fade-down" data-aos-delay="100">Find Out A Little More About Us</h2>
                    <p className='text-[14px] font-normal text-gray-500 lg:text-[18px] md:text-[16px] dark:text-gray-400 lg:mt-10 mt-5' data-aos="fade-down" data-aos-delay="200">We are a company dedicated to the distribution of products by delivery to your home or to the place where you are, with the best quality of delivery.</p>
                </div>

            </div>
        </section>
    )
}

export default AboutSection