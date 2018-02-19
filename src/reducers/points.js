import { ADD_POINT, EDIT_POINT, REMOVE_POINT, SORT_POINTS } from '../constants/actionTypes';
import { arrayMove } from 'react-sortable-hoc';

const initialState = [{
  id: 1,
  title: "test1",
  coordinates: [55.63954474958304, 37.477276611324314] 
}, {
  id: 2,
  title: "test2",
  coordinates: [55.76517472661736, 37.820599365231125] 
}, {
  id: 3,
  title: "test3",
  coordinates: [55.82861069901381, 37.44431762695029] 
}];

const points = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POINT:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          coordinates: [55.76, 37.64]
        }
      ];
    case EDIT_POINT:
      return state.map(point => {
        return point.id === action.id 
          ? { ...point, coordinates: action.coordinates }
          : point;
      })
    case REMOVE_POINT:
      return state.filter(point => {
        return point.id !== action.id;
      });
    case SORT_POINTS:
      return arrayMove(state, action.oldIndex, action.newIndex);
    default:
      return state;
  }
};

export default points;