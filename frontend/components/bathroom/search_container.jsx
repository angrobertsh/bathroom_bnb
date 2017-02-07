import { connect } from 'react-redux';
import Search from './search';
import * as BATHROOM_ACTIONS from '../../actions/bathroom_actions';
import * as REVIEW_ACTIONS from '../../actions/review_actions';
import * as SHARED_ACTIONS from '../../actions/shared_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  errors: state.bathrooms.errors,
  bathrooms: state.bathrooms.bathrooms
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestAllBathrooms: () => dispatch(BATHROOM_ACTIONS.requestAllBathrooms()),
  upvote: (vote) => dispatch(SHARED_ACTIONS.upvote(vote)),
  editUpvote: (vote) => dispatch(SHARED_ACTIONS.editUpvote(vote))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
