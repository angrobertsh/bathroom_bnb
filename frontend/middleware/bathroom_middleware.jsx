import * as BATHROOM_ACTIONS from '../actions/bathroom_actions';
import * as SESSION_ACTIONS from '../actions/session_actions';
import * as SHARED_ACTIONS from '../actions/shared_actions';

import * as BATHROOM_UTILS from '../util/bathroom_api_util';
import * as REVIEW_UTILS from '../util/review_api_util';
import * as VOTE_UTILS from '../util/vote_api_util';


const BathroomMiddleware = ({state, dispatch}) => next => action => {
  const error = (errors) => {
    dispatch(SHARED_ACTIONS.receiveBathreviewErrors(errors.responseJSON.errors));
  };

  let success = (bathroom) => {
    dispatch(BATHROOM_ACTIONS.receiveSingleBathroom(bathroom));
  };

  switch (action.type){
    case "REQUEST_ALL_BATHROOMS":
      success = (bathrooms) => {
        dispatch(BATHROOM_ACTIONS.receiveAllBathrooms(bathrooms));
      };
      BATHROOM_UTILS.getAllBathrooms(success, error)
      return next(action);
    case "REQUEST_SINGLE_BATHROOM":
      BATHROOM_UTILS.getSingleBathroom(success, error, action.id);
      return next(action);
    case "CREATE_NEW_BATHROOM":
      BATHROOM_UTILS.createBathroom(success, error, action.bathroom);
      return next(action);
    case "UPDATE_BATHROOM":
      BATHROOM_UTILS.editBathroom(success, error, action.bathroom);
      return next(action);
    case "CREATE_REVIEW":
      REVIEW_UTILS.createReview(success, error, action.review);
      return next(action);
    case "UPDATE_REVIEW":
      REVIEW_UTILS.editReview(success, error, action.review);
      return next(action);
    case "DELETE_REVIEW":
      REVIEW_UTILS.destroyReview(success, error, action.id);
      return next(action);
    case "UPVOTE":
      success = (bathroom) => {
        dispatch(BATHROOM_ACTIONS.receiveSingleBathroom(bathroom));
        dispatch(SESSION_ACTIONS.getVotes());
      };
      VOTE_UTILS.createUpvote(success, error, action.vote);
      return next(action);
    case "EDIT_UPVOTE":
      success = (bathroom) => {
        dispatch(BATHROOM_ACTIONS.receiveSingleBathroom(bathroom));
        dispatch(SESSION_ACTIONS.getVotes());
      };
      VOTE_UTILS.updateUpvote(success, error, action.vote);
      return next(action);
    default:
      return next(action);
  }
}

export default BathroomMiddleware
