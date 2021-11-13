import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers'
import thunk from 'redux-thunk';



const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

