import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Products from '../products/index';
import configureStore from './configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Products />
        </Provider> 
      </div>
    );
  }
}

export default App;
