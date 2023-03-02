import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

const ItemListDetail = () => {

    const [itemList, setItemList] = useState([])
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products') //Api de simulación hasta que trabajemos con Firebase
        .then(resp => resp.json())
        .then(dataItem => setItemList(dataItem))
    }, [])
    


  return (
    <div>
        <h1>Acá verás tu item</h1>
        <ul>
            {
                itemList.map(item => {
                    <li>
                        <Link to="/products/${item.id}">{item.title}</Link>
                        
                    </li>
                })
            }
        </ul>
        

    </div>
  )
}

export default ItemListDetail