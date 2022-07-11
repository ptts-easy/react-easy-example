import { connect } from 'react-redux'
import Counter from './counter'
import { increment, decrement, reset } from '../../services/Redux/counter-redux/actions';

const mapStateToProps = (state) => {
   return {
      counter: state.countReducer
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
      reset: () => dispatch(reset())
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);