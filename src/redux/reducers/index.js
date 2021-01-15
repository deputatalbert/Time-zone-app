import { combineReducers } from 'redux';
import { timezoneReducer } from './timezoneReducer';

const allReducers = combineReducers({
    timezoneReducer,

});

export default allReducers;