import ActionTypes from './types';

const clickColorItem = (color) => {
  return {
    type: ActionTypes.CLICK_COLORITEM,
    color: color
  };
}

export default {clickColorItem};