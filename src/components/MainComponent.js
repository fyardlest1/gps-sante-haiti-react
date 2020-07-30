import React, { Component } from 'react';
import NavbarFixed from './Navbar';
import Footer from './Footer';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import HospitalInfo from "./HospitalInfoComponent";
import { HOSPITALS } from "../shared/hospitals";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hospitals: HOSPITALS,
          selectedHospital: null,
        };
    }

    // Event handler for selected hospital
    onSelectHospital(hospitalId) {
        this.setState({selectedHospital: hospitalId});
    }

    render() {
        return (
          <div>
            <NavbarFixed />
            <Directory
              hospitals={this.state.hospitals}
              onClick={(hospitalId) => this.onSelectHospital(hospitalId)}
            />
            <HospitalInfo
              hospital={
                this.state.hospitals.filter(
                  (campsite) => campsite.id === this.state.selectedHospital
                )[0]
              }
            />
            <Footer />
          </div>
        );
    };
}

export default Main;


