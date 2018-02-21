import React from 'react';
import { connect } from 'react-redux'

import Points from '../components/Points/index';
import Map from '../components/Map';

import { editPoint, removePoint, sortPoints, updateCenterCoordinates } from '../actions/index'

import './style.css';

class Placemarks extends React.Component {
  render() {
    const { points, centerCoordinates, onEditPoint, onRemovePoint, onSortPoints, onUpdateCenterCoordinates } = this.props;

    return <div className="layout">
      <Points points={points} onRemovePoint={onRemovePoint} onSortPoints={onSortPoints} />
      <Map points={points} centerCoordinates={centerCoordinates} onEditPoint={onEditPoint} onUpdateCenterCoordinates={onUpdateCenterCoordinates} />
    </div>;
  }
};

function mapStateToProps(state) {
  return {
    points: state.points,
    centerCoordinates: state.centerCoordinates
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
    },
    onUpdateCenterCoordinates: (coordinates) => {
      dispatch(updateCenterCoordinates(coordinates));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Placemarks);