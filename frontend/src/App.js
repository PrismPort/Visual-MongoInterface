import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MongoREST } from './components/MongoREST.tsx';
import { EyeIcon } from './components/EyeIcon.jsx';
import { SchemaSidebar } from './components/SchemaSidebar.jsx';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MongoREST/>} />
          <Route path="/eye" element={<EyeIcon label="eye0" name="eye0" id="eye0"/>} /> {/* for testing EyeIcon */}
          <Route path="/schema" element={<SchemaSidebar/>} /> {/* for testing SchemaSidebar */}
        </Routes>
      </Router>

    </>
  );
}

export default App;