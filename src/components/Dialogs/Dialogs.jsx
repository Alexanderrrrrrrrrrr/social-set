import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogData.map((d) => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.massagesData.map((m) => <Message message={m.massage} />);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
                
            </div>

        </div>
        
    )
}
export default Dialogs;