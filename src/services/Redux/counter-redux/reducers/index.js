import { combineReducers } from "redux";

import CountReducer from './count';

const rootReducer = combineReducers ({
   countReducer: CountReducer,
});

export default rootReducer;