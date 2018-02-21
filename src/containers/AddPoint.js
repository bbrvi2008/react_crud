import React from 'react';
import { connect } from 'react-redux';
import { addPoint } from '../actions';


class AddPoint extends React.Component {
  render() {
    let input;
    const { centerCoordinates, onAddPoint } = this.props;

    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }

          onAddPoint(input.value, centerCoordinates);
          input.value = ''
        }} className="points_form">
          <input ref={node => {
            input = node
          }} className="points_form_input" placeholder="Новая точка маршрута" />
          <button type="submit" className="button add-button">+</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    centerCoordinates: state.centerCoordinates
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAddPoint: (title, coordinates) => {
      dispatch(addPoint(title, coordinates));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddPoint);