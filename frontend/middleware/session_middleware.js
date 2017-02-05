import * as ACTIONS from '../actions/session_actions';
import * as SHARED_ACTIONS from '../actions/shared_actions';
import * as UTILS from '../util/session_api_util';

const SessionMiddleware = ({state, dispatch}) => next => action => {
  const error = (errors) => {
    dispatch(SHARED_ACTIONS.receiveSessionErrors(errors.responseJSON.errors));
  };

  let success = (user) => {
    dispatch(ACTIONS.receiveCurrentUser(user));
  };

  switch (action.type){
    case "SIGNUP":
      UTILS.signup(success, error, action.user);
      return next(action);
    case "LOGIN":
      UTILS.login(success, error, action.user);
      return next(action);
    case "LOGOUT":
      success = (data) => {
        dispatch(ACTIONS.receiveCurrentUser(null));
      };
      UTILS.logout(success, error)
      return next(action);
    default:
      return next(action);
  }
}


export default SessionMiddleware
