import React from 'react'
import "./Button.css"

const cartButton = () => {
  return (
    <button type="button" className="btn btn-cart btn-primary position-relative">
    Cart
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      13
      <span class="visually-hidden">unread messages</span>
    </span>
  </button>
  )
}

export default cartButton