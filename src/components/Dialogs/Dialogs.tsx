import React from "react";
import stl from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType, RootStateType} from "../../redux/state";

export type DialogsPageType ={
    dialogs:Array<DialogType>
    messages:Array<MessageType>

}

export const Dialogs = (props:DialogsPageType) => {

    const refElemetn = React.createRef<HTMLTextAreaElement>()
    const addMessage = ()=>{
        alert(refElemetn.current?.value)
    }

    const dialogsElement = props.dialogs.map(dialog=>  <DialogItem name={dialog.name} id={dialog.id}/>)
        // dialogsData.map(dialog=>  <DialogItem name={dialog.name} id={dialog.id}/>)
    const messagesElement = props.messages.map(mes=> <Message message={mes.message}/>)

    return (
        <div className={stl.dialogs}>
            <ul className={stl.dialogs_items}>
                {dialogsElement}
            </ul>
            <div className={stl.massages}>
                {messagesElement}
            </div>
            <div>
                <textarea ref={refElemetn}></textarea>
                <button onClick={addMessage}>add</button>
            </div>

        </div>

    )
}