import stl from "./Mypost.module.css"
import React, {LegacyRef, RefObject} from "react" ;
import {Post} from "./post/Post";
import {addPost, DialogType, MessageType, PostType} from "../../../redux/state";

export type ProfilePageType = {
    posts: Array<PostType>
    addPostCallback: (postMessage: string) => void
}
export const MyPosts = (props: ProfilePageType) => {

    let postElements = props.posts.map(post => <Post key={post.id} message={post.message} likeCount={post.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            props.addPostCallback(newPostElement.current.value)
            newPostElement.current.value=""
        }
    }


    return (
        <div className={stl.myposts}>
            <h3>My Post</h3>
            <div>
                <textarea ref={newPostElement} className={stl.textArea}/>
                <button onClick={addPost} className={stl.btn}>add</button>
            </div>
            <div className={stl.posts}>
                {postElements}

            </div>


        </div>
    )
}