import React from "react";
import s from "./style.module.css";
import { UserType } from "../../redux/user-reducer";
import fakeAvatar from "../../assets/image/fakeAvatar.png";
import axios from "axios";
type UsersPropsType = {
  users: Array<UserType>;
  setUsersPage: (users: Array<UserType>) => void;
  followUserHandler: (userId: number) => void;
  unFollowUserHandler: (userId: number) => void;
};

export class UsersClass extends React.Component {
  constructor(props: any) {
    super(props);
    //@ts-ignore
    const respons = axios.get(
      "https://social-network.samuraijs.com/api/1.0/users"
    );
    respons.then((state) => {
      console.log(state.data.items);
      //@ts-ignore
      this.props.setUsersPage(state.data.items);
    });
  }
  render() {
    return (
      <div>
        {/* <button onClick={this.getUsers}>get users</button> */}
        {
          //@ts-ignore
          this.props.users ? (
            //@ts-ignore
            this.props.users.map((u) => (
              <div key={u.id} className={s.userContainer}>
                <div className={s.imageBox}>
                  <img
                    className={s.avatar}
                    src={u.photos.small || fakeAvatar}
                    alt="img"
                  />
                  <button
                    onClick={() =>
                      u.followed
                        ? //@ts-ignore

                          this.props.unFollowUserHandler(u.id)
                        : //@ts-ignore

                          this.props.followUserHandler(u.id)
                    }
                  >
                    {u.followed ? "unfollow" : "follow"}
                  </button>
                </div>
                <div className={s.infoContainer}>
                  <div className={s.nameContainer}>
                    <span>{u.name}</span>
                    <span>{u.status || "none"}</span>
                  </div>
                  <div className={s.locationContainer}>
                    <span>{"u.location.city"}</span>
                    <span>{"u.location.country"}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Pochekai</div>
          )
        }
      </div>
    );
  }
}

const Users = (props: UsersPropsType) => {
  console.log(props.users);
  if (!props.users) {
    const respons = axios.get(
      "https://social-network.samuraijs.com/api/1.0/users"
    );
    respons.then((state) => {
      console.log(state.data.items);

      props.setUsersPage(state.data.items);
    });
  }
  return (
    <div>
      {props.users ? (
        props.users.map((u) => (
          <div key={u.id} className={s.userContainer}>
            <div className={s.imageBox}>
              <img
                className={s.avatar}
                src={u.photos.small || fakeAvatar}
                alt="img"
              />
              <button
                onClick={() =>
                  u.followed
                    ? props.unFollowUserHandler(u.id)
                    : props.followUserHandler(u.id)
                }
              >
                {u.followed ? "unfollow" : "follow"}
              </button>
            </div>
            <div className={s.infoContainer}>
              <div className={s.nameContainer}>
                <span>{u.name}</span>
                <span>{u.status || "none"}</span>
              </div>
              <div className={s.locationContainer}>
                <span>{"u.location.city"}</span>
                <span>{"u.location.country"}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>Pochekai</div>
      )}
    </div>
  );
};
export default Users;
