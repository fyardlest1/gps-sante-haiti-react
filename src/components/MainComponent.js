import React, { Component } from "react";
import NavbarFixed from "./Navbar";
import Home from "./HomeComponent";
import Directory from "./DirectoryComponent";
import About from "./AboutComponent";
import HospitalInfo from "./HospitalInfoComponent";
import Contact from "./ContactComponent";
import Login from "./SigninInComponent";
import Footer from "./Footer";
import PasswordReset from "./PasswordResetComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import {
  postComment,
  fetchHospitals,
  fetchComments,
  fetchPromotions,
  fetchPartners,
  postFeedback,
} from "../redux/ActionCreators";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = (state) => {
  return {
    hospitals: state.hospitals,
    comments: state.comments,
    partners: state.partners,
    promotions: state.promotions,
  };
};

const mapDispatchToProps = {
  postComment: (hospitalId, rating, author, text) =>
    postComment(hospitalId, rating, author, text),
  fetchHospitals: () => fetchHospitals(),
  resetFeedbackForm: () => actions.reset("feedbackForm"),
  fetchComments: () => fetchComments(),
  fetchPromotions: () => fetchPromotions(),
  fetchPartners: () => fetchPartners(),
  postFeedback: (feedback) => postFeedback(feedback),
};

class Main extends Component {
  componentDidMount() {
    this.props.fetchHospitals();
    this.props.fetchComments();
    this.props.fetchPromotions();
    this.props.fetchPartners();

  }

  render() {
    const HomePage = () => {
      return (
        <Home
          hospital={
            this.props.hospitals.hospitals.filter(
              (hospital) => hospital.featured
            )[0]
          }
          hospitalsLoading={this.props.hospitals.isLoading}
          hospitalsErrMess={this.props.hospitals.errMess}
          promotion={
            this.props.promotions.promotions.filter(
              (promotion) => promotion.featured
            )[0]
          }
          promotionLoading={this.props.promotions.isLoading}
          promotionErrMess={this.props.promotions.errMess}
          partner={
            this.props.partners.partners.filter(
              (partner) => partner.featured
            )[0]
          }
          partnerLoading={this.props.partners.isLoading}
          partnerErrMess={this.props.partners.errMess}
        />
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
          comments={this.props.comments.comments.filter(
            (comment) => comment.hospitalId === +match.params.hospitalId
          )}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
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
          <Route
            exact
            path='/contactus'
            render={() => (
              <Contact
                resetFeedbackForm={this.props.resetFeedbackForm}
                postFeedback={this.props.postFeedback}
              />
            )}
          />
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
