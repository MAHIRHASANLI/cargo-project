import React, { useState } from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
let array = [
  { name: 'Deliver', link: '/' },
  { name: 'About', link: '/' },
  { name: 'Features', link: '/' },
  { name: 'SignUp', link: '/' },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 py-2 px-4 lg:px-0 z-99" data-aos='fade-down' data-aos-delay='1000' data-aos-duration='900'>
      <div className="lg:max-w-[75%] flex flex-wrap items-center justify-between mx-auto py-4">
        <div className='flex items-center gap-x-[120px]'>
          <a href="https://flowbite.com/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-12" alt="Flowbite Logo" />
          </a>
          {/*nav link*/}
          <ul className={`md:flex pt-[60px] md:pt-0 pl-9 md:pl-0 md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full transition-all md:bg-transparent bg-[#A074E8] duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}`}>
            {
              array && array.map((item, ind) => {
                return (
                  <li key={ind} className='my-2 md:my-0 md:ml-8 font-semibold'>
                    <a href='/' className="block py-2 pr-4 text-white font-sans text-[18px] rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">{item.name}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <button className='bg-white hover:bg-[#A074E8] hover:text-white transition-all px-6 py-3 rounded-3xl border-1  items-center gap-x-2  shadow-md  md:block md:w-auto'>Request Demo <i className="fa-solid fa-arrow-right"></i></button>
        {/* menu icon */}
        <div onClick={() => setIsOpen(!isOpen)} className='w-7 h-7  cursor-pointer md:hidden'>
          {
            isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />
          }
        </div>
      </div>
    </nav>
  )
}

export default Header;

