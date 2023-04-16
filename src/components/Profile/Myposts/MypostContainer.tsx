import React from "react";
import { addPostAC, updateNewPostTextAC } from "../../../redux/profile-reducer";
import { MyPosts } from "./Mypost";
import { connect } from "react-redux";

export type ProfilePageType = {
  // posts: Array<PostType>
  // dispatch: (action: ActionType) => void;
  // mes: string
  // state: allTypeReduce;
};

// export const MyPostsContainer = (props: ProfilePageType) => {
//   // let postElements = props.state.profilePage.posts.map((post) => (
//   //   <Post key={post.id} message={post.message} likeCount={post.likesCount} />
//   // ));
//   // let newPostElement = React.createRef<HTMLTextAreaElement>();
//   const addPost = () => {
//     //@ts-ignore
//     props.store.dispatch(addPostCreator());
//   };

//   const onPostChange = (text: string) => {
//     let action = updateNewPostTextCreator(text);
//     //@ts-ignore
//     props.store.dispatch(action);
//   };
//   return (
//     <MyPosts
//       updateNewPostText={onPostChange}
//       profilePage={props.store.getState().profilePage}
//       addPost={addPost}
//     />
//   );
// };
let mapStateToProps = (state: any) => {
  return { profilePage: state.profilePage };
};
let mapDispatchToProps = (dispatch: any) => {
  return {
    updateNewPostText: (text: string) => dispatch(updateNewPostTextAC(text)),
    addPost: () => dispatch(addPostAC()),
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
