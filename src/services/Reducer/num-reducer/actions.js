import ActionTypes from './types';

const clickNumList = (num) => {
  return {
    type: ActionTypes.CLICK_NUMLIST,
    num: num
  };
}

const calcSum = (sum, values) => {
  return {
    type: ActionTypes.CALC_SUM,
    sum : sum,
    values: values
  };
}

const complateTen = (sum) => {
  return {
    type: ActionTypes.COMPLATE_TEN,
    sum: sum
  };
}

const Actions = {clickNumList, calcSum, complateTen};

export default Actions;