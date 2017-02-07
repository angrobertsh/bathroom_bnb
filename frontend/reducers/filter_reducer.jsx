import merge from 'lodash/merge';

const defaultState = {
  bounds: {}
};

const FilterReducer = (state = defaultState, action) => {

  let newState = merge({}, state);

  switch (action.type){
    case "UPDATE_BOUNDS":
      newState = merge(defaultState, {bounds: action.bounds});
      return newState;
    default:
      return newState;
  }
}


export default FilterReducer;
