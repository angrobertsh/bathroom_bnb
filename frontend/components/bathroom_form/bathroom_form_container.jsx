import { connect } from 'react-redux';
import BathroomForm from './bathroom_form';
import * as BATHROOM_ACTIONS from '../../actions/bathroom_actions';

const mapStateToProps = state => ({
  errors: state.bathrooms.errors
});

const mapDispatchToProps = dispatch => ({
  createNewBathroom: (bathroom) => dispatch(BATHROOM_ACTIONS.createNewBathroom(bathroom))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BathroomForm);
