import {combineReducers, createStore} from "redux";
import {addPostCreator, profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";



let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,

})

export type allTypeReduce = ReturnType<typeof reducers >

export let store = createStore(reducers);