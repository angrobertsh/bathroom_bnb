import React from 'react';
import { Link, withRouter } from 'react-router';

const formatStr = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

class BathroomIndexItem extends React.Component {
  constructor(props){
    super(props);

    this.handleRoute = this.handleRoute.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  handleVote(e){
    let vote = {vote: {votable_id: this.props.bathroom.id, votable_type: "Bathroom"}};
    if(e.target.innerHTML === "Loved it"){
      vote["vote"]["value"] = 1;
    } else {
      vote["vote"]["value"] = -1
    }
    if(currentUser){
      vote["user_id"] = currentUser.id;
    }
    this.props.upvote(vote);
  }

  handleRoute(){
    this.props.router.push(`bathrooms/${this.props.bathroom.id}`);
  }

  render(){
    let bathroom = this.props.bathroom

    return (
      <div className="bathroom">
        <div className="bathroom-name" onClick={this.handleRoute}>
          {bathroom.description}
        </div>
        <div className="bathroom-stars">
          Stars: {bathroom.stars}
        </div>
        <div className="bathroom-stats">
          Stats:
          <ul>
            <li>Gender: {formatStr(bathroom.gender)}</li>
            <li>Private? {(bathroom.single ? "Yes" : "No")}</li>
            <li>Accessible? {(bathroom.accessible ? "Yes" : "No")}</li>
            <li>Casual Pooper Rating: {bathroom.votes} <div className="bathroom-votes"><div className="bathroom-upvote" onClick={this.handleVote}>Loved it</div><div className="bathroom-downvote" onClick={this.handleVote}>Hated it</div></div></li>
            <li>In-Depth Reviews: {bathroom.reviews}</li>
          </ul>
        </div>
      </div>
    );
  }
};


export default withRouter(BathroomIndexItem);
