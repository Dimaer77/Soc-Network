import React from 'react';
import './index.css';
import {renderEntireTree} from "./render";
import {state} from "./redux/state";




renderEntireTree(state)
// ReactDOM.render(
//   <BrowserRouter>
//       <App appState={state} addPostCallback={addPost} />
//   </BrowserRouter>, document.getElementById("root")
//
//
// );


