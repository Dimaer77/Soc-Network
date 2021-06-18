import stl from "./Mypost.module.css"
import React, {LegacyRef, RefObject} from "react" ;
import {Post} from "./post/Post";
import {ActionType, PostType} from "../../../redux/store";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";

export type ProfilePageType = {
    posts: Array<PostType>
    addPost:()=>void
    updateNewPostText: (text: string) => void
    mes: string
}



export const MyPosts = (props: ProfilePageType) => {

    let postElements = props.posts.map(post => <Post key={post.id} message={post.message} likeCount={post.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        props.addPost()

    }

    const onPostChange = () => {

       if(newPostElement.current){
           let text = newPostElement.current.value
           props.updateNewPostText(text)
       }
    }


    return (
        <div className={stl.myposts}>
            <h3>My Post</h3>
            <div>
                <textarea ref={newPostElement}
                          value={props.mes}
                          onChange={onPostChange}
                          className={stl.textArea}/>
                <button onClick={onAddPost} className={stl.btn}>Send</button>
            </div>
            <div className={stl.posts}>
                {postElements}

            </div>


        </div>
    )
}