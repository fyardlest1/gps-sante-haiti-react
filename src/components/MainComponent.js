import React, { Component } from 'react';
import NavbarFixed from './Navbar';
import Footer from './Footer';
import HomeComponent from './HomeComponent';
//import About from './AboutComponent';
//import Services from './ServicesComponent';
//import Contact from './ContactComponent';
//import Add from './AddComponent';
//import Shop from './ShopComponent';


class MainComponent extends Component {
    render() {
        return (
            <div className="App">
                <NavbarFixed />
                <HomeComponent />
                <Footer />
            </div>
        );
    }
}

export default MainComponent;
