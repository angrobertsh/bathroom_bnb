import { connect } from 'react-redux';
import BathroomShow from './bathroom_show';
import * as BATHROOM_ACTIONS from '../../actions/bathroom_actions';
import * as REVIEW_ACTIONS from '../../actions/review_actions';
import * as SHARED_ACTIONS from '../../actions/shared_actions';


const mapStateToProps = (state, ownProps) => ({
  errors: state.bathrooms.errors,
  bathroom: state.bathrooms.bathrooms[ownProps.params.bathroomId]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestSingleBathroom: (id) => dispatch(BATHROOM_ACTIONS.requestSingleBathroom(id)),
  updateBathroom: (bathroom) => dispatch(BATHROOM_ACTIONS.updateBathroom(bathroom)),
  upvote: (vote) => dispatch(SHARED_ACTIONS.upvote(vote)),
  editUpvote: (vote) => dispatch(SHARED_ACTIONS.editUpvote(vote))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BathroomShow);
