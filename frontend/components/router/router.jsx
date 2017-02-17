import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';
import SessionFormContainer from '../session_form/session_form_container';
import BathroomShowContainer from '../bathroom/bathroom_show_container';
import BathroomFormContainer from '../bathroom_form/bathroom_form_container';
import SearchContainer from '../bathroom/search_container';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);

    this.routerconst = (
      <Router history={ hashHistory } onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" component={ App }>
          <IndexRoute component={ SearchContainer } />
          <Route path="signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn} />
          <Route path="login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn} />
          <Route path="bathrooms/:bathroomId" component={ BathroomShowContainer } />
          <Route path="new" component={ BathroomFormContainer } />
        </Route>
      </Router>
    )
  }

  _redirectIfLoggedIn(nextState, replace){
    if(this.props.currentUser){
      replace('/');
    }
  }

  _ensureLoggedIn(nextState, replace){
    if(!this.props.currentUser){
      replace('/signup');
    }
  }

  render() {
    return this.routerconst;
  }
}

export default AppRouter;
