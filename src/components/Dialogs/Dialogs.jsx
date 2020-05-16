import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';



const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />);

    let messagesElement = props.state.messages.map(m => <Message message={m.message} />);
    

    return (
        <div className={s.dialogs_wrapper}>

            <div className={s.profile}>
                {dialogsElements}
            </div>
            <div className={s.messageDialogs}>

                <div className={s.message}>{messagesElement}</div>
                <div className={s.newMessage}>
                    <button>Send</button>
                    <textarea></textarea>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;