import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { useDispatch } from 'react-redux'
import { setOpenCart } from '../app/CartSlice'

const Navbar = () => {

    const [navState, setNavState] = useState(false)
    const dispatch = useDispatch();
    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }))
    }
    const onNavScroll = () => {
        if (window.scrollY > 30) {
            setNavState(true);
        }
        else { setNavState(false) }
    }
    useEffect(() => {
        window.addEventListener('scroll', onNavScroll)
        return () => {
            window.removeEventListener('scroll', onNavScroll)
        }
    }, [])


    return (
        <>
            <header className={!navState ? `absolute top-7 left-0 right-0 opacity-100 z-50` : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme"}>
                <nav className='flex items-center justify-between nike-container'>
                    <div className='flex items-center'>
                        <img src={logo} alt="/" className={`w-16 h-auto ${navState && 'filter brightness-0'}`} />
                    </div>
                    <ul className='flex items-center justify-center gap-2 mr-4'>
                        <li className='grid items-center'>
                            <i className={`ri-search-line icon-style text-xl ${navState && "text-slate-900 transition-all duration-300"}`}></i>
                        </li>
                        <li className='grid items-center'>
                            <i className={`ri-heart-line icon-style text-xl ${navState && "text-slate-900 transition-all duration-300"}`}></i>
                        </li>
                        <li className='grid items-center'>
                            <button type='button' onClick={onCartToggle} className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                                <i className={`ri-shopping-bag-2-line icon-style text-xl absolute -top-3 sm:-top-2.5 ${navState && "text-slate-900 transition-all duration-300"}`}></i>
                                <div className={`absolute top-2 -right-7  shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${navState ? 'bg-slate-900 text-slate-100 shadow-black' : 'bg-slate-100 text-black shadow-black'}`}>0</div>
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar