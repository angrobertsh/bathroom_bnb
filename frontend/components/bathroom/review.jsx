import React from 'react';

class Review extends React.Component{
  constructor(props){
    super(props);
    
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit(){

  }

  handleDelete(){

  }

  render(){
    return(
      <div className="review-container">
        <ul className="review">
          <li className="review-stars">Stars: { this.props.review.stars }</li>
          <li className="review-author">Written by { this.props.review.username }</li>
          <li className="review-body">{ this.props.review.body }</li>
          <li className="review-votes">Recommended by { this.props.review.votes.reduce((a, b) => (a.value + b.value)) } casual poopers.</li>
          <li className="review-edit-button">Edit</li>
          <li className="review-delete-button">Delete</li>
        </ul>
      </div>
    )
  }
}

export default Review;
