import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {


  let newState = merge({}, state);

  switch (action.type){
    case "RECEIVE_CURRENT_USER":
    debugger
      newState = merge(defaultState, {currentUser: action.user});
      return newState;
    case "RECEIVE_ERRORS":
      newState = merge(newState, {errors: action.errors});
      return newState;
    default:
      return newState;
  }
}


export default SessionReducer;
