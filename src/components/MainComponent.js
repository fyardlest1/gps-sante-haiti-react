import React, { Component } from 'react';
import NavbarFixed from './Navbar';
import Home from "./HomeComponent";
import Directory from './DirectoryComponent';
import About from './AboutComponent';
import HospitalInfo from "./HospitalInfoComponent";
import Contact from "./ContactComponent";
import Login from './SigninInComponent';
import Footer from "./Footer";
import PasswordReset from './PasswordResetComponent';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import { addComment, fetchHospitals, fetchComments, fetchPromotions } from "../redux/ActionCreators";

const mapStateToProps = state => {
  return {
    hospitals: state.hospitals,
    comments: state.comments,
    partners: state.partners,
    promotions: state.promotions
  }
}

const mapDispatchToProps = {
  addComment: (hospitalId, rating, author, text) =>
    addComment(hospitalId, rating, author, text),
  fetchHospitals: () => (fetchHospitals()),
  resetFeedbackForm: () => (actions.reset('feedbackForm')),
  fetchComments: () => (fetchComments()),
  fetchPromotions: () => (fetchPromotions())
};

class Main extends Component {
  componentDidMount() {
    this.props.fetchHospitals();
    this.props.fetchComments();
    this.props.fetchPromotions();
  }

  render() {
    const HomePage = () => {
      return (
        <div>
          <Home
            hospital={
              this.props.hospitals.hospitals.filter(
                (hospital) => hospital.featured
              )[0]
            }
            hospitalsLoading={this.props.hospitals.isLoading}
            hospitalsErrMess={this.props.hospitals.errMess}
            promotion={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
            promotionLoading={this.props.promotions.isLoading}
            promotionErrMess={this.props.promotions.errMess}
            partner={
              this.props.partners.filter((partner) => partner.featured)[0]
            }
          />
          {/* <HomeFoot
            hospital={
              this.props.hospitals.hospitals.filter(
                (hospital) => hospital.featured
              )[0]
            }
            hospitalsLoading={this.props.hospitals.isLoading}
            hospitalsErrMess={this.props.hospitals.errMess}
            promotion={
              this.props.promotions.filter((promotion) => promotion.featured)[0]
            }
            partner={
              this.props.partners.filter((partner) => partner.featured)[0]
            }
          /> */}
        </div>
      );
    };

    const HospitalWithId = ({ match }) => {
      return (
        <HospitalInfo
          hospital={
            this.props.hospitals.hospitals.filter(
              (hospital) => hospital.id === +match.params.hospitalId
            )[0]
          }
          isLoading={this.props.hospitals.isLoading}
          errMess={this.props.hospitals.errMess}
          comments={this.props.comments.comments.filter(comment => comment.hospitalId === +match.params.hospitalId)}
          commentsErrMess={this.props.comments.errMess}
          addComment={this.props.addComment}
        />
      );
    };

    return (
      <div>
        <NavbarFixed />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route
            exact
            path='/directory'
            render={() => <Directory hospitals={this.props.hospitals} />}
          />
          <Route path='/directory/:hospitalId' component={HospitalWithId} />
          <Route
            exact
            path='/aboutus'
            render={() => <About partners={this.props.partners} />}
          />
          <Route exact path='/contactus' render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
          <Route exact path='/login' component={Login} />
          <Route path='/resetpassword' component={PasswordReset} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));