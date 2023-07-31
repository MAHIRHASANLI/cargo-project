import React from 'react'

const TopFooterSection = () => {
    return (
        <section className='lg:py-[100px] py-[50px] container mx-auto' data-aos="fade-up" data-aos-delay="400">
            <div className='lg:max-w-[80%] md:max-w-[90%] w-[90%] mx-auto flex justify-between  flex-col lg:flex-row text-center lg:text-left gap-y-10'>
                <div className='lg:w-[45%] flex flex-col justify-between lg:items-start items-center'>
                    <a href="https://flowbite.com/" className=" mb-10 flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-12" alt="Flowbite Logo" />
                        <span className='text-[18px] font-normal text-gray-500 dark:text-gray-400 ml-[20px]'>Product Texas</span>
                    </a>

                    <div className='font-bold mb-5 italic cursor-pointer'>Product Texas, 234 Bokki Avenue Street BMW 99388</div>
                    <div className='text-[15px] text-gray-500 dark:text-gray-400 hover:text-[black] transition-all italic cursor-pointer'>info@producttexas.project</div>
                    <div className='text-[15px] text-gray-500 dark:text-gray-400 hover:text-[black] transition-all italic cursor-pointer'> 1-232-7788 (Main)</div>
                </div>


                <div className='text-center mt-[25px] md:mt-0 lg:text-start'>
                    <div className='font-bold mb-4'>About</div>
                    <div>
                        <div className='text-[15px] text-gray-500 dark:text-gray-400 hover:text-[black] transition-all mt-3 cursor-pointer'>Profile</div>
                        <div className='text-[15px] text-gray-500 dark:text-gray-400 hover:text-[black] transition-all mt-3 cursor-pointer'>Features</div>
                        <div className='text-[15px] text-gray-500 dark:text-gray-400 hover:text-[black] transition-all mt-3 cursor-pointer'>Careers</div>
                        <div className='text-[15px] text-gray-500 dark:text-gray-400 hover:text-[black] transition-all mt-3 cursor-pointer'>DW News</div>
                    </div>
                </div>

                <div className='text-center mt-[25px] lg:mt-0 lg:text-start'>
                    <div className='font-bold mb-4'>Help</div>
                    <div>
                        <div className='text-[15px] text-gray-500 dark:text-gray-400 hover:text-[black] transition-all mt-3 cursor-pointer'>Support</div>
                        <div className='text-[15px] text-gray-500 dark:text-gray-400 hover:text-[black] transition-all mt-3 cursor-pointer'>Sign Up</div>
                        <div className='text-[15px] text-gray-500 dark:text-gray-400 hover:text-[black] transition-all mt-3 cursor-pointer'>Guide</div>
                        <div className='text-[15px] text-gray-500 dark:text-gray-400 hover:text-[rgb(0,0,0)] transition-all mt-3 cursor-pointer'>Reports</div>
                        <div className='text-[15px] text-gray-500 dark:text-gray-400 hover:text-[black] transition-all mt-3 cursor-pointer'>Q & A</div>
                    </div>
                </div>

                <div className='text-center mt-[25px] lg:mt-0 lg:text-start'>
                    <div className=' text-[15px] block font-bold mb-8'>Social Media</div>
                    <div className='flex justify-center gap-x-3 gap-y-3'>
                        <i className="fa-brands fa-youtube text-[15px] p-[10px] text-white hover:text-[#ec4899] bg-gray-300 transition-all rounded-[50%]"></i>
                        <i className="fa-brands fa-instagram text-[15px] p-[10px] text-white hover:text-[#ec4899] bg-gray-300 transition-all rounded-[50%]"></i>
                        <i className="fa-brands fa-github text-[15px] p-[10px] text-white hover:text-[#ec4899] bg-gray-300 transition-all rounded-[50%]"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopFooterSection