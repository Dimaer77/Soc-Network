import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {
  ActionType,
  PostType,
  RootStateType,
  StoreType,
} from "../../redux/store";
import { MyPostsContainer } from "./Myposts/MypostContainer";

export type ProfilePageType = {};

export const Profile = (props: ProfilePageType) => {
  return (
    <div>
      <ProfileInfo description="description" />

      {
        //@ts-ignore
        <MyPostsContainer
        // posts={props.store.getS}
        // dispatch={props.dispatch}
        // mes={props.mes}
        // state={props.state}
        />
      }
    </div>
  );
};
