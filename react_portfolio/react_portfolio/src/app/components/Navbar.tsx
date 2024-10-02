'use client'
import Link from 'next/link'
import {Icon} from '@iconify/react'
import{useState} from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const hei = menuOpen ? 'hei!!!' : 'hei'
    return (
        <nav className='flex justify-between text-2xl pt-12 mx-[10%]'>
            <Link href = '/' className='flex-1 text-3xl font-bold'>Portfolio</Link>
            <div className=' text-3xl flex flex-col items-end'>
                <Icon
                    onClick={() => setMenuOpen(!menuOpen)}
                    icon= {`${menuOpen ? 'ic:baseline-close' : 'charm:menu-hamburger' }`}
                    className='md:hidden'
                />
                 <div className={`
                flex
                flex-1
                justify-between
                gap-4
                ${!menuOpen && 'max-md:hidden'}
                max-md:flex-col
                max-md:bg-gradient-to-b
                max-md:from-secondary
                max-md:to-dark
                max-md:items-center
                max-md:p-4
                rounded-md`} 
                >
                    <Link href = '#about'>About</Link>
                    <Link href = '#experience'>Experience</Link>
                    <Link href = '#projects'>Projects</Link>
                    <Link href = '#contact'>Contact</Link>
            </div>
            </div>

            
        </nav>
    )
}

export default Navbar