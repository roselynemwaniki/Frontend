import React from 'react';  

const ReviewList = ({ reviews }) => {  
    return (  
        <div>  
            {reviews.map(review => (  
                <div key={review.id}>  
                    <p><strong>Rating:</strong> {review.rating}</p>  
                    <p>{review.comment}</p>  
                </div>  
            ))}  
        </div>  
    );  
};  

export default ReviewList;