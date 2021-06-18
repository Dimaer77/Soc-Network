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
import {Dialogs} from "./Dialogs";

export type DialogsPageType = {
    store:allTypeReduce
    dispatch: (action: ActionType) => void


}

export const DialogsContainer = (props: DialogsPageType) => {
    // const dialogsElement = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    // const messagesElement = props.dialogsPage.messages.map(mes => <Message message={mes.message}/>)

    // const refElement = React.createRef<HTMLTextAreaElement>()

    let onSendMessageClick = ()=>{
        props.dispatch(sendMessageAC())
        props.dispatch(updateNewMessageBodyAC(" "))
    }
let onNewMessageChange = (mesValue:string)=>{
    props.dispatch(updateNewMessageBodyAC(mesValue))

    }



    return (
       <Dialogs updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogs={props.store.dialogsPage.dialogs}
                messages={props.store.dialogsPage.messages}
                mesVal={props.store.dialogsPage.newMessageBody}
       />

    )
}