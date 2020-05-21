import React from 'react';
import s from './Friends.module.css';
import Friendsprofile from "./Friendsprofile/Friendsprofile"


const Friends = (props) => {
    debugger
    let Friends = props.state.FriendsProfileList.map(f => <Friendsprofile key={f.id} name={f.name} id={f.id} profileFoto={f.avatar}/>);
               
     return (               
                     <div className={s.friends}>
                       {Friends}    
                    </div>
                       )
                                    
            };
       
    
export default Friends;