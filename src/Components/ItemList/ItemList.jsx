import React from 'react'
import Item from '../Item/Item'
import Loader from '../Loader/Loader'

const ItemList = ({ products }) => {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"

    }}>
      {products.length === 0
        ? <Loader />
        : products.map((product => <Item key={product.id} {...product} product={product} />))
      }
    </div>
  )
}

export default ItemList