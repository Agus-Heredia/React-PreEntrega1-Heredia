import React, { useContext, useState } from 'react'
import "./CartWidget.css"
import { CartContext } from '../Context/CartContext'

const CartWidget = () => {
    const { cart, addToCart, isInCart, clearCart, deleteFromCart, getTotalQuantity, getTotal} = useContext(CartContext)
    const [isOpen, setIsOpen] = useState(false)

    const openedCart = () => {
    setIsOpen(true)
    };

    const closedCart = () => {
        setIsOpen(false)
    
    };

    return (
        <>
            <button className="cart">
                <div 
                onMouseEnter={openedCart}
                onMouseLeave={closedCart}>

                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-bag-fill cartIcon" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                    </svg>

                    {
                        
                        cart.length > 0 ?  
                        <span className="cartBadge" onClick={addToCart}>{cart.length}</span>
                        :
                        console.log("No hay productos en el carrito para mostrar")

                    }
                    
                    {
                        isOpen && (
                            <div style={{
                                border:"1px solid #000",
                                padding:"10px",
                                margin:"5px"


                            }}>
                                <ul>
                                    {
                                        cart.map(item => (
                                            <>
                                            <li>
                                               <span><i> Producto:</i> <b>{item.name}</b></span>  ⁞ 
                                               <span><i> Cantidad:</i> <b>{item.quantity}</b></span>  ⁞ 
                                               <span><i> Precio: </i> <b>usd ${item.price}</b></span>
                                            </li>
                                            <div>
                                            <span>Precio Total: {getTotal(item)}</span>
                                            </div>
                                            </>
                                        ))
                                        
                                    }


                                </ul>
                            </div>
                
                        )


                    } 


                </div>
              
                
            </button>
        </>
    )
}

export default CartWidget