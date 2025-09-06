import './App.css';
import { HashRouter , Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import OurTeam from './pages/OurTeam';
import Footbar from './components/Footbar';
import OurStory from './pages/OurStory';

function App() {

  const [isMenuBarOpen, setMenuBar] = useState(false);
  const handleClickAnyWhere = () => {
      setMenuBar(false);
  }

  return (
    <div className="App">
      <HashRouter>
        <Navbar setMenuBar={setMenuBar} isMenuBarOpen={isMenuBarOpen}/>
        <div id="space"></div>
        <Routes>
          <Route path="/" element={<Home handleClickAnyWhere={handleClickAnyWhere}/>} />
          <Route path="/our_team" element={<OurTeam handleClickAnyWhere={handleClickAnyWhere}/>} />
          <Route path="/our_story" element={<OurStory handleClickAnyWhere={handleClickAnyWhere}/>} />
        </Routes>
        <Footbar handleClickAnyWhere={handleClickAnyWhere}/>
      </HashRouter>
    </div>
  );
}

export default App;
