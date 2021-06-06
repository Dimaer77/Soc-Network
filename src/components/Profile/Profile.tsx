import React from "react";
import stl from "./Profile.module.css"
import {MyPosts} from "./Myposts/Mypost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";



export const Profile =()=>{
    return (
        <div >
            <ProfileInfo description="Bla bla bla"/>
            <MyPosts/>
        </div>
    )
}