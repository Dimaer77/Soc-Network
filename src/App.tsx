import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { Profile } from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { UsersContainer } from "./components/Users/UsersContainer";

function App() {
  return (
    <BrowserRouter>
      <div className={"app-wrapper"}>
        <Header />
        <Navbar />
        <div className={"app-wrapper-content"}>
          <Route path={"/Dialogs"} render={() => <DialogsContainer />} />
          <Route path="/Profile" render={() => <Profile />} />
          <Route path="/Users" render={() => <UsersContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
