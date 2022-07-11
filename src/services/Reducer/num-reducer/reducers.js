import ActionTypes from './types';

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

const clickNumReducer = (state , action) => {
  switch (action.type) {
    case ActionTypes.CLICK_NUMLIST:
      return state.map((item) => {
        if (item.weight === action.num) {    
          return { ...item, check: !item.check };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

const calcSumReducer = (state , action) => {
  switch (action.type) {
    case ActionTypes.CALC_SUM:
//      state.sum = action.sum;
//      state.values = action.values;
//      return state;
      return { ...state, sum: action.sum, values : action.values };
    default:
      return state;
  }
};

const complateTenReducer = (state , action) => {
  switch (action.type) {
    case ActionTypes.COMPLATE_TEN:
      state.sum = action.sum;
      if (action.sum === 10) {
        state.title = "yes";
      } else {
        state.title = "no";
      }
      return state;
    default:
      return state;
  }
};

const Reducers =  {reducer, clickNumReducer, calcSumReducer, complateTenReducer};

export default Reducers;