import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from '@chakra-ui/react'
import './index.css';
import App from "./App";
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import stores from './component/store/store';
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(
    stores,
    composeWithDevTools(),
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ChakraProvider>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </ChakraProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

