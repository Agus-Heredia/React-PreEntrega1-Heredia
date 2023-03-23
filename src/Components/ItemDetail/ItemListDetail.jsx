import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { getDoc, getFirestore, collection, doc} from "firebase/firestore";
import ItemDetail from './ItemDetail';




// import { Link } from 'react-router-dom'

const ItemListDetail = () => {
  const [product, setProduct] = useState({})
  const {itemId}=useParams()
  useEffect(() => {
    const db = getFirestore();

    const itemRefCollection = collection(db, "items")
    const referenciaDoc = doc(itemRefCollection, itemId)
    getDoc(referenciaDoc)
  .then((result)=>{
    setProduct({
      id:result.id,
      ...result.data()
    })
  })
  .catch((error)=> console.log(error))
   

}, [itemId])

  return (
  <div>
    <ItemDetail product={product}/>
  </div>

  )
}

export default ItemListDetail