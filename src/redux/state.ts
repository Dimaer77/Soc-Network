// let rerenderEntireTree = () => {
//
// }
// export const subscribe = (observer:()=>void) => {
//     rerenderEntireTree = observer
// }

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

}


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
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
type StoreType = {
    _state: RootStateType,
    addPost: (postMessage: string) => void,
    updateNewPostText: (newText: string) => void,
    _callSubscriber: () => void,
    subscribe: (observer: () => void) => void
    getState:()=>RootStateType
}


export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Asdfs", likesCount: 11},
                {id: 2, message: "Bsdfs", likesCount: 131},
                {id: 3, message: "Csdfs", likesCount: 11},
                {id: 4, message: "Dsdf", likesCount: 13234231}],
            newPostText: ""
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
    },
    getState() {
        return this._state
    },

    addPost(postMessage: string) {
        let newPost: PostType = {
            id: 5,
            message: postMessage,
            likesCount: 100
        }
        this._state.profilePage.posts.push(newPost)
        this._callSubscriber()
    },
    _callSubscriber() {
        console.log("asdas")
    },

    updateNewPostText(newText: string) {
        debugger
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }

}
