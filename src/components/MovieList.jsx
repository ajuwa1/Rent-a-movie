import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../api/movieApi';
import MovieCard from './MovieCard';
import '../App.css';

const MovieList = ({searchValue, addToCart}) => {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const getMovies = async() => {
            const moviesData = await fetchMovies(searchValue);
            setMovies(moviesData);
        };
        getMovies(); // this ensures that movies are fetched as soon as the component is mounted or searchValue prop changes
        },[searchValue])

    return (
        <div className='movie-list'>
            {movies.map(movie =>(
                <MovieCard key ={movie.imdbID} movie = {movie} addToCart={addToCart}/>
            ))}
        </div>
    )
}

export default MovieList;