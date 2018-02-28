import { combineReducers } from 'redux';
import products from '../products/reducer';

const placemarksApp = combineReducers({
  products
});

export default placemarksApp;