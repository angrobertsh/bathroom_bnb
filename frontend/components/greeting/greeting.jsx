import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.currentUser){
      return (
        <div className="greetingbar">
          <div className="welcome">Welcome {this.props.currentUser.username}!</div>
          <div className="authbutton" onClick={this.props.logout}>Logout</div>
        </div>
      );
    } else {
      return (
        <div className="greetingbar">
          <Link to={"/signup"}><div className="authbutton">Signup</div></Link>
          <Link to={"/login"}><div className="authbutton">Login</div></Link>
        </div>
      )
    }
  }
}

export default Greeting;
