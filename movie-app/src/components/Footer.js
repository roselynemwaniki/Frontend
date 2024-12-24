import React from 'react';  

const Footer = () => {  
    return (  
        <footer>  
            <p>&copy; {new Date().getFullYear()} Movie Recommendation System. All rights reserved.</p>  
            <p>  
                <a href="/about">About Us</a>  
                {/* You can add more links here, such as for privacy policy, terms of service, etc. */}  
            </p>  
        </footer>  
    );  
};  

export default Footer;
