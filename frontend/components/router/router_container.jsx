import { connect } from 'react-redux';
import AppRouter from './router';
import * as FILTER_ACTIONS from '../../actions/filter_actions';
import * as SESSION_ACTIONS from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateTag: (tag) => dispatch(FILTER_ACTIONS.updateTag(tag)),
  removeTags: () => dispatch(FILTER_ACTIONS.removeTags()),
  clearSessionErrors: () => dispatch(SESSION_ACTIONS.clearSessionErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
