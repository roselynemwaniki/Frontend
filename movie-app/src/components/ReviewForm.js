import React, { useState } from 'react';  

const ReviewForm = ({ onSubmit }) => {  
    const [rating, setRating] = useState(0);  
    const [comment, setComment] = useState('');  

    const handleSubmit = (event) => {  
        event.preventDefault();  
        const review = { rating, comment };  
        onSubmit(review);  
    };  

    return (  
        <form onSubmit={handleSubmit}>  
            <input  
                type="number"  
                min="1"  
                max="5"  
                value={rating}  
                onChange={e => setRating(e.target.value)}  
                required  
            />  
            <textarea  
                placeholder="Write your review"  
                value={comment}  
                onChange={e => setComment(e.target.value)}  
                required  
            />  
            <button type="submit">Submit Review</button>  
        </form>  
    );  
};  

export default ReviewForm;