import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
  return (
    <div style={{
        display:"flex", 
        flexWrap:"wrap",
        justifyContent:"center"
        
        }}>
        { 
            products.map((product => <Item key={product.id} {...product}/>))      
        }
    </div>
  )
}

export default ItemList