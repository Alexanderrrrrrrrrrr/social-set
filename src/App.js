import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/frofile/Profile';  
import News from './components/New/New';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {  Route, Routes } from 'react-router-dom';
import Friends from './components/friends/friends';

function App(props) {

  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
          <Route path="/profile/*" element={<Profile 
          profilePage={props.state.profilePage} 
          dispatch={props.dispatch}
           />} />
            <Route path="/dialogs/*" element={<Dialogs state={props.state.messagesPage} />} />
            <Route path="/News" element={<News />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/riends" element={<Friends />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
