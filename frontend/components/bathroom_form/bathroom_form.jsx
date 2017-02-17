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
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(e){
    e.preventDefault();
    let stateUpdate = {};
    let parsedVal;
    if(e.target.value === "true"){
      parsedVal = true;
    } else if(e.target.value === "false"){
      parsedVal = false;
    } else {
      parsedVal = e.target.value;
    }
    stateUpdate[e.target.name] = parsedVal;
    this.setState(stateUpdate);
  }

  handleSubmit(){
    e.preventDefault();
    this.props.createNewBathroom(this.state);
  }

  renderErrors(){
    let errors = [];
    this.props.errors.forEach((error, idx) => {errors.push(<li className="error" key={`error${idx}`}>{error}</li>)});
    return errors;
  }

  render(){
    debugger
    return (<div id="bathroombox">
      <form id="bathroomform" onSubmit={this.handleSubmit}>
        <div id="bathroomformname">
          <span id="bathroomformtitle">Create New Bathroom</span>
        </div>
        <div id="bathroomerrors">
          <ul id="bathroomerrors">{this.renderErrors()}</ul>
        </div>
        <div id="bathroomfields">
          <input type="text" name="description" placeholder="Bathroom Description" value={this.state.description} onChange={this.update}></input>

          <div id="bathroomgender" className="bathroomsubfields">
            Gender:
            <input type="radio" name="gender" value="men" onChange={this.update} /> Men
            <input type="radio" name="gender" value="women" onChange={this.update} /> Women
            <input type="radio" name="gender" value="neutral" onChange={this.update} /> Gender Neutral
          </div>

          <div id="bathroomsingle" className="bathroomsubfields">
            Single?
            <input type="radio" name="single" value={true} onChange={this.update} /> True
            <input type="radio" name="single" value={false} onChange={this.update} /> False
          </div>

          <div id="bathroomaccessible" className="bathroomsubfields">
            Accessible?
            <input type="radio" name="accessible" value={true} onChange={this.update} /> True
            <input type="radio" name="accessible" value={false} onChange={this.update} /> False
          </div>

          <input type="submit" value="Submit" />
        </div>
      </form>
  </div>)
  }
}

export default withRouter(BathroomForm);
