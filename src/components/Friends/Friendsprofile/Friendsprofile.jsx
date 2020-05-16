import React from 'react';
import s from './Friendsprofile.module.css';
import { NavLink } from 'react-router-dom';



const Friendsprofile = (props) => {
   
   let path = "/friends/" + props.id
   return (

   <NavLink to={path}>
   <div className={s.Friendprofile}>

         <div>
            <img src={props.profileFoto} />
         </div>
         <div>{props.name}</div>
      </div>
      </NavLink>
   )
}



export default Friendsprofile;