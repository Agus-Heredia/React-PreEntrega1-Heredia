import React, { useContext } from 'react'
import CartWidget from '../Cart/CartWidget';
import "./Navbar.css"

import { NavLink } from 'react-router-dom';


const Navbar = () => {

  return (
    <>
      <div className="navbar">

        <nav className="navbar navbar-expand-lg">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li>  {/*Inicio*/}
                <NavLink to={'/'} className='brandTitle'>Bballers</NavLink>
              </li>

              <li> {/*Zapatillas*/}
                <NavLink to={"/category/zapatillas"} className='navItems'>Zapatillas</NavLink>
              </li>

              <li> {/*Camisetas*/}
                <NavLink to={"/category/camisetas"} className='navItems'>Camisetas</NavLink>
              </li>

              <li> {/*Pantalones*/}
                <NavLink to={"/category/pantalones"} className='navItems'>Pantalones</NavLink>
              </li>

              <div> {/*Carrito*/}
                <NavLink to={"/cartDetail"} style={{textDecoration:"none", alignItems:"center"}}>
                  <CartWidget />
                </NavLink>
              </div>


              <div>
              </div>
            </ul>
          </div>
        </nav>
      </div>


    </>


  )

};

export default Navbar