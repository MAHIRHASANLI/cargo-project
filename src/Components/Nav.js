import React from 'react'
import { arrayNavbar } from "../data";

const Nav = () => {
    return (
        <nav>
            <ul className='flex gap-x-8'>
                {
                    arrayNavbar && arrayNavbar.map((item, ind) => {
                        return (
                            <li key={ind}><a href={item.link} className='text-'>{item.name}</a></li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Nav