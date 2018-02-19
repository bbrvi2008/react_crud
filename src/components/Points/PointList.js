import React from 'react';
import Point from './Point';
import { SortableContainer } from 'react-sortable-hoc';

const PointList = SortableContainer(({ points, onRemovePoint }) => {
  return (
    <ul>
      {points.map((point, index) => 
        <Point 
          key={`item-${index}`}
          index={index}
          onRemovePoint={onRemovePoint}
          {...point}
        />
      )}
    </ul>
  );
});

export default PointList;