import stl from "./Mypost.module.css"
import React, {ChangeEvent, LegacyRef, RefObject} from "react" ;
import {Post} from "./post/Post";
import {ActionType, PostType, RootStateType, StoreType} from "../../../redux/store";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./Mypost";
import {allTypeReduce} from "../../../redux/redux-store";

export type ProfilePageType = {
    // posts: Array<PostType>
    dispatch: (action: ActionType) => void
    // mes: string
    store: allTypeReduce
}


export const MyPostsContainer = (props: ProfilePageType) => {

    let postElements = props.store.profilePage.posts.map(post => <Post key={post.id} message={post.message} likeCount={post.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.dispatch(addPostCreator())

    }

    const onPostChange = (text:string) => {
        let action =updateNewPostTextCreator(text)
           props.dispatch(action)

    }


    return (

         <MyPosts updateNewPostText={onPostChange}
                  mes={props.store.profilePage.newPostText}
                  addPost={addPost}
                  posts={props.store.profilePage.posts}/>

    )
}