import React from 'react'
import CartWidget from '../Cart/CartWidget';
import "./Navbar.css"

import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <>
      <div className="navbar" style={{ border: "2px solid #000", gap: "10px" }}>

        <nav className="navbar navbar-expand-lg">  
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              
              <li>  {/*Inicio*/}
                 <Link to={'/'} className='brandTitle'>Bballers</Link> 
              </li>

              <li> {/*Productos*/}
              <Link to={"/products"} className='navItems'>Productos</Link>
              </li>

              <li> {/*Contacto*/}
                <Link to={"/contact"} className='navItems'>Contacto</Link>
              </li>

              <li> {/*Info*/}
              <Link to={"/info"} className='navItems'>Información</Link>
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