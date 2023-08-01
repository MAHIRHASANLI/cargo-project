import React, { useState } from 'react'
import { AcademicCapIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Nav from './Nav';
import NavMobile from './NavMobile';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='w-full mb-12 lg-mb-0 pt-[30px] z-20 relative px-4 lg:px-0' data-aos='fade-down' data-aos-delay='1200' data-aos-duration='1000'>
      <div className='lg:max-w-[75%] md:max-w-[80%] w-[90%] mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-x-[120px]'>
            <a href='/' className="h-[50px] w-[50px] text-blue-500 flex items-center">
              <AcademicCapIcon />
            </a>

            <div className='hidden lg:flex'>
              <Nav />
            </div>
          </div>

          <div className={`${isOpen ? 'max-h-52' : 'max-h-0'} lg:hidden absolute top-24 bg-[#60BEBC] w-full left-0 right-0 rounded transition-all overflow-hidden`}>
            <NavMobile />
          </div>

          <button className='bg-white hover:bg-[#A074E8] hover:text-white transition-all px-6 py-3 rounded-3xl border-1 flex  items-center justify-center shadow-md  md:block md:w-auto group'>Request Demo
            <i className="fa-solid fa-arrow-right group-hover:text-[white] text-[#A074E8] ml-[10px] transition-all"></i></button>

          <div onClick={() => setIsOpen(!isOpen)} className='w-7 h-7  cursor-pointer text-primary lg:hidden'>
            {
              isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;