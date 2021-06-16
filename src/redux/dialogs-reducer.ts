import {ActionType, DialogsPageType, MessageType} from "./store";
let initialState = {
    dialogs: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Fima"},
        {id: 3, name: "Hima"},
        {id: 4, name: "Nima"},
        {id: 5, name: "Kima"},
    ],
    messages: [
        {id: 1, message: "asdasd"},
        {id: 2, message: "Fiasdasdma"},
        {id: 3, message: "Hima"},
        {id: 4, message: "Nimzxczxca"},
        {id: 5, message: "Kimzxczxa"},
    ],
    newMessageBody: "New Message"

}

export const dialogsReducer = (state: DialogsPageType= initialState, action: ActionType) => {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.mesBody
            break;
        case "SEND-MESSAGE":
            let mesBody = state.newMessageBody;
            let newMess: MessageType = {
                id: 5,
                message: mesBody,
            }
            state.messages.push(newMess)
            break;
    }
    return state
}
export let updateNewMessageBodyAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        mesBody: newText
    } as const
}
export let sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE"
    } as const
};