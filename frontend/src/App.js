import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MongoREST } from './components/MongoREST.tsx';
import { EyeIcon } from './components/EyeIcon.jsx';
import { SchemaSidebar } from './components/SchemaSidebar.jsx';
import { CollectionDashboard } from './components/CollectionDashboard.jsx';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MongoREST/>} />
          <Route path="/eye" element={<EyeIcon label="eye0" name="eye0" id="eye0"/>} /> {/* for testing EyeIcon */}
          <Route path="/schema" element={<CollectionDashboard/>} /> {/* for testing CollectionDashboard */}
        </Routes>
      </Router>

    </>
  );
}

export default App;