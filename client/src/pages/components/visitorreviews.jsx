import React, { useState } from 'react';

const VisitorReviews = () => {
    const [reviews, setReviews] = useState([
        {
            date: '2024-03-15',
            personalDetails: 'John Doe',
            emailAddress: 'john@example.com',
            suggestion: 'Improve parking facilities'
        },
        {
            date: '2024-03-14',
            personalDetails: 'Jane Smith',
            emailAddress: 'jane@example.com',
            suggestion: 'Add more vegetarian options to the menu'
        }
    ]);

    const handleAddReview = () => {
        const newReview = {
            date: '2024-03-16',
            personalDetails: 'New Reviewer',
            emailAddress: 'new@example.com',
            suggestion: 'Some suggestion'
        };
        setReviews([...reviews, newReview]);
    };

    return (
        <div>
            <h1>Visitor Reviews</h1>
            <button onClick={handleAddReview}>Add Review</button>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Personal Details</th>
                        <th>Email/Address</th>
                        <th>Suggestion</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map((review, index) => (
                        <tr key={index}>
                            <td>{review.date}</td>
                            <td>{review.personalDetails}</td>
                            <td>{review.emailAddress}</td>
                            <td>{review.suggestion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VisitorReviews;
