import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BathroomReducer from './bathroom_reducer';
import FilterReducer from './filter_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  bathrooms: BathroomReducer,
  filters: FilterReducer
});

export default RootReducer;
