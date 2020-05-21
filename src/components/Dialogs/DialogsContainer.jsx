import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator, } from '../../redux/Dialogs-reducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';




let mapStateToProps = (state) =>{
    return { state : state.dialogsPage }
};
let mapDispatchToProps = (dispatch) =>{
    return {
         onSendMessageClick :() => {
             dispatch(sendMessageCreator())},
         onNewMessageChange : (e) => {
            let body = e.target.value;
            dispatch(updateNewMessageBodyCreator(body)) }}}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;