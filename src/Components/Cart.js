import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartState, setCloseCart } from '../app/CartSlice'
import CartCount from './Cart/CartCount'
import CartEmpty from './Cart/CartEmpty'
import CartItem from './Cart/CartItem'

const Cart = () => {
    const ifcartState = useSelector(selectCartState);
    const dispatch = useDispatch();
    const onCartToggle = () => {
        dispatch(setCloseCart({
            cartState: false
        }))
    }
    return (
        <>
            <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250]${ifcartState ? 'opacity-100 visible translate-x-0' : 'opacity-0 hidden transition-all duration-300 translate-x-8'}`}>
                <div className='blur-effect-theme h-screen max-w-xl w-full absolute right-0'>
                    <CartCount onCartToggle={onCartToggle} />
                    <CartEmpty onCartToggle={onCartToggle} />
                    <CartItem />
                </div>
            </div>
        </>
    )
}

export default Cart