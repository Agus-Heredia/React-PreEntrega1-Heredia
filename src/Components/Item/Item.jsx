import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext';


const Item = ({ id, name, imgId, price, product}) => {
  const { cart, addToCart } = useContext(CartContext)


  return (


      <div key={id} style={{
        width: "400px",
        height: "600xp",
        border: "1px solid black",
        padding: "10px",
        display: "flex",
        margin: "10px",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: "10px",


      }}>

        <img src={imgId} alt="Img product" style={{
          width: "300px",
          height: "300px",
          alignItems: "center",
          background: "#fff",
          borderRadius: "20px"
        }} />
        <h2 style={{ backgroundColor: "#fff", fontStyle: "italic" }}>{name}</h2>
        <p style={{ backgroundColor: "#fff" }}>Precio: <b>usd ${price}</b></p>


        <div style={{ background: "#fff" }}>
          <Link to={`/item/${id}`} style={{
            backgroundColor: "#fff",
            textDecoration: "none",
            border: "1px solid blue",
            padding: "8px",
            borderRadius: "30px",
            color: "blue"

          }}>Ver producto</Link>

          <button
            style={{
              backgroundColor: "blue",
              textDecoration: "none",
              border: "1px solid blue",
              padding: "8px",
              borderRadius: "30px",
              color: "#fff",
              marginLeft: "10px",
            }}
          onClick={() => addToCart(product, 1)}
          >
            Agregar al carrito
          </button>
            {console.log(cart)}
        </div>
      </div>
  )
}

export default Item