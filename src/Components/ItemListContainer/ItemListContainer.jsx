import React, { useContext, useEffect, useState } from 'react'
import "./ItemListContainer.css"
import { getDocs, getFirestore, collection, doc, query, where } from "firebase/firestore";
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList';



const ItemListContainer = () => {

const [products, setProducts] = useState([])
const {categoryId} = useParams()

    useEffect(() => {
        const dbFirestore = getFirestore()
        const getData = async () => {
            const queryRef = !categoryId
                ? collection(dbFirestore, "items")
                : query(
                    collection(dbFirestore, "items"),
                    where("categoryId", "==", categoryId)
                );
            const response = await getDocs(queryRef);
            const productos = response.docs.map((doc) => {
                const newProduct = {
                    ...doc.data(),
                    id: doc.id,
                };
                return newProduct;
            });
            setTimeout(() => {
                setProducts(productos)
                // setLoading(false)
            }, 2000)
        };
        getData();

    }, [categoryId])

    // {console.log(products)}


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

            <ItemList products={products} />
            {/* {console.log(products)} */}
        
    </div>
  )
}

export default ItemListContainer