import React, { Component } from 'react'; 
import { BrowserRouter } from 'react-router-dom';  
import App from './containers/app';

class Products extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

export default Products;