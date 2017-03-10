import React from 'react';
import { Link, withRouter } from 'react-router';

class ReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: "",
      stars: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(e){
    let stateUpdate = {};
    let parsedVal = e.target.value;
    stateUpdate[e.target.name] = parsedVal;
    this.setState(stateUpdate);
  }

  handleSubmit(e){
    e.preventDefault();
    let review = this.state;
    // double check this.props.params.bathroomId is the router url's bathroom id
    review["bathroom_id"] = parseInt(this.props.params.bathroomId);
    this.props.createNewReview({review: review});
  }

  renderErrors(){
    let errors = [];
    this.props.errors.forEach((error, idx) => {errors.push(<li className="review-error" key={`error${idx}`}>{error}</li>)});
    return errors;
  }

  render(){
    return (<div id="review-form-container">
      <form id="review-form" onSubmit={this.handleSubmit}>
        <div id="review-error-container">
          <ul id="review-errors">{this.renderErrors()}</ul>
        </div>
        <div id="review-fields">
          <input type="text" name="body" placeholder="Your review." value={this.state.body} onChange={this.update}></input>

          <div id="review-stars">
            Stars
            <input type="radio" name="stars" value="1" onChange={this.update} checked={this.state.stars === "1"} /> 1
            <input type="radio" name="stars" value="2" onChange={this.update} checked={this.state.stars === "2"} /> 2
            <input type="radio" name="stars" value="3" onChange={this.update} checked={this.state.stars === "3"} /> 3
            <input type="radio" name="stars" value="4" onChange={this.update} checked={this.state.stars === "4"} /> 4
            <input type="radio" name="stars" value="5" onChange={this.update} checked={this.state.stars === "5"} /> 5
          </div>

          <input type="submit" value="Submit" />
        </div>
      </form>
  </div>)
  }
}

export default withRouter(ReviewForm);
