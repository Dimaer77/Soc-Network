import React, { ChangeEvent } from "react";
import stl from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { DialogsPageType } from "../../redux/store";

export type DialogsPagePropsType = {
  updateNewMessageBody: (body: string) => void;
  sendMessage: () => void;
  dialogsPage: DialogsPageType;
};

export const Dialogs = (props: DialogsPagePropsType) => {
  const dialogsElement = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  const messagesElement = props.dialogsPage.messages.map((mes) => (
    <Message message={mes.message} />
  ));

  // const refElement = React.createRef<HTMLTextAreaElement>()

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log("nu i");

    let mesValue = e.target.value;
    props.updateNewMessageBody(mesValue);
    // props.dispatch(updateNewMessageBodyAC(mesValue))
  };
  //@ts-ignore
  console.log("poops", props);

  return (
    <div className={stl.dialogs}>
      <ul className={stl.dialogs_items}>{dialogsElement}</ul>
      <div>
        <div className={stl.massages}>{messagesElement}</div>
        <div>
          <textarea
            value={props.dialogsPage.newMessageBody}
            onChange={onNewMessageChange}
          />
          <button onClick={onSendMessageClick}>add</button>
        </div>
      </div>
    </div>
  );
};
