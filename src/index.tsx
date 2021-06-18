import React from "react" ;
import './index.css';
import App from './App';
import {allTypeReduce, store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';


const renderEntireTree = (state: allTypeReduce) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                // mes={store.getState().profilePage.newPostText}
                // mesVal={store.getState().dialogsPage.newMessageBody}
            />
        </BrowserRouter>, document.getElementById("root"));
}

renderEntireTree(store.getState());

store.subscribe(() => {
    const state = store.getState()
    renderEntireTree(state)
})


