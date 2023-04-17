import React from "react";
import { NavLink } from "react-router-dom";
import stl from "./Navbar.module.css";
import { Profile } from "../Profile/Profile";

export const Navbar = () => {
  return (
    <nav className={stl.nav}>
      <li className={stl.item}>
        <NavLink
          className={stl.link}
          activeClassName={stl.activeLink}
          to="/Profile"
        >
          Profile
        </NavLink>
      </li>
      <li className={stl.item}>
        <NavLink
          className={stl.link}
          activeClassName={stl.activeLink}
          to="/Dialogs"
        >
          Messages
        </NavLink>
      </li>
      <li className={stl.item}>
        <NavLink
          className={stl.link}
          activeClassName={stl.activeLink}
          to="/News"
        >
          News
        </NavLink>
      </li>
      <li className={stl.item}>
        <NavLink
          className={stl.link}
          activeClassName={stl.activeLink}
          to="/Users"
        >
          Users
        </NavLink>
      </li>
      <li className={stl.item}>
        <NavLink
          className={stl.link}
          activeClassName={stl.activeLink}
          to="/Music"
        >
          Music
        </NavLink>
      </li>
      <li className={stl.item}>
        <NavLink
          className={stl.link}
          activeClassName={stl.activeLink}
          to="/Settings"
        >
          Settings
        </NavLink>
      </li>
      <li className={stl.item}>
        <NavLink
          className={stl.link}
          activeClassName={stl.activeLink}
          to="/Friends"
        >
          Friends
        </NavLink>
      </li>
    </nav>
  );
};
