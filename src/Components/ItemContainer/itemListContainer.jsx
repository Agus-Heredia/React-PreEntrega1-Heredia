import React, { useContext, useEffect, useState } from 'react'
import "./itemListContainer.css"
import { getDoc, getFirestore, collection, doc } from "firebase/firestore";
import HandleProducts from '../HandleProducts/HandleProducts'
import { CartContext } from '../Context/CartContext'
import { useParams } from 'react-router-dom'




const ItemListContainer = (props) => {
const [itemsList, setItemsList] = useState([])
const { categoryId } = useParams() 

useEffect(() => {
   
    const db = getFirestore();

    const itemRefCollection = collection(db, "items")
    const referenciaDoc = doc(itemRefCollection, categoryId)
    getDoc(referenciaDoc)
    .then((response) => {
      if(categoryId){
        setItemsList(response.filter(producto => producto.categoryId === categoryId))
      } else{
        setItemsList(response)
      }
    }) 
    .catch((err) => console.error(err))
   
  }, [categoryId])


  return(
    <div>
        <div>
            
            <h1 style={{
                    marginTop:"50px",
                    marginLeft:"10px",
                    fontSize:"50px",
                    display:"flex",
                    justifyContent:"center",
                }}>
               Bienvenidos a la Tienda Virtual de Bballers
            </h1>

            <p style={{
                padding:"10px",
                fontSize:"20px",
                display:"flex",
                justifyContent:"center",

            }}> 
                En este espacio encontrarás los mejores accesorios deportivos ¡y al mejor precio! Para que puedas estar siempre listo y dar lo mejor adentro de la cancha
            </p>
            
        </div>

        <HandleProducts />
        
        
    </div>
  )
}

export default ItemListContainer