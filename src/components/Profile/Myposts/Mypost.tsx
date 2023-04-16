import stl from "./Mypost.module.css";
import React, { LegacyRef, RefObject } from "react";
import { Post } from "./post/Post";
import { ProfilePageType } from "../../../redux/store";

export type ProfilePagePropsType = {
  addPost: () => void;
  updateNewPostText: (text: string) => void;
  profilePage: ProfilePageType;
};

export const MyPosts = (props: ProfilePagePropsType) => {
  console.log("eadas", props);

  let postElements = props.profilePage.posts.map((post) => (
    <Post key={post.id} message={post.message} likeCount={post.likesCount} />
  ));
  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    if (newPostElement.current) {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
    }
  };

  return (
    <div className={stl.myposts}>
      <h3>My Post</h3>
      <div>
        <textarea
          ref={newPostElement}
          value={props.profilePage.newPostText}
          onChange={onPostChange}
          className={stl.textArea}
        />
        <button onClick={onAddPost} className={stl.btn}>
          Send
        </button>
      </div>
      <div className={stl.posts}>{postElements}</div>
    </div>
  );
};
