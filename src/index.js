import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import Routes from './routes';


const initialState = {};
const store = createStore(
      reducers,
      initialState,
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

ReactDOM.render(
    <Provider store={store}>
        <Routes history={browserHistory} />
    </Provider>,
    document.getElementById('root')
);
