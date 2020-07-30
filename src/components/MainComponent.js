import React, { Component } from 'react';
import NavbarFixed from './Navbar';
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from './Footer';
import Directory from './DirectoryComponent';
import HospitalInfo from "./HospitalInfoComponent";
import { HOSPITALS } from "../shared/hospitals";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hospitals: HOSPITALS,
        };
    }

    render() {

      const HomePage = () => {
        return <Home />;
      };

        return (
          <div>
            <NavbarFixed />
            <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/directory' render={() => <Directory hospitals={this.state.hospitals} />}  />
            </Switch>
            <Footer />
          </div>
        );
    };
}

export default Main;


