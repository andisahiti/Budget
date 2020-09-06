import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/reducer'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;




const rootStore = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const app = (
    <Provider store={rootStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
