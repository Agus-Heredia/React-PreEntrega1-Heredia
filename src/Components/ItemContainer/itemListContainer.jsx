import React, { useEffect, useState } from 'react'
import "./itemListContainer.css"

import { Link } from 'react-router-dom'

const ItemListContainer = (props) => {

    const [items, setItems] = useState([])
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products') //Api de simulación hasta que trabajemos con Firebase
        .then(resp => resp.json())
        .then(dataJson => setItems(dataJson))
        
    }, [])
    


  return (
    <div>
        <div style={{fontSize:"20px", padding:"10px"}}>
            ¡Hola! Bienvenidos a la página ofical de Bballers 🏀. En este espacio encontrarás los mejores accesorios deportivos y al mejor precio! Para que puedas estar siempre listo para dar lo mejor adentro de la cancha.<br/>
            Acá se mostrarán todos los productos disponibles en la tienda... ¡pronto!</div>



        {/**************** 
         * 
         
         Hola tutores! Miren les escribo por acá porque no entiendo porqué este .map() que van a ver a continuación no me funciona para renderizar las cards como quisiera... algún consejo? 
         
         * ************/}



        <ul>
            {
                items.map(item => {
                    <li>
                        <Link to={`/item/${item.id}`}>{item.title}</Link>
                        
                    </li>
                })
            }
        </ul> 

    </div>
  )
}

export default ItemListContainer