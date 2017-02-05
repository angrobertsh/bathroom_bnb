import React from 'react';

class ReviewIndex extends React.Component{
  constructor(props){
    super(props);

    this.renderReviews = this.renderReviews.bind(this);
  }

  renderReviews(){

  }

  render(){
    return (<div className="review-index-container">
      { this.renderReviews() }
    </div>);
  }
}

export default ReviewIndex;
