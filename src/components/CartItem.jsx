import React from "react";

const CartItem = ({ item, removeFromCart }) => {
    return (
        <div className="cart-item">
            <img src = {item.Poster} alt = {item.Title}/>
            <div>
                <h3>{item.Title}</h3>
                <p>{item.Year}</p>
                <button onClick = {()=>removeFromCart(item.imdbID)}>Remove</button>
            </div>
        </div>
    )
}

export default CartItem;