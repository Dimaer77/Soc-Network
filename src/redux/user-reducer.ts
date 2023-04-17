export type UserType = {
  name: string;
  id: number;
  status: string | null;
  uniqueUrlName: string | null;
  followed: boolean;
  photos: { small: string | null; large: string | null };
};
export type LocationType = { country: string; city: string };

export type UsersStateType = {
  users: Array<UserType> | null;
};
let initialState: UsersStateType = {
  users: null,
};
export const usersReducer = (
  state: UsersStateType | null = initialState,
  action: ActionsUsersType
): UsersStateType | null => {
  switch (action.type) {
    case "SET-USERS": {
      return { ...state, users: [...action.users] };
    }
    case "FOLLOW": {
      return {
        ...state,
        //@ts-ignore
        users: state.users.map((us) =>
          us.id === action.userId ? { ...us, followed: !us.followed } : us
        ),
      };
    }
    case "UNFOLLOW": {
      return {
        ...state,
        //@ts-ignore
        users: state.users.map((us) =>
          us.id === action.userId ? { ...us, followed: !us.followed } : us
        ),
      };
    }

    default:
      return state;
  }
};

export type ActionsUsersType = FollowACType | UnfollowACType | SetUsersACType;

export const followAC = (userId: number) => {
  return {
    type: "FOLLOW",
    userId,
  } as const;
};
export const unfollowAC = (userId: number) => {
  return {
    type: "UNFOLLOW",
    userId,
  } as const;
};
export const setUsersAC = (users: Array<UserType>) => {
  return {
    type: "SET-USERS",
    users,
  } as const;
};

export type FollowACType = ReturnType<typeof followAC>;
export type UnfollowACType = ReturnType<typeof unfollowAC>;
export type SetUsersACType = ReturnType<typeof setUsersAC>;
