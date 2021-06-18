import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, PostType, RootStateType, StoreType} from "../../redux/store";
import {MyPostsContainer} from "./Myposts/MypostContainer";
import {allTypeReduce} from "../../redux/redux-store";


export type ProfilePageType = {
    // posts: Array<PostType>
    dispatch:(action:ActionType)=>void
    // mes:string
    store: allTypeReduce



}

export const Profile = (props:ProfilePageType) => {
    return (
        <div>
            <ProfileInfo description="description"/>
            <MyPostsContainer
                // posts={props.store.getS}
                dispatch={props.dispatch}
                // mes={props.mes}
                store={props.store} />
        </div>
    )
}