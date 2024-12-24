import React from 'react';  

const MovieItem = ({ movie, onClick }) => {  
    return (  
        <div onClick={onClick}>  
            <h3>{movie.title}</h3>  
            <p>{movie.director}</p>  
            <p>{movie.genre}</p>  
            <img src={movie.image_url} alt={movie.title} />  
        </div>  
    );  
};  

export default MovieItem;