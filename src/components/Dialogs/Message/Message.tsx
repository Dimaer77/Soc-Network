import React from "react";
import stl from "../Dialogs.module.css";


type MessageType = {
    message: string
}

export const Message = (props: MessageType) => {
    return <div className={stl.message}>{props.message}</div>
}