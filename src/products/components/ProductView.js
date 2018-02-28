import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductView extends Component {
  

  render() {
    const { match, products, productSelector, onRemoveProduct } = this.props;

    const product = productSelector(products, parseInt(match.params.id, 10));

    if(!product) {
      return (
        <div>Not found data</div>
      );
    }

    return (
      <div>
        <h1>View product</h1>
        <span>Product name: {product.title}</span>
        <div>
          <Link to={`/product/edit/${product.id}`}>Edit</Link>
          <button onClick={() => onRemoveProduct(product)}>Remove</button>
        </div>
      </div>
    );
  }
}

ProductView.propTypes = {
  products: PropTypes.array.isRequired
}

export default ProductView;