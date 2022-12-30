import React from 'react'
import { useDispatch } from 'react-redux'
import setAddItemToCart from '../../app/CartSlice'

const Item = ({ ifExists, id, color, shadow, title, text, img, btn, rating, price }) => {
    const dispatch = useDispatch();
    const onAddToCart = () => {
        const item = { id, title, text, img, color, shadow, price };
        dispatch(setAddItemToCart(item))

    }

    return (
        <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${ifExists ? 'justify-items-start' : 'justify-items-center'} rounded-xl py-8 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}>
            <div className={`grid items-center  ${ifExists ? 'justify-items-start' : 'justify-items-center'}`}>
                <h1 className='text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow'>{title}</h1>
                <p className='text-slate-200 filter drop-shadow text-base md:text-sm fontn'>{text}</p>
                <div className='flex items-center justify-between w-28'>
                    <div className='flex items-center bg-white px-1 rounded'><h1 className='text-black text-sm font-medium'>${price}</h1></div>
                    <div className='flex items-center'><i className="ri-star-fill icon-style "></i><h1 className='md:text-sm text-slate-100'>{rating}</h1></div>
                </div>
                <div className='flex items-center justify-between w-28 my-2'>
                    <button type='button' className='bg-white button-theme px-2 h-8 text-[1.2rem]' onClick={() => onAddToCart()}><i class="ri-shopping-bag-3-fill icon-style text-slate-900 pt-2"></i></button>
                    <button type='button' className='bg-white h-8   button-theme px-1 text-sm py-[0.3rem] ml-.5'>{btn}</button>
                </div>
            </div>
            <div className={`flex items-center ${ifExists ? 'absolute top-5 right-1' : 'justify-center'}`}>
                <img src={img} alt="img/item-img" className={` transitions-theme hover:-rotate-12 ${ifExists ? 'h-auto w-64 lg:w-56 md:w-50 -rotate-[35deg]' : 'h-36 w-64'}`} />

            </div>
        </div>
    )
}

export default Item