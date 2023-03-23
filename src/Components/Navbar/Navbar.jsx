import React, { useContext } from 'react'
import CartWidget from '../Cart/CartWidget';
import "./Navbar.css"
import { CartContext } from '../Context/CartContext';

import { Link } from 'react-router-dom';


const Navbar = () => {

  const { cart, addToCart, deleteFromCart, getTotalQuantity, getTotal } = useContext(CartContext) 


  return (
    <>
      <div className="navbar" style={{ border: "2px solid #000", gap: "10px" }}>

        <nav className="navbar navbar-expand-lg">  
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              
              <li>  {/*Inicio*/}
                 <Link to={'/'} className='brandTitle'>Bballers</Link> 
              </li>

              <li> {/*Zapatillas*/}
              <Link to={"/zapatillas"} className='navItems'>Zapatillas</Link>
              </li>

              <li> {/*Camisetas*/}
                <Link to={"/camisetas"} className='navItems'>Camisetas</Link>
              </li>

              <li> {/*Pantalones*/}
              <Link to={"/pantalones"} className='navItems'>Pantalones</Link>
              </li>

              <div>
                <CartWidget />
              </div>
            </ul>
          </div>
        </nav>
      </div>


    </>


  )

};

export default Navbar