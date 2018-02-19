import React from 'react';
import { connect } from 'react-redux'

import Points from '../components/Points/index';
import Map from '../components/Map';

import { editPoint, removePoint, sortPoints } from '../actions/index'

import './style.css';

class Placemarks extends React.Component {
  onSort() {
    console.log(arguments);
  }

  render() {
    const { points, onEditPoint, onRemovePoint, onSortPoints } = this.props;

    return <div className="layout">
      <Points points={points} onRemovePoint={onRemovePoint} onSortPoints={onSortPoints} />
      <Map points={points} onEditPoint={onEditPoint} />
    </div>;
  }

};

function mapStateToProps(state) {
  return {
    points: state.points
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onEditPoint: (id, coordinates) => {
      dispatch(editPoint(id, coordinates));
    },
    onRemovePoint: (id) => {
      dispatch(removePoint(id));
    },
    onSortPoints: ({oldIndex, newIndex}) => {
      dispatch(sortPoints(oldIndex, newIndex));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Placemarks);