import React from 'react'
import "./ItemStyles.css"

const ItemDetail = ({ product }) => {
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
                padding:"10px",
                boxShadow:"5px 20px 30px"


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
                <button
                    style={{
                        backgroundColor: "blue",
                        textDecoration: "none",
                        border:"none",
                        padding: "10px",
                        borderRadius: "30px",
                        color: "#fff",
                        fontSize:"18px",
                        width:"100%",
                        display:"flex",
                        justifyContent:"center",
                        
    
                    }}
                    >
                    ¡Comprar!
                </button>
            </div>

        </div>
    )
}

export default ItemDetail