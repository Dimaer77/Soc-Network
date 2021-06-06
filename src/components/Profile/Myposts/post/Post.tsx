import stl from "./Post.module.css";

import React from "react";

type PostType ={
    message:string
    likeCount:number
}

export const Post = (props:PostType) => {
    return (
        <div className={stl.posts}>
            <div className={stl.item}>
                <img className={stl.ava}
                     src="https://s2.desu-usergeneratedcontent.xyz/g/image/1504/46/1504460092425.jpg" alt=""/>
                {props.message}
                <div>
                    <span>like  { props.likeCount}</span>
                </div>

            </div>
        </div>
    )
}