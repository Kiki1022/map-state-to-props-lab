import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider} from 'react-redux'
import { createStore} from 'redux'
import manageUsers from './reducers/manageUsers'


let store = createStore(manageUsers, window.__REDUX_DEVTOOLS_EXTENSIONS__&& window.__REDUX_DEVTOOLS_EXTENSION_())


ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
