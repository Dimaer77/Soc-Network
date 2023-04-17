import { connect } from "react-redux";
import Users, { UsersClass } from "./Users";
import { UserType, followAC, setUsersAC } from "../../redux/user-reducer";
import { allTypeReduce } from "../../redux/redux-store";
import { Dispatch } from "redux";

let mapStateToProps = (state: allTypeReduce) => {
  return { users: state.usersPage?.users };
};
let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUsersPage: (users: Array<UserType>) => dispatch(setUsersAC(users)),
    followUserHandler: (userId: number) => dispatch(followAC(userId)),
    unFollowUserHandler: (userId: number) => dispatch(followAC(userId)),
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersClass);
