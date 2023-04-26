import { useState } from 'react'
import { close, logo, menu } from '../assets';
import { navLinks } from '../constant';

const Navbar = () => {
    const [toggle, settoggle] = useState(false)

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar w-[1280px] h-[81] 
        l-[160px] t-[10px]">
            <img src={logo} alt='atendi' className='w-[77px] h-[81px]' />

            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                    <li key={nav.id} className={`font-poppins font-normal
                        cursor-pointer text-16px ${index === navLinks.length
                            - 1 ? 'mr-0' : 'mr-10'}`}>
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-1 
        justify-end items-center">
                <img src={toggle ? close : menu}
                    alt="menu" className="w-[28px] h-[28]
            object-countain"
                    onClick={() => settoggle((prev) => !prev)}
                />

                <div
                    className={`${toggle ? 'flex' : "hidden"} 
             p-6 bg-black-gradient absolute top-20 right-0 
             mx-4 my-2 min-w-[140px] rounded-x1 sidebar`}
                >
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li key={nav.id} className={`font-poppins font-normal
                                    cursor-pointer text-16px ${index === navLinks.length
                                    - 1 ? 'mr-0' : 'mb-4'}`}>
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar