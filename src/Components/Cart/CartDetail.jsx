import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const CartDetail = () => {
    const { cart, addToCart, isInCart, clearCart, deleteFromCart, getTotalQuantity, getTotal} = useContext(CartContext)


  return (
    <div>
        {   
            cart.map(i => (
                <div key={i.id}>
                <li>
                    <span>{i.name}</span> -- 
                    <span>{i.price}</span> -- 
                    <span>{i.description}</span>
                      
                </li>
                </div>
            ))
        }
        
    </div>

  )
}

export default CartDetail