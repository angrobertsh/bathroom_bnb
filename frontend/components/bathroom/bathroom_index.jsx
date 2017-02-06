import React from 'react';
import { Link, withRouter } from 'react-router';
import BathroomIndexItem from './bathroom_index_item';

class BathroomIndex extends React.Component{
  constructor(props){
    super(props);
    this.renderBathrooms = this.renderBathrooms.bind(this);
  }

  componentWillMount(){
    this.props.requestAllBathrooms();
  }

  renderBathrooms(){
    let bathrooms = Object.keys(this.props.bathrooms)
    return bathrooms.map((key) => {
      return <BathroomIndexItem key={key} bathroom={this.props.bathrooms[key]} currentUser={this.props.currentUser} upvote={this.props.upvote} editUpvote={this.props.editUpvote}/>
    });
  }

  render(){
    return (
      <div id="bathrooms-header">Bathrooms Nearby:
        <div id="bathrooms-index">
          { this.renderBathrooms() }
        </div>
      </div>
    );
  }
}

export default withRouter(BathroomIndex)
