import * as actionTypes from './constants';

const initialState = {
  items: [],
  isloading: false,
  isSaving: false,
  error: ""
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case actionTypes.PRODUCTS_FETCH:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.PRODUCTS_FETCH_SUCCESS:
      return {
        ...state,
        items: action.items,
        isLoading: false
      };
    case actionTypes.PRODUCTS_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case actionTypes.PRODUCT_ADD:
    case actionTypes.PRODUCT_UPDATE:
    case actionTypes.PRODUCT_REMOVE:
      return {
        ...state,
        isSaving: true
      };
    case actionTypes.PRODUCT_ADD_SUCCESS:
      return {
        ...state,
        isSaving: false,
        items: [
          ...state.items,
          action.item
        ]
      };
    case actionTypes.PRODUCT_UPDATE_SUCCESS:
      return {
        ...state,
        isSaving: false,
        items: state.items.map(item => item.id === action.item.id 
          ? action.item 
          : item)
      };
    case actionTypes.PRODUCT_REMOVE_SUCCESS:
      return {
        ...state,
        isSaving: false,
        items: state.items.filter(item => item.id !== action.item.id)
      };
    default:
      return state;
  }
}