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
        
        {/* Como estamos en "ItemDetails" acá solo renderizará el item que el usuario haya seleccionado en el inicio de la pág  */}

        <ul>
            {
                itemList.map(item => {
                    <li>
                        <Link to="/item/${item.id}">{item.title}</Link>
                        
                    </li>
                })
            }
        </ul>
        

    </div>
  )
}

export default ItemListDetail