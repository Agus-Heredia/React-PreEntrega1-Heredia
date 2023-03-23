import React, { useState ,createContext } from 'react'

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  isInCart: () => {},
  clearCart: () => {},
  deleteFromCart: () => {},
  getTotalQuantity: () => {},
  getTotal: () => {},
})


const CartProvider = (props) => {

  const [cart, setCart] = useState([])

  // Definimos las funciones que proveerá el CartProvider

  // 1)
  const addToCart = (item, quantity) => {
  if (isInCart(item.id)) {
    setCart(cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return {...cartItem, quantity: cartItem.quantity + quantity}
      }
      return cartItem
    }))
  } else {
    setCart([...cart, {...item, quantity}])
  }

  };


 // 2)
 const isInCart = (id) => {
  return cart.find((item) => item.id === id) ? true : false
 };
 

 // 3)
 const clearCart = () => {
  setCart([])
 };


 // 4)
 const deleteFromCart = (id) => {
  const newCart = cart.find((item) => item.id !== id)
  setCart(newCart)
 };


 // 5)
 const getTotalQuantity = () => {
  let cant = 0
  cart.forEach((a) => cant + a.quantity)
  return cant
 };

 const getTotal = () => {
  let total = 0
  cart.forEach((q) => total += (q.quantity*q.price))
  return total
 };


 return (

  <CartContext.Provider value={{cart, addToCart, isInCart, clearCart, deleteFromCart, getTotalQuantity, getTotal}}>
  {props.children}
  </CartContext.Provider>
 )


}

export default CartProvider