import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Placemarks from './containers/Placemarks';
import configureStore from './store/configureStore'

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Placemarks />
      </Provider> 
    );
  }
}

export default App;
