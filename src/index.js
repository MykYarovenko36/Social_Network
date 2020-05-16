
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from "./redux/state.js"
import * as serviceWorker from './serviceWorker';



 let rerenderEntireTree = (state) =>{
       
        ReactDOM.render( <BrowserRouter>
        
                 <App state={store._state} dispatch={store.dispatch.bind(store)} 
               
                />
                </BrowserRouter>, document.getElementById('root')
                        )};
                        
    rerenderEntireTree(store.getState());
    store.subscribe(rerenderEntireTree);           

serviceWorker.unregister();