import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MongoREST } from './components/MongoREST.tsx';
import { MongoPie } from './components/Pie.tsx';
import { MongoDou } from './components/Doughnut.tsx';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MongoREST />} />
          <Route path="/pie" element={<MongoPie />} />
          <Route path="/dou" element={<MongoDou />} />
        </Routes>
      </Router >

    </>
  );
}

export default App;