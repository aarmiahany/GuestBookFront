import React from 'react';
import './App.css';
import Navbar from './components/navbar'; 
import Layout from './layout';
import axios from 'axios';

// set axios defaults
axios.defaults.baseURL = "http://localhost:5000";

function App() {
  return (
    <div className="App">
      { /* Navbar component */}
      <Navbar />
      { /* layout Component */}
      <Layout />
      { /* Footer Component */}
    </div>
  );
}

export default App;
