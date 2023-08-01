import React from 'react';
import { arrayNavbar } from "../data";

const NavMobile = () => {
    return (
        <ul className='flex flex-col px-6 py-8'>
            {
                arrayNavbar && arrayNavbar.map((item, ind) => {
                    return (
                        <li key={ind}><a href={item.link} className='text-white'>{item.name}</a></li>
                    )
                })
            }
        </ul>
    )
}

export default NavMobile