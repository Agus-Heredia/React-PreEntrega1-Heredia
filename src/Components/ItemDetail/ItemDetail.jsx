import React, { useContext } from 'react'
import "./ItemStyles.css"
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'


const ItemDetail = ({ product }) => {

    const { cart, addToCart, getTotalQuantity} = useContext(CartContext)
    return (
        <div
            style={{
                width: "1500px",
                display: "flex",
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                margin: "60px auto",
                border: "1px solid #000",
                borderRadius: "50px",
                padding: "10px",
                boxShadow: "5px 20px 30px"


            }}>

            {/* Img del producto */}
            <div className="itemImgContainer">
                <img src={product.imgId} alt="Img product"
                    style={{
                        width: "600px",
                        height: "600px",
                        justifyContent: "center",
                    }}
                />
            </div>


            {/* Info del producto */}
            <div style={{
                background: "#fff"
            }}
                className="itemInfoContainer">
                <h2 style={{ background: "#fff" }}>{product.name}</h2>
                <p style={{ background: "#fff" }}>▸ {product.description}</p>
                <p style={{ background: "#fff" }}><b>Precio:</b> usd ${product.price}</p>
                <p>Stock disponible: {product.stock}</p>
                <div style={{display:"flex"}}>
                <button
                    style={{
                        backgroundColor: "blue",
                        textDecoration: "none",
                        border: "none",
                        padding: "10px",
                        borderRadius: "30px",
                        color: "#fff",
                        fontSize: "18px",
                        width: "100%",
                        height:"50px",
                        display: "flex",
                        justifyContent: "center",


                    }}
                    onClick={() => addToCart(product, 1)}>
                    ¡Comprar!
                </button>
                </div>
                <div style={{marginTop:"10px", display:"flex", justifyContent:"end"}}>
                <Link to={"/"}
                    style={{
                        backgroundColor: "#fff",
                        fontSize:"16px",
                        textDecoration: "none",
                        padding: "8px",
                        borderRadius: "30px",
                        color: "blue"

                    }}>↺ Volver al inicio</Link>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail