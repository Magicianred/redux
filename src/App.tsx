import React from 'react';
import { Provider } from 'react-redux'
import Catalog from './components/Catalog';
import store from './store';

function App() {
  return (
    <Provider store={store}>
          <h1>Hello world, Redux</h1>
          <Catalog />
    </Provider>

    )
}

export default App;
