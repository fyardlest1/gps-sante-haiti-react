import React, { Component } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Col,
  Row,
} from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";
import { Link } from 'react-router-dom';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      phoneNum: "",
      email: "",
      subject: "Select ...",
      agree: false,
      contactType: "By Phone",
      feedback: "",
      touched: {
        firstName: false,
        lastName: false,
        phoneNum: false,
        email: false,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.postFeedback(values);
    this.props.resetFeedbackForm(values);
  }

  render() {

    return (
      <React.Fragment>
        <section id='contactSection'>
          <div className='container'>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to='/home'>Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Contact Us</BreadcrumbItem>
            </Breadcrumb>
            <div className='row'>
              {/* CONTACT FORM SECTION */}
              <div className='col-lg-8 py-3'>
                <div className='text-center'>
                  <h3 className='getInTouch'>Get In Touch</h3>
                  <p className='contactUsSection mb-4'>
                    Please contact us if you need any further information
                  </p>
                </div>
                <div className='col'>
                  {/* ASKING FOR NAME */}
                  <Form model="feedbackForm" onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className='form-group'>
                      <Label htmlFor='firstName' sm={2}>
                        First Name
                      </Label>
                      <Col sm={10}>
                        <Control.text
                          model='.firstName'
                          className='form-control'
                          id='firstName'
                          name='firstName'
                          placeholder='First Name'
                          validators={{
                            required,
                            minLength: minLength(2),
                            maxLength: maxLength(15),
                          }}
                        />
                        <Errors
                          className='text-danger'
                          model='.firstName'
                          show='touched'
                          component='div'
                          messages={{
                            required: "Required",
                            minLength: "Must be at least 2 characters",
                            maxLength: "Must be 15 characters or less",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className='form-group'>
                      <Label htmlFor='lastName' sm={2}>
                        Last Name
                      </Label>
                      <Col sm={10}>
                        <Control.text
                          model='.lastName'
                          className='form-control'
                          id='lastName'
                          name='lastName'
                          placeholder='Last Name'
                          validators={{
                            required,
                            minLength: minLength(2),
                            maxLength: maxLength(15),
                          }}
                        />
                        <Errors
                          className='text-danger'
                          model='.lastName'
                          show='touched'
                          component='div'
                          messages={{
                            required: "Required",
                            minLength: "Must be at least 2 characters",
                            maxLength: "Must be 15 characters or less",
                          }}
                        />
                      </Col>
                    </Row>

                    {/* ASKING FOR PHONE # */}
                    <Row className='form-group'>
                      <Label htmlFor='phoneNum' sm={2}>
                        Phone #
                      </Label>
                      <Col sm={10}>
                        <Control.text
                          model='.phoneNum'
                          className='form-control'
                          id='phoneNum'
                          name='phoneNum'
                          placeholder='Phone number'
                          validators={{
                            required,
                            minLength: minLength(8),
                            maxLength: maxLength(15),
                            isNumber,
                          }}
                        />
                        <Errors
                          className='text-danger'
                          model='.phoneNum'
                          show='touched'
                          component='div'
                          messages={{
                            required: "Required",
                            minLength: "Must be at least 8 numbers",
                            maxLength: "Must be 15 numbers or less",
                            isNumber: "Must be a number",
                          }}
                        />
                      </Col>
                    </Row>

                    {/* ASKING FOR EMAIL */}
                    <Row className='form-group'>
                      <Label htmlFor='email' sm={2}>
                        Your Email
                      </Label>
                      <Col sm={10}>
                        <Control.text
                          model='.email'
                          className='form-control'
                          id='email'
                          name='email'
                          placeholder='Email'
                          validators={{
                            required,
                            validEmail,
                          }}
                        />
                        <Errors
                          className='text-danger'
                          model='.email'
                          show='touched'
                          component='div'
                          messages={{
                            required: "Required",
                            validEmail: "Invalid email address",
                          }}
                        />
                      </Col>
                    </Row>

                    {/* SELECTION A SUBJECT */}
                    <Row className='form-group'>
                      <Label htmlFor='subject' sm={2}>
                        Subject
                      </Label>
                      <Col>
                        <Control.select
                          model='.subject'
                          className='form-control'
                          name='subject'
                        >
                          <option>Select ...</option>
                          <option>Informations</option>
                          <option>Pour Ajouter Votre Pub</option>
                          <option>Suggestions</option>
                          <option>Autres</option>
                        </Control.select>
                      </Col>
                    </Row>
                    <Row className='form-group'>
                      <Col md={{ size: 6, offset: 2 }}>
                        <div className='form-check'>
                          <Label check>
                            <Control.checkbox
                              model='.agree'
                              className='form-check-input'
                              name='agree'
                            />{" "}
                            <strong>May we contact you?</strong>
                          </Label>
                        </div>
                      </Col>
                      <Col md={4}>
                        <Control.select
                          model='.contactType'
                          className='form-control'
                          name='contactType'
                        >
                          <option>By Phone</option>
                          <option>By Email</option>
                        </Control.select>
                      </Col>
                    </Row>

                    {/* USER MESSAGE */}
                    <Row className='form-group'>
                      <Label htmlFor='feedback' sm={2}>
                        {" "}
                        Message{" "}
                      </Label>
                      <Col md={10}>
                        <Control.textarea
                          model='.feedback'
                          className='form-control'
                          id='feedback'
                          name='feedback'
                          rows='7'
                        />
                      </Col>
                    </Row>

                    {/* FORM SUBMIT BUTTON */}
                    <Row className='form-group'>
                      <Col md={{ size: 10, offset: 2 }}>
                        <Button type='submit' color='info'>
                          Submit Form
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>

              {/* CAONTACT CARD */}
              <div className='col-4 align-self-center py-4 text-center bg-light'>
                <div className='row'>
                  <div className='col'>
                    <h3 className='contactUsPart'>Contact Us</h3>
                    <p>
                      <i className='fa fa-map' />{" "}
                      <span>298, Monseigneur Guilloux</span>
                    </p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <p>
                      <i className='fa fa-phone' />{" "}
                      <span>+1 509 - 37 08 05 65</span>
                    </p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <p>
                      <i className='fa fa-envelope-open' />{" "}
                      <span>fyardlest@fyardlest.net</span>
                    </p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    {/*Facebook*/}
                    <a
                      className='btn-floating btn-lg btn-fb'
                      type='button'
                      role='button'
                      href='http://facebook.com/'
                    >
                      <i className='fa fa-facebook-f' />
                    </a>
                    {/*Twitter*/}
                    <a
                      className='btn-floating btn-lg btn-tw'
                      type='button'
                      role='button'
                      href='http://twitter.com/'
                    >
                      <i className='fa fa-twitter' />
                    </a>
                    {/*Google +*/}
                    <a
                      className='btn-floating btn-lg btn-gplus'
                      type='button'
                      role='button'
                      href='http://google.com/'
                    >
                      <i className='fa fa-google-plus' />
                    </a>
                    {/*Linkedin*/}
                    <a
                      className='btn-floating btn-lg btn-li'
                      type='button'
                      role='button'
                      href='http://linkedin.com/'
                    >
                      <i className='fa fa-linkedin' />
                    </a>
                    {/*Instagram*/}
                    <a
                      className='btn-floating btn-lg btn-ins'
                      type='button'
                      role='button'
                      href='http://instagram.com/'
                    >
                      <i className='fa fa-instagram' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* THE GOOGLE MAP SECTION 
                <section id="findUs">
                    <div className="container">
                        <div className="row">
                        <div className="col text-center py-4">
                            <h3>Find Us</h3>
                        </div>
                        </div>
                    </div>
                    <div id="map">
                    </div>
                </section>*/}
      </React.Fragment>
    );
  }
}

export default Contact;