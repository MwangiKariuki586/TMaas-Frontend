import React from 'react';
import './Reviews.css'; // Include your styles here

const reviews = [
  {
    id: 1,
    text: "I have learnt a lot in 3 weeks than the last 3 years, there’s tons of great material to go through here.",
    name: "Cecilia Payne",
    title: "Ministry of Tourism GOB",
    avatar: "/images/Avatar.png", // Change to your correct avatar path
    signature: "/images/sign1.png", // Change to your correct signature path
    rating: 4.5,
  },
  {
    id: 2,
    text: "The courses here are practically practical - Pun intended, there are simulations, labs, and even group projects!",
    name: "Jordan James",
    title: "Senior Manager II at ADNOC",
    avatar: "/images/Avatar.png", // Change to your correct avatar path
    signature: "/images/adnoc-logo.png", // Change to your correct signature path
    rating: 4.5,
  },
  {
    id: 3,
    text: "I have learnt a lot in 3 weeks than the last 3 years, there’s tons of great material to go through here.",
    name: "Cecilia Payne",
    title: "Ministry of Tourism GOB",
    avatar: "/images/Avatar.png", // Change to your correct avatar path
    signature: "/images/sign1.png", // Change to your correct signature path
    rating: 4.5,
  }
];

const ReviewCard = ({ review }) => {
  const { text, name, title, avatar, signature, rating } = review;

  return (
    <div className="review-card">
      <div className="rating">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={i < Math.floor(rating) ? 'star-filled' : 'star-empty'}>
            ★
          </span>
        ))}
        {rating % 1 !== 0 && <span className="half-star"></span>}
      </div>
      <p className="review-text">"{text}"</p>
      <div className="reviewer">
        <img src={avatar} alt={name} className="avatar" />
        <div className="reviewer-info">
          <p className="reviewer-name">{name}</p>
          <p className="reviewer-title">{title}</p>
          <img src={signature} alt="signature" className="signature" />
        </div>
      </div>
    </div>

  );
};

const Reviews = () => {
  return (
    <div className="reviews">
      <h2 className="reviews-title">The reviews are in</h2>
      <p className="reviews-subtitle">See what our customers have to say about their experience.</p>
      <div className="reviews-container">
        {reviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

  </div>

       
  );
};

export default Reviews;
