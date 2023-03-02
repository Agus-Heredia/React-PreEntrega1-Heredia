import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

const Products = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(dataJson => setItems(dataJson))
        console.log(items)

    }, [])
    
    
    
    return (
        
        <div>
        <h1>Productos del stock!</h1>
        <p>Acá se mostrarán los productos</p>

            <ul>
                
                    {items.map((item) =>{
                            <li>
                            <Link to={`Products/${item.id}`}>
                                <p>{item.title}
                                </p>
                                </Link>
                            </li>
                        })
                    }
                
            </ul> 

            </div>
  
  )
     

}

export default Products