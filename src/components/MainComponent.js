import React, { Component } from 'react';
import NavbarFixed from './Navbar';
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Directory from './DirectoryComponent';
import HospitalInfo from "./HospitalInfoComponent";
import Contact from "./ContactComponent";
import SignIn from './SigninInComponent';
import Footer from "./Footer";
import HomeFoot from "./HomeFootCard";
import { HOSPITALS } from "../shared/hospitals";
import { COMMENTS } from "../shared/comments";
import { PARTNERS } from "../shared/partners";
import { PROMOTIONS } from "../shared/promotions";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hospitals: HOSPITALS,
          comments: COMMENTS,
          partners: PARTNERS,
          promotions: PROMOTIONS,
        };
    }

    render() {
      const HomePage = () => {
        return (
          <div>
            <Home
                // hospital={this.state.hospitals.filter(hospital => hospital.featured)[0]}
                // promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                // partner={this.state.partners.filter(partner => partner.featured)[0]}
            />
            <HomeFoot
                hospital={this.state.hospitals.filter(hospital => hospital.featured)[0]}
                promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                partner={this.state.partners.filter(partner => partner.featured)[0]}
            />
            </div>
          );
      };

      const HospitalWithId = ({match}) => {
            return (
                <HospitalInfo 
                    hospital={this.state.hospitals.filter(hospital => hospital.id === 
                      +match.params.hospitalId)[0]}
                    comments={this.state.comments.filter(comment => comment.hospitalId === 
                      +match.params.hospitalId)}
                />
            );
        };

        return (
          <div>
            <NavbarFixed />
            <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/directory' render={() => <Directory hospitals={this.state.hospitals} />}  />
              <Route path='/directory/:hospitalId' component={HospitalWithId} />
              <Route exact path='/contactus' component={Contact} />
              <Route exact path='/login' component={SignIn} />
              <Redirect to='/home' />
            </Switch>
            <Footer />
          </div>
        );
    };
}

export default Main;


