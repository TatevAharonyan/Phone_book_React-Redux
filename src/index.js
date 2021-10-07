import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {reducer} from "./reducers/reducer"

export const store = createStore (reducer);

const render = () => ReactDOM.render( <App />, document.getElementById('root') );
render ()
store.subscribe(render);


reportWebVitals();
