import React from "react";
import stl from "./Profile.module.css"
import {MyPosts} from "./Myposts/Mypost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import { PostType} from "../../redux/state";


export type ProfilePageType = {
    posts: Array<PostType>
    dispatch:(action:any)=>void

    mes:string

}

export const Profile = (props:ProfilePageType) => {
    return (
        <div>
            <ProfileInfo description="description"/>
            <MyPosts posts={props.posts} dispatch={props.dispatch}  mes={props.mes} />
        </div>
    )
}