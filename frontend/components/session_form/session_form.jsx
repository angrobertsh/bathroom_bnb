import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(e){
    e.preventDefault();
    debugger
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.formAction(this.state);
  }

  render(){
    return (
      <div className="authbox">
        <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.update}></input>
        <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.update}></input>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>);
  }

}

export default withRouter(SessionForm);
