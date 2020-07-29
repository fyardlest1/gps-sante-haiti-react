import React, { Component } from 'react';
import NavbarFixed from "./components/Navbar";
import Directory from "./components/DirectoryComponent";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import MainComponent from './components/MainComponent';
import { HOSPITALS } from './shared/hospitals';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hospitals: HOSPITALS
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <NavbarFixed />
          <Directory hospitals={this.state.hospitals}/>
          {/*<HomeComponent />*/}
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
