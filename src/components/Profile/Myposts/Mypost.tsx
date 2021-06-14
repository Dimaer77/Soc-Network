import stl from "./Mypost.module.css"
import React, {LegacyRef, RefObject} from "react" ;
import {Post} from "./post/Post";
import {PostType} from "../../../redux/state";

export type ProfilePageType = {
    posts: Array<PostType>
    dispatch: (action: any) => void
    mes: string

}
export const MyPosts = (props: ProfilePageType) => {

    let postElements = props.posts.map(post => <Post key={post.id} message={post.message} likeCount={post.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            props.dispatch({type:"ADD-POST", postMessage:newPostElement.current.value} )
            props.dispatch({ type:"UPDATE-NEW-POST-TEXT",newText:" "})

        }


    }
    const onPostChange = () => {
        let text = newPostElement.current
        if (text) {
            props.dispatch({type:"UPDATE-NEW-POST-TEXT", newText:text.value})
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
                <button onClick={addPost} className={stl.btn}>add</button>
            </div>
            <div className={stl.posts}>
                {postElements}

            </div>


        </div>
    )
}