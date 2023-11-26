import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar';
import './App.css';



function App() {
  return (

    <div className="App">
      <nav className="App-header">
        <Navbar />
        <Header />
      </nav>
    </div>

  );
}

export default App;
