import React from "react";
import { StoreType } from "../../redux/store";
import {
  sendMessageAC,
  updateNewMessageBodyAC,
} from "../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";

export type DialogsPageType = {
  store: StoreType;
};

// export const DialogsContainer = (props: DialogsPageType) => {
//   // const dialogsElement = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
//   // const messagesElement = props.dialogsPage.messages.map(mes => <Message message={mes.message}/>)

//   // const refElement = React.createRef<HTMLTextAreaElement>()

//   let onSendMessageClick = () => {
//     props.store.dispatch(sendMessageAC());
//     props.store.dispatch(updateNewMessageBodyAC(" "));
//   };
//   let onNewMessageChange = (mesValue: string) => {
//     props.store.dispatch(updateNewMessageBodyAC(mesValue));
//   };

//   return (
//     <Dialogs
//       updateNewMessageBody={onNewMessageChange}
//       sendMessage={onSendMessageClick}
//       dialogsPage={props.store.getState().dialogsPage}
//       // messages={props.store.getState().dialogsPage.messages}
//       // mesVal={props.store.getState().dialogsPage.newMessageBody}
//     />
//   );
// };
let mapStateToProps = (state: any) => {
  return { dialogsPage: state.dialogsPage };
};
let mapDispatchToProps = (dispatch: any) => {
  return {
    updateNewMessageBody: (mesValue: string) =>
      dispatch(updateNewMessageBodyAC(mesValue)),
    sendMessage: () => {
      dispatch(sendMessageAC());
      dispatch(updateNewMessageBodyAC(" "));
    },
  };
};

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
