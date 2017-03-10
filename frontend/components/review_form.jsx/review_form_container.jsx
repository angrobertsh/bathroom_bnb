import { connect } from 'react-redux';
import ReviewForm from './review_form';
import * as REVIEW_ACTIONS from '../../actions/bathroom_actions';

const mapStateToProps = state => ({
  errors: state.bathrooms.errors
});

const mapDispatchToProps = dispatch => ({
  createNewReview: (review) => dispatch(REVIEW_ACTIONS.createNewReview(review))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
