import React, { useState, useEffect } from 'react';  
import { BrowserRouter as Router, Route } from 'react-router-dom';  
import Header from './components/Header';  
import Footer from './components/Footer';  
import MovieList from './components/MovieList';  
import MovieDetail from './components/MovieDetail';  
import MovieForm from './components/MovieForm';  
import ReviewForm from './components/ReviewForm';  
import ReviewList from './components/ReviewList';  

// Sample data fetch function (you would replace this with actual API calls)  
const fetchMovies = async () => {  
    // Replace with your actual API endpoint  
    const response = await fetch('/api/movies');  
    return response.json();  
};  

const App = () => {  
    const [movies, setMovies] = useState([]);  
    const [selectedMovie, setSelectedMovie] = useState(null);  
    const [reviews, setReviews] = useState([]);  

    useEffect(() => {  
        const loadMovies = async () => {  
            const movieData = await fetchMovies();  
            setMovies(movieData);  
        };  
        loadMovies();  
    }, []);  

    const handleMovieSelect = async (id) => {  
        const movie = movies.find(movie => movie.id === id);  
        setSelectedMovie(movie);  
        
        // Fetch reviews for the selected movie  
        const response = await fetch(`/api/reviews?movie_id=${id}`);  
        const reviewData = await response.json();  
        setReviews(reviewData);  
    };  

    const handleAddMovie = async (newMovie) => {  
        const response = await fetch('/api/movies', {  
            method: 'POST',  
            headers: {  
                'Content-Type': 'application/json',  
            },  
            body: JSON.stringify(newMovie),  
        });  
        const createdMovie = await response.json();  
        setMovies([...movies, createdMovie]);  
    };  

    const handleAddReview = async (newReview) => {  
        const response = await fetch('/api/reviews', {  
            method: 'POST',  
            headers: {  
                'Content-Type': 'application/json',  
            },  
            body: JSON.stringify(newReview),  
        });  
        const createdReview = await response.json();  
        setReviews([...reviews, createdReview]);  
    };  

    return (  
        <Router>  
            <Header />  
                <Route exact path="/">  
                    <MovieList movies={movies} onMovieSelect={handleMovieSelect} />  
                </Route>  
                <Route path="/movies/new">  
                    <MovieForm onSubmit={handleAddMovie} />  
                </Route>  
                <Route path="/movies/:id">  
                    {selectedMovie && (  
                        <div>  
                            <MovieDetail movie={selectedMovie} />  
                            <ReviewList reviews={reviews} />  
                            <ReviewForm onSubmit={handleAddReview} />  
                        </div>  
                    )}  
                </Route>  
            <Footer />  
        </Router>  
    );  
};  

export default App;