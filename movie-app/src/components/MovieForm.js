import React, { useState } from 'react';  

const MovieForm = ({ onSubmit, movie }) => {  
    const [title, setTitle] = useState(movie ? movie.title : '');  
    const [director, setDirector] = useState(movie ? movie.director : '');  
    const [genre, setGenre] = useState(movie ? movie.genre : '');  
    const [releaseYear, setReleaseYear] = useState(movie ? movie.release_year : '');  
    const [description, setDescription] = useState(movie ? movie.description : '');  
    const [imageUrl, setImageUrl] = useState(movie ? movie.image_url : '');  

    const handleSubmit = (event) => {  
        event.preventDefault();  
        const newMovie = { title, director, genre, release_year: releaseYear, description, image_url: imageUrl };  
        onSubmit(newMovie);  
    };  

    return (  
        <form onSubmit={handleSubmit}>  
            <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />  
            <input type="text" placeholder="Director" value={director} onChange={e => setDirector(e.target.value)} required />  
            <input type="text" placeholder="Genre" value={genre} onChange={e => setGenre(e.target.value)} required />  
            <input type="number" placeholder="Release Year" value={releaseYear} onChange={e => setReleaseYear(e.target.value)} required />  
            <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />  
            <input type="text" placeholder="Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />  
            <button type="submit">Save Movie</button>  
        </form>  
    );  
};  

export default MovieForm;