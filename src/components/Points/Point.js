import React from 'react';
import { SortableElement } from 'react-sortable-hoc';

import './style.css'

class Point extends React.Component {
  render() {
    const { id, title, onRemovePoint } = this.props;

    return <li className="point">
      {title} <button onClick={() => onRemovePoint(id)} >Remove</button>
    </li>
  }
}

export default SortableElement(Point);