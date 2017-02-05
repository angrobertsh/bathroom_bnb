import React from 'react';

const Review = ({ review }) => (
  <div>
    <ul>
      <li>Stars: { review.stars }</li>
      <li>Written by { review.username }</li>
      <li>{ review.body }</li>
      <li>Recommended by { review.votes.reduce((a, b) => (a.value + b.value)) } casual poopers.</li>
    </ul>
  </div>
);

export default Review;
