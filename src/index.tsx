import React from "react" ;
import './index.css';
import App from './App';
import {addPost, RootStateType, state, subscribe, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';




  const renderEntireTree =()=>{

    ReactDOM.render(
        <BrowserRouter>
            <App appState={state} addPostCallback={addPost}  updateNewPostText={updateNewPostText} mes={state.profilePage.newPostText} />
        </BrowserRouter>, document.getElementById("root"));
}
renderEntireTree();
  subscribe(renderEntireTree)


