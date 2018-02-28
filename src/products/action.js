import axios from 'axios';
import * as actionTypes from './constants';

const productActions = {
  fetch: () => ({
    type: actionTypes.PRODUCTS_FETCH
  }),
  fetchSuccess: (items) => ({
    type: actionTypes.PRODUCTS_FETCH_SUCCESS,
    items
  }),
  fetchFailure: (error) => ({
    type: actionTypes.PRODUCTS_FETCH_FAILURE,
    error
  }),
  add: () => ({
    type: actionTypes.PRODUCT_ADD
  }),
  addSuccess: (item) => ({
    type: actionTypes.PRODUCT_ADD_SUCCESS,
    item
  }),
  addFailure: (error) => ({
    type: actionTypes.PRODUCT_ADD_FAILURE,
    error
  }),
  update: () => ({
    type: actionTypes.PRODUCT_UPDATE
  }),
  updateSuccess: (item) => ({
    type: actionTypes.PRODUCT_UPDATE_SUCCESS,
    item
  }),
  updateFailure: (error) => ({
    type: actionTypes.PRODUCT_UPDATE_FAILURE,
    error
  }),
  remove: () => ({
    type: actionTypes.PRODUCT_REMOVE
  }),
  removeSuccess: (item) => ({
    type: actionTypes.PRODUCT_REMOVE_SUCCESS,
    item
  }),
  removeFailure: (error) => ({
    type: actionTypes.PRODUCT_REMOVE_FAILURE,
    error
  })
}

export const getProducts = () => dispatch => {
  dispatch(productActions.fetch());
  axios.get('http://localhost:3004/products')
    .then((response) => {
      const { data } = response;
      dispatch(productActions.fetchSuccess(data));
    })
    .catch((error) => {
      console.log(error)
    });
}

export const addProduct = (product) => dispatch => {
  dispatch(productActions.add());
  axios.post(
      'http://localhost:3004/products', 
      product, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    .then((response) => {
      const { data } = response;
      dispatch(productActions.addSuccess(data))
    })
    .catch((error) => {
      console.log(error);
    })
}

export const updateProduct = (product) => dispatch => {
  dispatch(productActions.update());
  axios.put(
      `http://localhost:3004/products/${product.id}`, 
      {
        title: product.title
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    .then((response) => {
      const { data } = response;
      dispatch(productActions.updateSuccess(data))
    })
    .catch((error) => {
      console.log(error);
    })
}

export const removeProduct = (product) => dispatch => {
  dispatch(productActions.remove());
  axios.delete(
      `http://localhost:3004/products/${product.id}`, 
      {}, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    .then((response) => {
      dispatch(productActions.removeSuccess(product))
    })
    .catch((error) => {
      console.log(error);
    })
}