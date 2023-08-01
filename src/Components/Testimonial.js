import TestimonialSlider from './TestimonialSlider';



const TestimonialSection = () => {
    return (
        <section className='bg-[#A074E8] py-[50px]' data-aos="fade-up" data-aos-delay="200">
            <h2 className='mb-4 text-[28px] font-[600] leading-none  tracking-tight text-[white] text-center md:text-[40px] lg:text-[44px] dark:text-white' data-aos="fade-down" data-aos-delay="100">
                Testimonials
            </h2>
            <div className='lg:max-w-[75%] md:max-w-[80%] w-[90%] mx-auto pt-[50px]'>
                <TestimonialSlider/>
            </div>
        </section>
    )
}

export default TestimonialSection