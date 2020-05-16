import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator,uppdateNewPostTextActionCreator} from "./../../../redux/state"


const MyPosts = (props) => {

  
  let postsElement = props.state.posts.map( p => <Post message={p.message} id={p.id}  likesCount={p.likescount} />);
  
  
  let newPostElement = React.createRef();
  let addPost =() =>{
    props.dispatch(addPostActionCreator());
  };
  
  let onPostChange = () =>{
    let text = newPostElement.current.value;
    //props.dispatch({type: "UPDATE-NEW-POST-TEXT",text : text})
    let action = uppdateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={s.postsBlock}>
     <h3> My posts </h3>
      <div>
        <div>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.state.newPostText} />
        </div>
        <div>
        <button onClick={addPost}>Add post</button>
    </div>
      </div>
      <div className={s.posts}>
     
         { postsElement } 
        
      </div>
    </div>
  )

}

export default MyPosts;