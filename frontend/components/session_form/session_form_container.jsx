import { connect } from 'react-redux';
import SessionForm from './session_form';
import * as SESSION_ACTIONS from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.session.errors,
    loggedIn: Boolean(state.session.currentUser),
    formType: ownProps.location.pathname.substring(1)
  });


const mapDispatchToProps = (dispatch, ownProps) => {
  let formType = ownProps.location.pathname.substring(1);
  let formAction;
  if(formType === "login"){
    formAction = (user) => {dispatch(SESSION_ACTIONS.login(user))};
  } else if (formType === "signup") {
    formAction = (user) => {dispatch(SESSION_ACTIONS.signup(user))};
  }

  return {
    formAction: formAction
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
