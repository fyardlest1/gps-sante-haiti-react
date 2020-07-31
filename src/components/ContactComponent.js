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
} from "reactstrap";
import { Link } from 'react-router-dom';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      areaCode: "",
      phoneNum: "",
      email: "",
      agree: false,
      subject: "Select ...",
      contactType: "By Phone",
      feedback: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
                      <Col sm={2}>
                        <Label htmlFor='inputName' className='col-form-label'>
                          Your Name
                        </Label>
                      </Col>
                      <Col sm={5}>
                        <Input type="text" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange}
                        />
                      </Col>
                      <Col sm={5}>
                        <Input type="text" id="lastName" name="lastName"
                                        placeholder="Last Name"
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange}
                        />
                      </Col>
                    </FormGroup>
                    
                    {/* ASKING FOR PHONE # */}
                    <FormGroup row>
                      <Col md={2}>
                        <Label htmlFor='phoneNum'>
                          Phone #
                        </Label>
                      </Col>
                      <Col md={4}>
                          <Input type="tel" id="areaCode" name="areaCode"
                                        placeholder="Phone number"
                                        defaultValue={+1}
                                        value={this.state.areaCode}
                                        onChange={this.handleInputChange} 
                            />
                      </Col>
                      <Col>
                            <Input type="tel" id="phoneNum" name="phoneNum"
                                placeholder="Phone number"
                                value={this.state.phoneNum}
                                onChange={this.handleInputChange} 
                            />
                     </Col>
                    </FormGroup>
                    
                    {/* ASKING FOR EMAIL */}
                    <FormGroup row>
                      <Label htmlFor='email' sm={2}>
                        Your Email
                      </Label>
                      <Col className='col'>
                        <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                        />
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
                                        rows="8"
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