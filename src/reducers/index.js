import { combineReducers } from 'redux';
import points from './points';
import centerCoordinates from './center';

const placemarksApp = combineReducers({
  points,
  centerCoordinates
});

export default placemarksApp;