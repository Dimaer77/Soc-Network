import React from "react";
import stl from "./Profile.module.css"
import {MyPosts} from "./Myposts/Mypost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost, PostType} from "../../redux/state";


export type ProfilePageType = {
    posts: Array<PostType>
    addPostCallback:(postMessage:string)=>void
    updateNewPostText:(text:string)=>void
    mes:string
}

export const Profile = (props:ProfilePageType) => {
    return (
        <div>
            <ProfileInfo description="description"/>
            <MyPosts posts={props.posts} addPostCallback={props.addPostCallback} updateNewPostText={props.updateNewPostText} mes={props.mes}/>
        </div>
    )
}