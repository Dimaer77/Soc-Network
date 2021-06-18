import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionType, RootStateType,  StoreType} from "./redux/store";
import {allTypeReduce} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppStatePropsType = {
    state: allTypeReduce
    dispatch: (action: ActionType) => void
    // mes: string
    // mesVal: string

}


function App(props: AppStatePropsType) {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/Dialogs"} render={() => <DialogsContainer
                        store={props.state}
                        // mesVal={props.store.getState().dialogsPage.newMessageBody}
                        dispatch={props.dispatch}
                        // dialogs={props.store.dialogsPage.dialogs}
                        // messages={props.store.getState().dialogsPage.messages}
                    />}
                    />
                    <Route path="/Profile" render={() =>
                        <Profile
                            // posts={props.store.getState().profilePage.posts}
                            store={props.state}
                            dispatch={props.dispatch}
                            // mes={props.mes}
                        />}/>
                </div>

            </div>

        </BrowserRouter>
    );
}

export default App;
