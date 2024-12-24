import React from 'react';  
import { Link } from 'react-router-dom';  

const Header = () => {  
    return (  
        <header>  
            <h1>Movie Recommendation System</h1>  
            <nav>  
                <ul>  
                    <li>  
                        <Link to="/">Home</Link>  
                    </li>  
                    <li>  
                        <Link to="/movies/new">Add Movie</Link>  
                    </li>  
                    {/* You can add more links here for additional pages */}  
                </ul>  
            </nav>  
        </header>  
    );  
};  

export default Header;