import BathroomMap from './bathroom_map';
import BathroomIndex from './bathroom_index';
import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.requestAllBathrooms();
  }

  render(){
    return (
      <div>
        <BathroomMap
          bathrooms={this.props.bathrooms} />
        <BathroomIndex
          bathrooms={this.props.bathrooms}
          currentUser={this.props.currentUser}
          upvote={this.props.upvote}
          editUpvote={this.props.editUpvote} />
      </div>
    );
  }
}

export default Search;
