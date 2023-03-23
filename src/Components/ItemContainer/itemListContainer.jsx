import React, { useContext } from 'react'
import "./itemListContainer.css"
import HandleProducts from '../HandleProducts/HandleProducts'
import { CartContext } from '../Context/CartContext'

const ItemListContainer = (props) => {

const { addToCart, deleteFromCart } = useContext(CartContext)

  return(
    <div>
        <div>
            
            <h1 style={{
                    marginTop:"50px",
                    marginLeft:"10px",
                    fontSize:"50px",
                }}>
               Bienvenidos a la Tienda Virtual de Bballers
            </h1>

            <p style={{
                padding:"10px",
                fontSize:"20px",

            }}> 
                En este espacio encontrarás los mejores accesorios deportivos y al mejor precio! Para que puedas estar siempre listo para dar lo mejor adentro de la cancha
            </p>
            
        </div>

        <HandleProducts />
       
        
        
    </div>
  )
}

export default ItemListContainer