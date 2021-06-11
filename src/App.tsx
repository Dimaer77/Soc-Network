import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost, RootStateType} from "./redux/state";

type AppStatePropsType={
    appState:RootStateType
    addPostCallback:(postMessage:string)=>void
}



function App(props:AppStatePropsType) {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/Dialogs"} render={() => <Dialogs
                        dialogs={props.appState.dialogsPage.dialogs}
                        messages={props.appState.dialogsPage.messages}/>}/>
                    <Route path="/Profile" render={() => <Profile posts={props.appState.profilePage.posts} addPostCallback={props.addPostCallback} />}/>
                </div>

            </div>

        </BrowserRouter>
    );
}

export default App;
