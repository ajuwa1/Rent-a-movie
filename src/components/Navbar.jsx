import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import '../App.css'

export default function Navbar( {cartItems}) {
  return (
    <nav className='navbar'>
        <h1>Rentflix</h1>
        <div className='cart-icon'>
            <FontAwesomeIcon icon = {faShoppingCart} />
            <span className='cart-court'>{cartItems.length}</span>
        </div>
    </nav>
  )
}
