import './App.css';
import './connection/upload.js'
function App() {
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MongoREST } from './components/MongoREST.tsx';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://localhost:4000/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login to Spotify
        </a>
        <a 
          className="App-link"
          target="upload()"
          rel="noopener noreferrer"
        >
            Get a dump of the database</a>
    </header>
    </div >
  );
}

export default App;