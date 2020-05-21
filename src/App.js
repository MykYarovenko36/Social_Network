import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import FriendsContainer from './components/Friends/FriendsContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = () => {
  return (
    
      <div className='app-wrapper'>
     
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route /*exact*/ path='/Dialogs' render={ ()=> <DialogsContainer/> } />
          <Route path='/Profile'render={ ()=> <Profile /> } />
          <Route path='/Friends'render={ ()=> <FriendsContainer /> } />
        </div>


      </div>
    );
}

export default App;