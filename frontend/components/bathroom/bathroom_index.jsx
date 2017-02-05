import React from 'react';
import { Link, withRouter } from 'react-router';
import BathroomIndexItem from './bathroom_index_item';

class BathroomIndex extends React.Component{
  constructor(props){
    super(props);

    this.renderBathrooms = this.renderBathrooms.bind(this);
  }

  componentDidMount(){
    this.props.requestAllBathrooms();
  }

  renderBathrooms(){
    let benches = Object.keys(this.props.bathrooms)
    return benches.map((key) => {
      bathroomsIndex.push(<BathroomIndexItem key={key} bathroom={this.props.bathrooms[key]} />)
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
