import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import {createStore} from "redux";
import Reducer from './project/store/Store';
import {getTodo} from "./project/action/Action";

const store = createStore(Reducer)

const listener = () => {
    const state = store.getState();
    console.log(state);
};
const unsubscribe = store.subscribe(listener);


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index  path="/" element={<App store={store} />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

