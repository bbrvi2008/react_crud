import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { getProducts, addProduct, updateProduct, removeProduct } from '../action';

import ProductView from '../components/ProductView';
import ProductForm from '../components/ProductForm';


class ProductPage extends Component {
  productSelector(products, id) {
    return products.find(product => product.id === id);
  }

  componentWillMount() {
    this.props.onGetProducts();
  }
  

  render() {
    const { products, onAddProduct, onUpdateProduct, onRemoveProduct } = this.props;

    return (
      <Switch>
        <Route path="/product/view/:id" render={({match}) => (
          <ProductView products={products.items} productSelector={this.productSelector} onRemoveProduct={onRemoveProduct} match={match} />
        )}/>
        <Route path="/product/new" render={({match}) => (
          <ProductForm title={'New product'} products={products.items} productSelector={this.productSelector} onSave={onAddProduct} match={match} />
        )}/>
        <Route path="/product/edit/:id" render={({match}) => (
          <ProductForm title={'Edit product'} products={products.items} productSelector={this.productSelector} onSave={onUpdateProduct} match={match} />
        )}/>
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetProducts: () => {
      dispatch(getProducts());
    },
    onAddProduct: (product) => {
      dispatch(addProduct(product));
    },
    onUpdateProduct: (product) => {
      dispatch(updateProduct(product));
    },
    onRemoveProduct: (product) => {
      dispatch(removeProduct(product));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);