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
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(e){
    e.preventDefault();
    let stateUpdate = {};
    stateUpdate[e.target.name] = e.target.value;
    this.setState(stateUpdate);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.formAction(this.state);
    this.props.router.push("/");
  }

  authMessage(){
    if(this.props.formType === "login"){
      return (<Link to="/signup">Signup</Link>);
    } else if (this.props.formType === "signup"){
      return (<Link to="/login">Login</Link>);
    }
  }

  renderErrors(){
    let errors = [];
    this.props.errors.forEach((error) => {errors.push(<div className="error">{error}</div>)});
    return errors;
  }

  render(){
    return (
      <div className="authbox">
        <form id="authform" onSubmit={this.handleSubmit}>
          <div id="authname">
            <span id="authtitle">{this.props.formType.toUpperCase()}</span>
          </div>
          <div id="altauth">
            <div id="authmessage">Or {this.authMessage()}</div>
          </div>
          <div id="autherrors">
            <ul className="errors">{this.renderErrors()}</ul>
          </div>
          <div id="authfields">
            <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.update}></input>
            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.update}></input>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>);
  }

}

export default withRouter(SessionForm);
