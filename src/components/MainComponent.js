import React, { Component } from 'react';
import NavbarFixed from './Navbar';
import Home from "./HomeComponent";
import Directory from './DirectoryComponent';
import About from './AboutComponent';
import HospitalInfo from "./HospitalInfoComponent";
import Contact from "./ContactComponent";
import Login from './SigninInComponent';
import Footer from "./Footer";
import HomeFoot from "./HomeFootCard";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    hospitals: state.hospitals,
    comments: state.comments,
    partners: state.partners,
    promotions: state.promotions
  }
}

class Main extends Component {

    render() {
      const HomePage = () => {
        return (
          <div>
            <Home
                // hospital={this.props.hospitals.filter(hospital => hospital.featured)[0]}
                // promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
                // partner={this.props.partners.filter(partner => partner.featured)[0]}
            />
            <HomeFoot
                hospital={this.props.hospitals.filter(hospital => hospital.featured)[0]}
                promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
                partner={this.props.partners.filter(partner => partner.featured)[0]}
            />
            </div>
          );
      };

      const HospitalWithId = ({match}) => {
            return (
                <HospitalInfo 
                    hospital={this.props.hospitals.filter(hospital => hospital.id === 
                      +match.params.hospitalId)[0]}
                    comments={this.props.comments.filter(comment => comment.hospitalId === 
                      +match.params.hospitalId)}
                />
            );
        };

        return (
          <div>
            <NavbarFixed />
            <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/directory' render={() => <Directory hospitals={this.props.hospitals} />}  />
              <Route path='/directory/:hospitalId' component={HospitalWithId} />
              <Route exact path='/aboutus' render={() => <About partners={this.props.partners} />} />
              <Route exact path='/contactus' component={Contact} />
              <Route exact path='/login' component={Login} />
              <Redirect to='/home' />
            </Switch>
            <Footer />
          </div>
        );
    };
}

export default withRouter(connect(mapStateToProps)(Main));


