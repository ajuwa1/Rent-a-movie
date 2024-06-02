import React, { useState } from "react";
import Navbar from './components/Navbar';
import MovieList from "./components/MovieList";
import Cart from "./components/Cart";
import './App.css';

function App() {

  const [searchValue, setSearchValue] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const handleSeachChange = (event) => {
    setSearchValue(event.target.value)
  }

  const addToCart = (movie) => {
    setCartItems((prevItems)=> [...prevItems, movie]);
  }

  const removeFromCart = (id) => {
    setCartItems((prevItems)=>prevItems.filter(item => item.imdbID !== id));
  }

  return (
    <div>
      <Navbar cartItems={cartItems} />
      
      <input 
        type="text"
        placeholder="Seach movies..."
        value = {searchValue}
        onChange={handleSeachChange} 
        />
        <MovieList searchValue={searchValue} addToCart = {addToCart} />
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
