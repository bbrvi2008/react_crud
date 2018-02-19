import React from 'react';
import { connect } from 'react-redux';
import { addPoint } from '../actions';

let AddPoint = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addPoint(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Point
        </button>
      </form>
    </div>
  );
};

AddPoint = connect()(AddPoint);

export default AddPoint;