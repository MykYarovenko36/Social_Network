import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';






   
    const Dialogs = (props) => {

    
        let dialogsElements = props.state.dialogs.map( d => <DialogsItem key={d.id} name={d.name} id={d.id} />  );
        let messagesElements = props.state.messages.map( m => <Message key={m.id} message={m.message} /> );
        let newMessageBody = props.state.newMessageBody;
    
    
    

    return (
        <div className={s.dialogs_wrapper}>

            <div className={s.profile}>
                {dialogsElements}
            </div>
            <div className={s.messageDialogs}>

                <div className={s.message}>
                    {messagesElements}</div>
                <div className={s.newMessage}>
                
                  <div className={s.inputMessage}> <input value={newMessageBody}
                                   onChange={props.onNewMessageChange}
                                   placeholder='Enter your message'></input></div>
                    <div><button onClick={props.onSendMessageClick}>Send</button></div>         
                    
                </div>
        </div>
        </div>
    )
}


export default Dialogs;