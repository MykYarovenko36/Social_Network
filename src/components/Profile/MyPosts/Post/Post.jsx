import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
 
  return (
    <div className={s.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyNMENU7VP9ZtjZUuuEc9LyWUghgNzrbJp2UL-C0GSczwmzCrQ&usqp=CAU' />
      {props.message}
      
          <div>
             <span>like {props.likesCount}</span>
       
          </div>
    </div>
  )

}

export default Post;