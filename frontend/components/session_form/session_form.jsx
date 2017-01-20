import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    return (<div>
      <input type="text" name="username" placeholder="Username" value={this.state.username}></input>
      <input type="password" name="password" placeholder="password" value={this.state.password}></input>
    </div>);
  }

}

export default withRouter(SessionForm);
