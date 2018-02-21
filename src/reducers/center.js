import { UPDATE_CENTER } from '../constants/actionTypes';

const initialState = [55.76, 37.64];

const centerCoordinates = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_CENTER:
      return action.coordinates;
    default:
      return state;
  }
}

export default centerCoordinates;