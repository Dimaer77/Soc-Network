import { ActionType, PostType, ProfilePageType } from "./store";

let initialState: ProfilePageType = {
  posts: [
    { id: 1, message: "Asdfs", likesCount: 11 },
    { id: 2, message: "Bsdfs", likesCount: 131 },
    { id: 3, message: "Csdfs", likesCount: 11 },
    { id: 4, message: "Dsdf", likesCount: 13234231 },
  ],
  newPostText: "posttext",
};

export const profileReducer = (
  state: ProfilePageType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "ADD-POST":
      let newPost: PostType = {
        id: 5,
        message: state.newPostText,
        likesCount: 100,
      };
      state.posts.push(newPost);
      state.newPostText = " ";
      return { ...state };
    case "UPDATE-NEW-POST-TEXT":
      state.newPostText = action.newText;
      return { ...state };
  }
  return state;
};

export let addPostAC = () => {
  return {
    type: "ADD-POST",
  } as const;
};
export let updateNewPostTextAC = (newText: string) => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    newText: newText,
  } as const;
};
