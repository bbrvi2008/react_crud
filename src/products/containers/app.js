import React, { Component } from 'react';
import { Route } from 'react-router-dom';   
import ProductPage from './ProductPage';  
import ProductsPage from './ProductsPage'; 

const main_style = {
  display: 'flex',
  justifyContent: 'flex-start'
};



class App extends Component {
  render() {
    return (
      <div>
        <main style={main_style}>
          <ProductsPage></ProductsPage>

          <Route path='/product' component={ProductPage} ></Route>
        </main>
      </div>
    );
  }
}

export default App;