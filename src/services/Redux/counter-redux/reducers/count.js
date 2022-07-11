import {INCREMENT, DECREMENT, RESET} from '../types';
import {initCount} from '../states';

const CountReducer = (state = initCount, action) => {
   switch (action.type) {
      case INCREMENT:
         return state + 1;
      case DECREMENT:
         return state - 1;
      case RESET:
         return 0;
      default:
         return state;
   }
}

export default CountReducer;