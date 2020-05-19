import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {updateNewMessageBodyCreator,sendMessageCreator,} from '../../redux/Dialogs-reducer'





   
    const Dialogs = (props) => {

        let state = props.store.getState().dialogsPage;
    
        let dialogsElements = state.dialogs.map( d => <DialogsItem name={d.name} id={d.id} />  );
        let messagesElements = state.messages.map( m => <Message message={m.message} /> );
        let newMessageBody = state.newMessageBody;
    
        let onSendMessageClick = () => {
            props.store.dispatch(sendMessageCreator());
        }
    
        let onNewMessageChange = (e) => {
            let body = e.target.value;
            props.store.dispatch(updateNewMessageBodyCreator(body));
        }
    
    

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
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></input></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>         
                    
                </div>
        </div>
        </div>
    )
}


export default Dialogs;