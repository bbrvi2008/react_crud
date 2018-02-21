import { ADD_POINT, EDIT_POINT, REMOVE_POINT, SORT_POINTS, UPDATE_CENTER } from '../constants/actionTypes'

let nextPointId = 4;

export const addPoint = (title, coordinates) => ({
    type: ADD_POINT,
    id: nextPointId++,
    title,
    coordinates
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
});

export const updateCenterCoordinates = (coordinates) => ({
  type: UPDATE_CENTER,
  coordinates
});