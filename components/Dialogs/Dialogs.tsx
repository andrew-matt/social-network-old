import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message,} from './Message/Message';
import {DialogPageType} from "../../Redux/State";

export type DialogsPropsType = {
    state: DialogPageType
    updateNewMessageText: (newText: string) => void
    addMessage: () => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogElements = props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messageElements = props.state.messages.map(m => <Message key={m.id} message={m.message}/>);

    const addMessage = () => {
       props.addMessage()
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div><textarea onChange={onMessageChange} value={props.state.newMessageText}></textarea></div>
                <div><button onClick={addMessage}>Add message</button></div>
            </div>
        </div>
    )
}
