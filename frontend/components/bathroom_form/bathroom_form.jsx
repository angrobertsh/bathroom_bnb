import React from 'react';
import { Link, withRouter } from 'react-router';

class BathroomForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      description: "",
      gender: null,
      url: null,
      lat: this.props.location.query.lat,
      lng: this.props.location.query.lng,
      single: null,
      accessible: null,
      tags: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(e){
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

  handleSubmit(e){
    e.preventDefault();
    this.props.createNewBathroom({bathroom: this.state});
  }

  renderErrors(){
    let errors = [];
    this.props.errors.forEach((error, idx) => {errors.push(<li className="error" key={`error${idx}`}>{error}</li>)});
    return errors;
  }

  render(){
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

          <div id="bathroomlatlng" className="bathroomsubfields">
            <input type="text" name="lat" placeholder="Latitude" value={this.state.lat} onChange={this.update} />
            <input type="text" name="lng" placeholder="Longitude" value={this.state.lng} onChange={this.update} />
          </div>

          <div id="bathroomgender" className="bathroomsubfields">
            Gender:
            <input type="radio" name="gender" value="men" onChange={this.update} checked={this.state.gender === "men"} /> Men
            <input type="radio" name="gender" value="women" onChange={this.update} checked={this.state.gender === "women"} /> Women
            <input type="radio" name="gender" value="neutral" onChange={this.update} checked={this.state.gender === "neutral"} /> Gender Neutral
          </div>

          <div id="bathroomsingle" className="bathroomsubfields">
            Single?
            <input type="radio" name="single" value={true} onChange={this.update} checked={this.state.single === true} /> True
            <input type="radio" name="single" value={false} onChange={this.update} checked={this.state.single === false} /> False
          </div>

          <div id="bathroomaccessible" className="bathroomsubfields">
            Accessible?
            <input type="radio" name="accessible" value={true} onChange={this.update} checked={this.state.accessible === true} /> True
            <input type="radio" name="accessible" value={false} onChange={this.update} checked={this.state.accessible === false} /> False
          </div>

          <div id="bathroomaccessible" className="bathroomsubfields">
            <input type="text" name="tags" placeholder="Tags, separated by commas (e.g. scented, maintained, dirty)" value={this.state.tags} onChange={this.update} />
          </div>

          <input type="submit" value="Submit" />
        </div>
      </form>
  </div>)
  }
}

export default withRouter(BathroomForm);
