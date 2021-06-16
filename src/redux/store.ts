import {addPostCreator, profileReducer, updateNewPostTextCreator} from "./profile-reducer";
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

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
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string

}


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    // sidebar: string
}

// export let state: RootStateType = {
//     profilePage: {
//         posts: [
//             {id: 1, message: "Asdfs", likesCount: 11},
//             {id: 2, message: "Bsdfs", likesCount: 131},
//             {id: 3, message: "Csdfs", likesCount: 11},
//             {id: 4, message: "Dsdf", likesCount: 13234231}],
//         newPostText: "new-post"
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: "Dima"},
//             {id: 2, name: "Fima"},
//             {id: 3, name: "Hima"},
//             {id: 4, name: "Nima"},
//             {id: 5, name: "Kima"},
//         ],
//         messages: [
//             {id: 1, message: "asdasd"},
//             {id: 2, message: "Fiasdasdma"},
//             {id: 3, message: "Hima"},
//             {id: 4, message: "Nimzxczxca"},
//             {id: 5, message: "Kimzxczxa"},
//         ]
//     }
// }
// export const addPost = (postMessage: string) => {
//     let newPost: PostType = {
//         id: 5,
//         message: postMessage,
//         likesCount: 100
//     }
//     state.profilePage.posts.push(newPost)
//     rerenderEntireTree()
//
// }
//
// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree()
// }
/////////////////////////////////
export type StoreType = {
    _state: RootStateType,
    _callSubscriber: () => void,
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionType) => void
}

// export type AddPostActionType = ReturnType<typeof addPostCreator>
// export type ChangeNewTextActionType = ReturnType<typeof updateNewPostTextCreator>
// export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyCreator>
// export type SendMessageActionType = ReturnType<typeof sendMessageCreator>;
//

// export type ActionType =
//     AddPostActionType
//     | ChangeNewTextActionType
//     | SendMessageActionType
//     | UpdateNewMessageBodyActionType

export type ActionType = ReturnType<typeof addPostCreator>
    | ReturnType<typeof updateNewPostTextCreator>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageBodyAC>


// export let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: "Asdfs", likesCount: 11},
//                 {id: 2, message: "Bsdfs", likesCount: 131},
//                 {id: 3, message: "Csdfs", likesCount: 11},
//                 {id: 4, message: "Dsdf", likesCount: 13234231}],
//             newPostText: ""
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: "Dima"},
//                 {id: 2, name: "Fima"},
//                 {id: 3, name: "Hima"},
//                 {id: 4, name: "Nima"},
//                 {id: 5, name: "Kima"},
//             ],
//             messages: [
//                 {id: 1, message: "asdasd"},
//                 {id: 2, message: "Fiasdasdma"},
//                 {id: 3, message: "Hima"},
//                 {id: 4, message: "Nimzxczxca"},
//                 {id: 5, message: "Kimzxczxa"},
//             ]
//         }
//     },
//     getState() {
//         return this._state
//     },
//
//     addPost(postMessage: string) {
//         let newPost: PostType = {
//             id: 5,
//             message: postMessage,
//             likesCount: 100
//         }
//         this._state.profilePage.posts.push(newPost)
//         this._callSubscriber()
//     },
//     _callSubscriber() {
//         console.log("asdas")
//     },
//
//     updateNewPostText(newText: string) {
//         debugger
//         this._state.profilePage.newPostText = newText
//         this._callSubscriber()
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     }
//
// }
export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Asdfs", likesCount: 11},
                {id: 2, message: "Bsdfs", likesCount: 131},
                {id: 3, message: "Csdfs", likesCount: 11},
                {id: 4, message: "Dsdf", likesCount: 13234231}],
            newPostText: "qwoekqwkr"
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
            ],
            newMessageBody: "New Message"
        },
        // sidebar: ""
    },
    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log("asdas")
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()
        // switch (action.type) {
        //     case "ADD-POST":
        //         let newPost: PostType = {
        //             id: 5,
        //             message: action.postMessage,
        //             likesCount: 100
        //         }
        //         this._state.profilePage.posts.push(newPost)
        //         this._callSubscriber()
        //         break;
        //     case "UPDATE-NEW-POST-TEXT":
        //         this._state.profilePage.newPostText = action.newText
        //         this._callSubscriber()
        //         break;
        //     case "UPDATE-NEW-MESSAGE-BODY":
        //         this._state.dialogsPage.newMessageBody = action.mesBody
        //         this._callSubscriber()
        //         break;
        //     case "SEND-MESSAGE":
        //         let mesBody = this._state.dialogsPage.newMessageBody;
        //         let newMess: MessageType = {
        //             id: 5,
        //             message: mesBody,
        //         }
        //         this._state.dialogsPage.messages.push(newMess)
        //         this._callSubscriber()
        //         break;
        // }

    }
}