import React from 'react';
import { BrowserRouter } from "react-router-dom";
import NavbarFixed from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarFixed />
      <Footer />
    </div>
  );
}

export default App;
