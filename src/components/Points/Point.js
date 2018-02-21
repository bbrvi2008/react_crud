import React from 'react';
import { SortableElement } from 'react-sortable-hoc';

import './style.css'

class Point extends React.Component {
  render() {
    const { id, title, onRemovePoint } = this.props;

    return (
      <li className="point">
        <span title={title}>{title}</span><button onClick={() => onRemovePoint(id)} className="button remove-button">x</button>
      </li>
    );
    
  }
}

export default SortableElement(Point);