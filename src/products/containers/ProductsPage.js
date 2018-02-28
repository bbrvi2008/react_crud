import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../action';
import { Link } from 'react-router-dom';

import ProductList from '../components/ProductList';

class ProductsPage extends Component {
  componentWillMount() {
    this.props.onGetProducts();
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        <Link to={'/product/new'}>Add</Link>
        <ProductList products={products.items} ></ProductList>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetProducts: () => {
      dispatch(getProducts());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);