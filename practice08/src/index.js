import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/modules';

const store = createStore(rootReducer);
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
