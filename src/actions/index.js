import { ADD_POINT, EDIT_POINT, REMOVE_POINT, SORT_POINTS } from '../constants/actionTypes'

let nextPointId = 4;

export const addPoint = (title) => ({
    type: ADD_POINT,
    id: nextPointId++,
    title
});

export const editPoint = (id, coordinates) => ({
  type: EDIT_POINT,
  id,
  coordinates
});

export const removePoint = (id) => ({
  type: REMOVE_POINT,
  id: id
});

export const sortPoints = (oldIndex, newIndex) => ({
  type: SORT_POINTS,
  oldIndex,
  newIndex
})