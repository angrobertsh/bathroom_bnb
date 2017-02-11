import React from 'react';
import { Link, withRouter } from 'react-router';

class BathroomForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      description: "",
      gender: null,
      url: null,
      lat: null,
      lng: null,
      single: null,
      accessible: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(){
    e.preventDefault();
    let stateUpdate = {};
    stateUpdate[e.target.name] = e.target.value;
    this.setState(stateUpdate);
  }

  handleSubmit(){
    e.preventDefault();
    this.props.createNewBathroom(this.state);
  }

  render(){
    return (<div id="bathroombox">
      <form id="bathroomform" onSubmit={this.handleSubmit}>
        <div id="bathroomname">
          <span id="bathroomtitle">{this.props.formType.toUpperCase()}</span>
        </div>
        <div id="bathroomerrors">
          <ul id="bathroomerrors">{this.renderErrors()}</ul>
        </div>
        <div id="bathroomfields">
          <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.update}></input>
          <input type="submit" value="Submit" />
        </div>
      </form>
  </div>)
  }
}

export default withRouter(BathroomForm);
