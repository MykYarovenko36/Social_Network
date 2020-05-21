import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/Profile-reducer"
import MyPosts from './MyPosts';
import {connect} from "react-redux";



  let mapStateToDispatch = (dispatch) =>{ return {
      updateNewPostText: (text) => {
        let action = updateNewPostTextActionCreator(text);
        dispatch(action)},
       addPost : () => {dispatch(addPostActionCreator())}   }}
       
  let mapStateToProps = (state) =>{ 
    return { 
      newPostText: state.profilePage.newPostText,
       posts: state.profilePage.posts} }
    
  
  
  const MyPostsContainer = connect(mapStateToProps,mapStateToDispatch)(MyPosts);
  

export default MyPostsContainer