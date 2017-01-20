import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';
import SessionFormContainer from '../session_form/session_form_container';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this.routerconst = (
      <Router history={ hashHistory } onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" component={ App }>
          <Route path="signup" component={ SessionFormContainer } />
          <Route path="login" component={ SessionFormContainer } />
        </Route>
      </Router>
    )
  }

  render() {
    return this.routerconst;
  }
}

export default AppRouter;
