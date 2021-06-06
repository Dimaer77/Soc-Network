import React from "react";
import stl from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


const dialogsData = [
    {id: 1, name: "Dima"},
    {id: 2, name: "Fima"},
    {id: 3, name: "Hima"},
    {id: 4, name: "Nima"},
    {id: 5, name: "Kima"},
]
const messageData = [
    {id: 1, message: "asdasd"},
    {id: 2, message: "Fiasdasdma"},
    {id: 3, message: "Hima"},
    {id: 4, message: "Nimzxczxca"},
    {id: 5, message: "Kimzxczxa"},
]
const dialogsElement = dialogsData.map(dialog=>  <DialogItem name={dialog.name} id={dialog.id}/>)
const messagesElement = messageData.map(mes=> <Message message={mes.message}/>)

export const Dialogs = () => {
    return (
        <div className={stl.dialogs}>
            <ul className={stl.dialogs_items}>
                {dialogsElement}
            </ul>
            <div className={stl.massages}>
                {messagesElement}
            </div>

        </div>

    )
}