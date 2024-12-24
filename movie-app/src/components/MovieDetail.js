import React from 'react';  

const MovieDetail = ({ movie }) => {  
    return (  
        <div>  
            <h2>{movie.title}</h2>  
            <p><strong>Director:</strong> {movie.director}</p>  
            <p><strong>Genre:</strong> {movie.genre}</p>  
            <p><strong>Release Year:</strong> {movie.release_year}</p>  
            <img src={movie.image_url} alt={movie.title} />  
            <p>{movie.description}</p>  
        </div>  
    );  
};  

export default MovieDetail;