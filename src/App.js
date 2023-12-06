import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/frofile/Profile';  
// import News from './components/New/New';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {  Route, Routes } from 'react-router-dom';
import Friends from './components/friends/friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';


function App(props) {

  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
          <Route path="/profile/*" element={<Profile />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            {/* <Route path="/News" element={<News store={props.store.getState().newsPage} />} /> */}
            <Route path="/Music" element={<Music />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/riends" element={<Friends />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
