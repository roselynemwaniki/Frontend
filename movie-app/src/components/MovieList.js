import React from 'react';  
import MovieItem from './MovieItem';  

const MovieList = ({ movies, onMovieSelect }) => {  
    return (  
        <div>  
            {movies.map(movie => (  
                <MovieItem key={movie.id} movie={movie} onClick={() => onMovieSelect(movie.id)} />  
            ))}  
        </div>  
    );  
};  

export default MovieList;