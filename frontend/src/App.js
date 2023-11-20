import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MongoREST } from './components/MongoREST.tsx';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MongoREST/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;