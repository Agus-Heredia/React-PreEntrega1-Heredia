import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const CartDetail = () => {
    const { cart, clearCart, deleteFromCart, getTotalQuantity, getTotal} = useContext(CartContext)


  return (
    
  
    <div style={{
        margin: "20px",
        padding: "20px",
        border: "1px solid #000",
        borderRadius:"10px",
        display: "flex",
        flexDirection: "column",
        width: "800px",
    }} >
        <h2 style={{
            margin: "10px",
            fontSize: "30px",
            color: "blue"



        }}>Tu Carrito:</h2>

        {   
            cart.map(i => (
                <>
                <div key={i.id}>
                <li style={{
                    border: "1px solid #000",
                    margin: "10px",
                    borderRadius: "20px",
                    width: "550px",
                    padding: "10px",
                    display: "flex",
                    gap:"10px",
                    
                }}>
                    <button style={{
                        border: "2px solid red",
                        borderRadius: "50%",
                        color: "white",
                        background:"red",
                        marginRight: "10px",
                        fontSize: "12px",
                    }}
                    // onClick={() => deleteFromCart(i.id)} 
                    >X</button>
                    <span><b>Producto:</b> {i.name}</span> ┃ 
                    <span><b>Precio:</b> usd ${i.price}</span> ┃
                    <span><b>Cantidad:</b> {i.quantity}</span>
                   
                      
                </li>
                </div>
                </>
            ))
        }   
        
        
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px"
        }}>
        <span style={{
            fontSize: "20px",
            padding: "5px"
        }}><b>Total compra:</b> usd ${getTotal(cart)}</span>



        <button style={{
            border: "2px solid red",
            background: "red",
            color: "#fff",
            borderRadius: "10px",
            padding: "5px",
        }}
        onClick={clearCart}
        >Vaciar carrito</button>
        </div>
    </div>
  )
}

export default CartDetail