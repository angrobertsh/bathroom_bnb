import * as ACTIONS from '../actions/session_actions';
import * as UTILS from '../util/session_api_util';

const SessionsMiddleware = ({state, dispatch}) => next => action => {
  const error = (error) => {
    dispatch(ACTIONS.receiveErrors(error.responseJSON));
  }

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


export default SessionsMiddleware
