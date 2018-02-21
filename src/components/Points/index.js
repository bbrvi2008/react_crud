import React from 'react';
import PointList from './PointList'
import AddPoint from '../../containers/AddPoint'


class Points extends React.Component {


  render() {
    const { points, onRemovePoint, onSortPoints } = this.props;

    return <div className="points">
      <AddPoint />
      <PointList points={points} onRemovePoint={onRemovePoint} onSortEnd={onSortPoints}></PointList>
    </div>;
  }

};

export default Points