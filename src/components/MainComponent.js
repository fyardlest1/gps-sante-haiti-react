import React, { Component } from 'react';
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
            <Navbar dark color='primary'>
              <div className='container'>
                <NavbarBrand href='/'>NuCamp</NavbarBrand>
              </div>
            </Navbar>
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
          </div>
        );
    };
}

export default Main;


