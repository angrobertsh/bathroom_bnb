import React from 'react';
import { Link, withRouter } from 'react-router';

class BathroomForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){

  }

  render(){
    return (<div id="bathroom-form-container"></div>)
  }
}

export default withRouter(BathroomForm);
