import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import Dealreducer from './reducers/Dealreducer';
import Invoicereducer from './reducers/Invoicereducer';

const rootReducer=combineReducers({
    del:Dealreducer,
    inv:Invoicereducer
})
const store=createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
