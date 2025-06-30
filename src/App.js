import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import OurTeam from './pages/OurTeam';
import Footbar from './components/Footbar';
import OurStory from './pages/OurStory';

function App() {

  return (
    <div className="App">
      <BrowserRouter >
        <Navbar/>
        <div id="space"></div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/our_team" element={<OurTeam/>}/>
          <Route path="/our_story" element={<OurStory/>}/>
        </Routes>
        <Footbar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
