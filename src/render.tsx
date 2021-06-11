import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";




export const renderEntireTree =(state:RootStateType)=>{

    ReactDOM.render(
        <BrowserRouter>
            <App appState={state} addPostCallback={addPost} />
        </BrowserRouter>, document.getElementById("root")


    );
}


