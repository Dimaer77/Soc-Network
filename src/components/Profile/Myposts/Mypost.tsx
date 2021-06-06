import stl from "./Mypost.module.css"
import React from "react" ;
import {Post} from "./post/Post";


const postData =[
    {id:1,message:"Blablab", likesCount:11},
    {id:2,message:"Blablab2", likesCount:131}
]
let postElements = postData.map(post=> <Post message={post.message} likeCount={post.likesCount}/>)

export const MyPosts = () =>{
    return(
        <div className={stl.myposts}>
           <h3>My Post</h3>
            <div>
                <textarea className={stl.textArea} placeholder={"asd"}/>
                <button className={stl.btn}>add</button>
            </div>
            <div className={stl.posts}>
                {postElements}

            </div>


        </div>
    )
}