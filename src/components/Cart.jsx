import React from "react";
import CartItem from './CartItem';

const Cart = ({ cartItems, removeFromCart}) => {
    return (
        <div className="cart">
            <h2> Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map(item => (
                    <CartItem key = {item.imdbID} item = {item} removeFromCart = {removeFromCart}/>
                ))
            )}
        </div>
    )
}

export default Cart;