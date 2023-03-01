import React, { useEffect, useState } from 'react'


const Products = () => {

    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('./src/data/data.json')
        .then(res => res.json())
        .then(dataJson => setItems(dataJson))
   
    }, [])
    


  return (
    <div>
        <h1>Productos del stock!</h1>
        <ul>
            {
                items.map(item =>{
                    <li>{item.name}</li>

                })
            }
        </ul>
    </div>
  )
}

export default Products