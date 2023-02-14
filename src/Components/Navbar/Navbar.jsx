import React from 'react'
import "./Navbar.css"
import CartWidget from '../Cart/CartWidget';

const navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">Tienda Virtual</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li class="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Medios de Pago</a>
            </li>
            <div>
              <CartWidget />
            </div>
          </ul>
        </div>
      </nav>


    </>


  )

};

export default navbar