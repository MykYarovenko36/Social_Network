import React from 'react';
import s from './Friends.module.css';
import Friendsprofile from "./Friendsprofile/Friendsprofile"


const Friends = (props) => {
   
    let Friends = props.state.profile.map(f => <Friendsprofile name={f.name} id={f.id} profileFoto={f.avatar}/>);
    return (
        <div className={s.friends}>
            {Friends}
            

        </div>
    )
}



export default Friends;