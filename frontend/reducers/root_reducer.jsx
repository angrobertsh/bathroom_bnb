import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BathroomReducer from './bathroom_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  bathrooms: BathroomReducer
});

export default RootReducer;
