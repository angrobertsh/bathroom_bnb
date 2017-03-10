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
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._addTagFilter = this._addTagFilter.bind(this);
    this._removeTagFilter = this._removeTagFilter.bind(this);

    this.routerconst = (
      <Router history={ hashHistory } onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" component={ App }>
          <IndexRoute component={ SearchContainer } onEnter={this._removeTagFilter} />
          <Route path="/signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn} />
          <Route path="/login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn} />
          <Route path="/bathrooms/new" component={ BathroomFormContainer } onEnter={this._ensureLoggedIn} />
          <Route path="/bathrooms/tagged/:tag" component={ SearchContainer } onEnter={this._addTagFilter} />
          <Route path="/bathrooms/:bathroomId" component={ BathroomShowContainer } />
        </Route>
      </Router>
    )
  }

  _redirectIfLoggedIn(nextState, replace){
    this.props.clearSessionErrors();
    if(this.props.currentUser){
      replace('/');
    }
  }

  _ensureLoggedIn(nextState, replace){
    if(!this.props.currentUser){
      replace('/signup');
    }
  }

  _addTagFilter(nextState, replace){
    this.props.updateTag(nextState.params.tag);
  }

  _removeTagFilter(nextState, replace){
    this.props.removeTags();
  }

  render(){
    return this.routerconst;
  }
}

export default AppRouter;
