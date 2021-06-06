import {NavLink} from "react-router-dom";
import stl from "../Dialogs.module.css";
import React from "react";

type DialogType = {
    name: string
    id: number
}


export const DialogItem = (props: DialogType) => {
    const path = "/dialogs/" + props.id
    return (
        <li className={stl.item}>
            <NavLink to={path} activeClassName={stl.activeLink} className={stl.dialog}>
                {props.name}
            </NavLink>
        </li>
    )
}