import { connect } from 'react-redux';
import SessionForm from './session_form';
import * as SESSION_ACTIONS from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    errors: state.session.errors,
    loggedIn: Boolean(state.session.currentUser),
    formType: ownProps.location.pathname
  }
};


const mapDispatchToProps = (dispatch, ownProps) => {
  debugger
  return {
    login: (user) => dispatch(SESSION_ACTIONS.login(user)),
    signup: (user) => dispatch(SESSION_ACTIONS.signup(user))
  // processForm: (type, user) => {
  //   if(type === "login"){
  //     dispatch(SESSION_ACTIONS.login(user));
  //   } else {
  //     dispatch(SESSION_ACTIONS.signup(user));
  //   }
  // }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
