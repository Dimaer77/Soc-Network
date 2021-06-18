import React, {ChangeEvent} from "react";
import stl from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionType,
    DialogType,
    MessageType,
    RootStateType,
} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {allTypeReduce} from "../../redux/redux-store";

export type DialogsPageType = {
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    mesVal: string

}

export const Dialogs = (props: DialogsPageType) => {
    const dialogsElement = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const messagesElement = props.messages.map(mes => <Message message={mes.message}/>)

    // const refElement = React.createRef<HTMLTextAreaElement>()

    let onSendMessageClick = ()=>{
      props.sendMessage()
    }
let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
      let mesValue =  e.target.value
    props.updateNewMessageBody(mesValue)
    // props.dispatch(updateNewMessageBodyAC(mesValue))

    }



    return (
        <div className={stl.dialogs}>
            <ul className={stl.dialogs_items}>
                {dialogsElement}
            </ul>
            <div><div className={stl.massages}>
                {messagesElement}
            </div>
                <div>
                <textarea
                    // ref={refElement}onNewMessageChange
                    value={props.mesVal}
                    onChange={onNewMessageChange}
                />
                    <button
                        onClick={onSendMessageClick} >add</button>
                </div></div>


        </div>

    )
}