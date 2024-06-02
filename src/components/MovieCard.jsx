import React from "react";

const MovieCard = ({ movie, addToCart }) => {
    return (
        <div className="movie-card">
            <img src = {movie.Poster} alt = {movie.Title}/>
        
        <div className="button-wrapper">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <button onClick = {()=> addToCart(movie)}>Add to Cart</button>
        </div>
        </div>
            
    )
}

export default MovieCard;