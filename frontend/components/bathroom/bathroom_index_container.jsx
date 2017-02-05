import { connect } from 'react-redux';
import BathroomIndex from './bathroom_index';
import * as BATHROOM_ACTIONS from '../../actions/bathroom_actions';
import * as REVIEW_ACTIONS from '../../actions/review_actions';
import * as SHARED_ACTIONS from '../../actions/shared_actions';


const mapStateToProps = (state, ownProps) => ({
  errors: state.bathrooms.errors,
  bathrooms: state.bathrooms.bathrooms
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  requestAllBathrooms: () => dispatch(BATHROOM_ACTIONS.requestAllBathrooms()),
  requestSingleBathroom: (id) => dispatch(BATHROOM_ACTIONS.requestSingleBathroom(id)),
  updateReview: (review) => dispatch(REVIEW_ACTIONS.updateReview(review)),
  deleteReview: (review) => dispatch(REVIEW_ACTIONS.deleteReview(review)),
  upvote: (vote) => dispatch(SHARED_ACTIONS.upvote(vote)),
  editUpvote: (vote) => dispatch(SHARED_ACTIONS.editUpvote(vote))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BathroomIndex);
