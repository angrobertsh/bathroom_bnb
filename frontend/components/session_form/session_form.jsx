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
    this.authAltMessage = this.authAltMessage.bind(this);
  }

  componentDidUpdate() {
    if(this.props.loggedIn){
      this.props.router.push('/');
    }
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
  }

  authAltMessage(){
    if(this.props.formType === "login"){
      return (<Link to="/signup">Signup</Link>);
    } else if (this.props.formType === "signup"){
      return (<Link to="/login">Login</Link>);
    }
  }

  renderErrors(){
    let errors = [];
    this.props.errors.forEach((error, idx) => {errors.push(<li className="error" key={`error${idx}`}>{error}</li>)});
    return errors;
  }

  render(){
    return (
      <div className="authbox">
        <form id="authform" onSubmit={this.handleSubmit}>
          <div id="authname">
            <span id="authtitle">{this.props.formType.toUpperCase()}</span>
          </div>
          <div id="authalt">
            <div id="authaltmessage">Or {this.authAltMessage()}</div>
          </div>
          <div id="autherrors">
            <ul id="autherrors">{this.renderErrors()}</ul>
          </div>
          <div id="authfields">
            <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.update}></input>
            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.update}></input>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>);
  }

}

export default withRouter(SessionForm);
