import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import TShirtsSection from './Components/camisetas/TshirtsSection';
import ShoesSection from './Components/zapatillas/shoesSection';
import ShortsSection from './Components/shorts/ShortsSection';
import ItemListDetail from './Components/ItemDetail/ItemListDetail';
import ItemListContainer from './Components/ItemContainer/itemListContainer';

import { initializeApp } from "firebase/app";
import CartProvider from './Components/Context/CartContext';

const firebaseConfig = {
  apiKey: "AIzaSyAtIrcIQpAxHq0sIzjl53rOXqmFezKNP9o",
  authDomain: "ecommerce-agusheredia.firebaseapp.com",
  projectId: "ecommerce-agusheredia",
  storageBucket: "ecommerce-agusheredia.appspot.com",
  messagingSenderId: "678225751746",
  appId: "1:678225751746:web:2e1e982b1e2563f34b555b"
};

const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <CartProvider>
        <BrowserRouter>
            <Navbar />
              <Routes>
                  <Route exact path='/' element={<ItemListContainer />} />
                  <Route exact path='/item/:itemId' element={<ItemListDetail />} />
                  <Route exact path='/zapatillas/' element={<ShoesSection />} />
                  <Route exact path='/camisetas' element={<TShirtsSection />} />
                  <Route exact path='/pantalones' element={<ShortsSection />} />
              </Routes>
        </BrowserRouter>
  </CartProvider>

  </React.StrictMode>
);
