import { connect } from 'react-redux';
import BathroomForm from './bathroom_form';
import * as BATHROOM_ACTIONS from '../../actions/bathroom_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BathroomForm);
