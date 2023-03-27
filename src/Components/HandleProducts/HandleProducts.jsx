import React, { useContext } from 'react'
import { getDocs, getFirestore, collection } from "firebase/firestore";
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { useEffect, useState } from "react";

const HandleProducts = ({data}) => {
    const { addToCart } = useContext(CartContext)

    const [products, setProducts] = useState([])

    useEffect(() => {
        const db = getFirestore();

        const itemRefCollection = collection(db, "items")

        getDocs(itemRefCollection).then((snapshot) => {
            if (snapshot === 0) {
                console.log("nada para mostrar");
            }

            setProducts(snapshot.docs.map((doc) => ({
                id: doc.id, ...doc.data()
            })

            ))
        })

    }, [])

    // console.log(products);


    return (

        //Mapeo de database para renderizar los productos
        <div style={{
            display:"flex",
            flexWrap:"wrap",          
            margin:"20px 100px",
        }}>
                {
                    products.map((item) => { 
                        return (
                            <>  
                                <div key={item.id} style={{
                                    width:"400px",
                                    height:"600xp",
                                    border:"1px solid black",
                                    padding:"10px",
                                    display:"flex",
                                    margin:"10px",
                                    flexDirection:"column",           
                                    alignItems:"center",
                                    backgroundColor:"#fff",
                                    borderRadius:"10px",

                                
                                }}> 

                                    <img src={item.imgId} alt="Img product" style={{
                                        width:"300px",
                                        height:"300px",
                                        alignItems:"center",
                                        background:"#fff",
                                        borderRadius:"20px"
                                    }}/>
                                    <h2 style={{backgroundColor:"#fff", fontStyle:"italic"}}>{item.name}</h2>
                                    <p style={{backgroundColor:"#fff", fontWeight:"700"}}>Precio: usd ${item.price}</p>
                                    
                                    
                                    <div style={{background:"#fff"}}>
                                    <Link to={`/item/${item.id}`} style={{
                                        backgroundColor:"#fff",
                                        textDecoration:"none",
                                        border:"1px solid blue",
                                        padding:"8px",
                                        borderRadius:"30px",
                                        color:"blue"

                                        }}>Ver producto</Link>

                                    <button 
                                    style={{
                                        backgroundColor:"blue",
                                        textDecoration:"none",
                                        border:"1px solid blue",
                                        padding:"8px",
                                        borderRadius:"30px",
                                        color:"#fff",
                                        marginLeft:"10px",
                                    }} 
                                    onClick={() => addToCart(item, 1)}>
                                        Agregar al carrito
                                    </button>

                                    </div>                                    
                                </div>
                                
                            </>
                        ) 
                    })
                }
        </div>
    )
}

export default HandleProducts