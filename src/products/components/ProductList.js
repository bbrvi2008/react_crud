import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductList extends Component {
  render() {
    const { products } = this.props;

    return (
      <ul>
        {products.map(product => 
          <li key={product.id}><Link to={`/product/view/${product.id}`}>{product.title}</Link></li>
        )}
      </ul>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
}

export default ProductList;