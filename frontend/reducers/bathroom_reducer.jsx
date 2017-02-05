import merge from 'lodash/merge';

const defaultState = {
  bathrooms: {},
  errors: []
};

const BathroomReducer = (state = defaultState, action) => {

  let newState = merge({}, state);

  switch (action.type){
    case "RECEIVE_ALL_BATHROOMS":
      newState = merge(defaultState, {bathrooms: action.bathrooms});
      return newState;
    case "RECEIVE_SINGLE_BATHROOM":
      newState = merge(newState, {bathrooms: action.bathroom});
      return newState;
    case "RECEIVE_ERRORS":
      newState = merge(newState, {errors: action.errors});
      return newState;
    default:
      return newState;
  }
}


export default BathroomReducer;
