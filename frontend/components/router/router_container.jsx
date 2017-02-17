import { connect } from 'react-redux';
import AppRouter from './router';
import * as FILTER_ACTIONS from '../../actions/filter_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateTag: (tag) => dispatch(FILTER_ACTIONS.updateTag(tag)),
  removeTags: () => dispatch(FILTER_ACTIONS.removeTags())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
