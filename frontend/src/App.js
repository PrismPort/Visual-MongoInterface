import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DevSidebar } from './components/DevSidebar/DevSidebar';


// Import your components
import { SpotifyTokenExchange } from './components/DevSidebar/SpotifyTokenExchange';



const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DevSidebar/>} />
          <Route path="/spotify-token-exchange" element={<SpotifyTokenExchange />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
