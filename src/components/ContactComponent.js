import React, { Component } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback,
} from "reactstrap";
import { Link } from 'react-router-dom';

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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate(firstName, lastName, phoneNum, email) {

        const errors = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: ''
        };

        if (this.state.touched.firstName) {
            if (firstName.length < 2) {
                errors.firstName = 'First name must be at least 2 characters.';
            } else if (firstName.length > 15) {
                errors.firstName = 'First name must be 15 or less characters.';
            }
        }

        if (this.state.touched.lastName) {
            if (lastName.length < 2) {
                errors.lastName = 'Last name must be at least 2 characters.';
            } else if (lastName.length > 15) {
                errors.lastName = 'Last name must be 15 or less characters.';
            }
        }

        const reg = /^\d+$/;
        if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
            errors.phoneNum = 'The phone number should contain only numbers.';
        }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = 'Email should contain a @';
        }

        return errors;
    }

  handleBlur = (field) => () => {
      this.setState({
        touched: {...this.state.touched, [field]: true}
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log("Current state is: " + JSON.stringify(this.state));
    alert("Current state is: " + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {

    const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email);

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
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                      <Label htmlFor='firstName' sm={2}>
                          First Name
                        </Label>
                      <Col sm={10}>
                        <Input type="text" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        value={this.state.firstName}
                                        invalid={errors.firstName}
                                        onBlur={this.handleBlur("firstName")}
                                        onChange={this.handleInputChange}/>
                                        <FormFeedback> {errors.firstName} </FormFeedback>
                      </Col>
                      </FormGroup>
                      <FormGroup row>
                          <Label htmlFor='lastName' sm={2}>
                          Last Name
                        </Label>
                      <Col sm={10}>
                        <Input type="text" id="lastName" name="lastName"
                                        placeholder="Last Name"
                                        value={this.state.lastName}
                                        invalid={errors.lastName}
                                        onBlur={this.handleBlur("lastName")}
                                        onChange={this.handleInputChange}/>
                                        <FormFeedback> {errors.lastName} </FormFeedback>
                      </Col>
                    </FormGroup>
                    
                    {/* ASKING FOR PHONE # */}
                    <FormGroup row>
                      <Label htmlFor='phoneNum' sm={2}>
                          Phone #
                        </Label>
                      <Col sm={10}>
                            <Input type="tel" id="phoneNum" name="phoneNum"
                                placeholder="Phone number"
                                value={this.state.phoneNum}
                                invalid={errors.phoneNum}
                                onBlur={this.handleBlur("phoneNum")}
                                onChange={this.handleInputChange} />
                                <FormFeedback> {errors.phoneNum} </FormFeedback>
                     </Col>
                    </FormGroup>
                    
                    {/* ASKING FOR EMAIL */}
                    <FormGroup row>
                      <Label htmlFor='email' sm={2}>
                        Your Email
                      </Label>
                      <Col sm={10}>
                        <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        invalid={errors.email}
                                        onBlur={this.handleBlur("email")}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback> {errors.email} </FormFeedback>
                      </Col>
                    </FormGroup>

                    {/* SELECTION A SUBJECT */}
                    <FormGroup row>
                      <Label htmlFor='subject' sm={2} >
                        Subject
                      </Label>
                      <Col>
                        <Input type="select" name="subject"
                                            value={this.state.subject}
                                            onChange={this.handleInputChange}>
                          <option>Select ...</option>
                          <option>Informations</option>
                          <option>Pour Ajouter Votre Pub</option>
                          <option>Suggestions</option>
                          <option>Autres</option>
                        </Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md={{ size: 6, offset: 2 }}>
                        <FormGroup check>
                          <Label check>
                            <Input
                              type='checkbox'
                              name='agree'
                              checked={this.state.agree}
                              onChange={this.handleInputChange}
                            />{" "}
                            <strong>May we contact you?</strong>
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <Input type='select' name='contactType'
                            value={this.state.contactType}
                            onChange={this.handleInputChange}>
                          <option>By Phone</option>
                          <option>By Email</option>
                        </Input>
                      </Col>
                    </FormGroup>

                    {/* USER MESSAGE */}
                    <FormGroup row>
                      <Label htmlFor='feedback' sm={2}> Message </Label>
                      <Col md={10}>
                        <Input type="textarea" id="feedback" name="feedback"
                                        rows="7"
                                        value={this.state.feedback}
                                        onChange={this.handleInputChange} />
                      </Col>
                    </FormGroup>

                    {/* FORM SUBMIT BUTTON */}
                    <FormGroup row>
                      <Col md={{size: 10, offset: 2}}>
                        <Button type='submit' color='info'>
                          Submit Form
                        </Button>
                      </Col>
                    </FormGroup>
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