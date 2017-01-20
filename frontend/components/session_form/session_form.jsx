import React from 'react';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(e){
  }

  render(){
    return (<div>
      <input type="text" name="username" placeholder="Username" value={this.state.username}></input>
      <input type="password" name="password" placeholder="password" value={this.state.password}></input>        
    </div>);
  }

}

export default SessionForm;
