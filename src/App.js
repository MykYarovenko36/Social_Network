import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import Friends from './components/Friends/Friends';


const App = (props) => {

  return (
    
      <div className='app-wrapper'>
     
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route /*exact*/ path='/Dialogs' render={ ()=> <Dialogs store={props.store}/> } />
          <Route path='/Profile'render={ ()=> <Profile profilepage={props.state.profilesPage} dispatch={props.dispatch}/> }  />
          <Route path='/Friends'render={ ()=> <Friends state={props.state.sidebar} /> }  />
        </div>


      </div>
    );
}

export default App;