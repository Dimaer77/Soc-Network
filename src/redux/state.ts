import React from 'react';
import {renderEntireTree} from "../render";

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
}
export type DialogsPageType ={
    dialogs:Array<DialogType>
    messages:Array<MessageType>

}


export type RootStateType ={
    profilePage:ProfilePageType
    dialogsPage:DialogsPageType
}

export let state:RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Asdfs", likesCount: 11},
            {id: 2, message: "Bsdfs", likesCount: 131},
            {id: 3, message: "Csdfs", likesCount: 11},
            {id: 4, message: "Dsdf", likesCount: 13234231}],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dima"},
            {id: 2, name: "Fima"},
            {id: 3, name: "Hima"},
            {id: 4, name: "Nima"},
            {id: 5, name: "Kima"},
        ],
        messages: [
            {id: 1, message: "asdasd"},
            {id: 2, message: "Fiasdasdma"},
            {id: 3, message: "Hima"},
            {id: 4, message: "Nimzxczxca"},
            {id: 5, message: "Kimzxczxa"},
        ]
    }
}
 export const addPost = (postMessage:string)=>{
    let newPost:PostType = {
        id:5,
        message:postMessage,
        likesCount:100
    }
    state.profilePage.posts.push(newPost)
     renderEntireTree(state)
 }