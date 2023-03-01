import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactView from './Components/Contact/ContactView';
import Info from './Components/Info/Info';

import Landing from './Components/Landing';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Navbar />
    

      <Routes>

        <Route exact path='/' element={<Landing />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/contact' element={<ContactView />} />
        <Route exact path='/info' element={<Info />} />

      </Routes>
    </BrowserRouter>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

