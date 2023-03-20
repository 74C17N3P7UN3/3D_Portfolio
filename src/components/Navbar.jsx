import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
   const [active, setActive] = useState('')
   const [toggle, setToggle] = useState(false)

   return (
      <nav className={`${styles.paddingX} fixed top-0 flex items-center w-full py-5 z-20 bg-primary`}>
         <div className='flex items-center justify-between w-full max-w-7xl mx-auto'>
            <Link
               to='/'
               className='flex items-center gap-2'
               onClick={() => {
                  setActive("");
                  window.scrollTo(0, 0)
               }}
            >
               <img
                  src={logo}
                  alt='Logo'
                  className='h-9 w-9 object-contain'
               />
               <p className='flex text-[18px] font-bold text-white cursor-pointer'>
                  TacitNeptune&nbsp;
                  <span className='md:block hidden'>| Freelancer</span>
               </p>
            </Link>
            <ul className='md:flex hidden flex-row gap-10 list-none'>
               {navLinks.map((link) => (
                  <li
                     key={link.id}
                     className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
                     onClick={() => setActive(link.title)}
                  >
                     <a href={`#${link.id}`}>{link.title}</a>
                  </li>
               ))}
            </ul>

            <div className='md:hidden flex flex-1 items-center justify-end'>
               <img
                  src={toggle ? close : menu}
                  alt="Menu"
                  className='h-[28px] w-[28px] object-contain cursor-pointer'
                  onClick={() => setToggle((prev) => !prev)}
               />
               <div className={`${!toggle ? 'hidden' : 'flex'} absolute top-20 right-0 mx-4 my-2 min-w-[140px] p-6 rounded-xl black-gradient z-10`}>
                  <ul className='flex flex-col items-start justify-end gap-4 list-none'>
                     {navLinks.map((link) => (
                        <li
                           key={link.id}
                           className={`${active === link.title ? 'text-white' : 'text-secondary'} font-poppins text-[16px] font-medium cursor-pointer`}
                           onClick={() => {
                              setActive(link.title)
                              setToggle((prev) => !prev)
                           }}
                        >
                           <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </nav>
   )
}

export default Navbar
