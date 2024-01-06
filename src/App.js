import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';

import { MainPage } from "./Elements/MainPage";
import { ForumPostList } from "./Elements/ForumPostList";
import { MediaPostList } from "./Elements/MediaPostList";
import { LinkPostList } from "./Elements/LinkPostList";
import { CreatePost } from "./Elements/CreatePost";

// Importáljuk a képeket
import homeIcon from './Elements/Icons/home.png';
import cameraIcon from './Elements/Icons/camera.png';
import bubbleIcon from './Elements/Icons/bubble.png';
import linkIcon from './Elements/Icons/link.png';
import pencilIcon from './Elements/Icons/pencil.png';

function App() {
  const iconSize = '1rem'; 

  return (
    <Router>
      <div id="main">
        {/* Az oldal tetején megjelenő navigációs sáv */}
        <nav className="navbar navbar-expand-lg navbar-light"
          style={{
            width: "100%",
            backgroundColor: "#ff7045"
          }}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={`/`} className="nav-link navbar-brand">
                <img src={homeIcon} alt="Home" className="icon" style={{ width: iconSize, height: iconSize }} />
                <span>Kezdő oldal</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/media`} className="nav-link">
                <img src={cameraIcon} alt="Media" className="icon" style={{ width: iconSize, height: iconSize }} />
                <span>Média tartalom</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/forum`} className="nav-link">
                <img src={bubbleIcon} alt="Forum" className="icon" style={{ width: iconSize, height: iconSize }} />
                <span>Fórum posztok</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/links`} className="nav-link">
                <img src={linkIcon} alt="Links" className="icon" style={{ width: iconSize, height: iconSize }} />
                <span>Link tartalom</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/publish`} className="nav-link">
                <img src={pencilIcon} alt="Publish" className="icon" style={{ width: iconSize, height: iconSize }} />
                <span>Poszt létrehozása</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
      <Route path="/*" element={<MainPage />}/>
        <Route path="/forum" element={<ForumPostList />} />
        <Route path="/media" element={<MediaPostList />} />
        <Route path="/links" element={<LinkPostList />} />
        <Route path="/publish" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;