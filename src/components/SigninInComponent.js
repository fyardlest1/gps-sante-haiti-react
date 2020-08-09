import React, { Component } from 'react';
import {Col, Breadcrumb, BreadcrumbItem, Button, Row} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export class Login extends Component {
         constructor(props) {
           super(props);

           this.state = {
             firstName: "",
             lastName: "",
             email: "",
             password: "",
             confirmPassword: "",
             touched: {
               firstName: false,
               lastName: false,
               email: false,
               password: false,
               confirmPassword: false,
             },
           };

           this.handleSignIn = this.handleSignIn.bind(this);
           
         }

         handleSignIn(values) {
           console.log("Current state is: " + JSON.stringify(values));
           alert("Current state is: " + JSON.stringify(values));
         }

         handleSignUp = (values) => {
           console.log("Current state is: " + JSON.stringify(values));
           alert("Current state is: " + JSON.stringify(values));
         }

         render() {
           return (
             <section className='container'>
               <div className='row'>
                 <div className='col'>
                   <Breadcrumb>
                     <BreadcrumbItem>
                       <Link to='/home'>Home</Link>
                     </BreadcrumbItem>
                     <BreadcrumbItem active>Log In</BreadcrumbItem>
                   </Breadcrumb>
                 </div>
               </div>

               <Tabs id='signInSection'>
                 <div className='row'>
                   <div className='col-md-8 col-lg-6 mx-auto py-3'>
                     <div className='card pb-3 px-3'>
                       <TabList className='nav nav-tabs text-center'>
                         <Tab className='nav-item text-uppercase col-md-6'>
                           <div className='nav-link active'>Sign In</div>
                         </Tab>
                         <Tab className='nav-item text-uppercase col-md-6'>
                           <div className='nav-link'>Sign Up</div>
                         </Tab>
                       </TabList>
                       {/* SIGN IN PANEL*/}
                       <TabPanel tab-pane fade show active id='signIn'>
                         <div className='text-center'>
                           <h2 className='mt-3'>Sign in to your account</h2>
                         </div>
                         <p className='form-text text-muted sizing'>
                           No more pain to find the house of your choice. <br />
                           No more pain to sell your house and terrain.
                         </p>
                         <div className='col'>
                           <LocalForm
                             onSubmit={(values) => this.handleSignIn(values)}
                           >
                             <Row className='form-group'>
                               <Col>
                                 <Control.text
                                   model='.email'
                                   className='form-control placeHolder'
                                   name='emailAddress'
                                   id='emailAddress'
                                   placeholder='Email Address'
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
                             <Row className='form-group'>
                               <Col>
                                 <Control.text
                                   model='.password'
                                   className='form-control placeHolder'
                                   name='password'
                                   id='password'
                                   placeholder='Password'
                                 />
                               </Col>
                             </Row>
                             <p className='form-text sizing'>
                               By clicking Sign In, you agree to our
                               <Link className='text-primary font-weight-bold'>
                                 Terms of Use
                               </Link>{" "}
                               and our{" "}
                               <Link className='text-primary font-weight-bold'>
                                 Privacy Policy.
                               </Link>
                             </p>
                             <Button
                               type='submit'
                               className='btn btn-info form-control d-none d-block my-4 rounded text-uppercase shadow'
                             >
                               Sign In
                             </Button>
                             <Link to='/resetpassword' className='form-text text-center text-primary font-weight-bold'>
                               Forgot your password?
                             </Link>
                             <div className='separator text-muted my-4'>
                               you can also
                             </div>
                             <Row className='form-group'>
                               <div className='col-6'>
                                 <Link className='btn btn-social btn-md btn-google form-control'>
                                   <i className='fa fa-google' />
                                   Sign in with Google
                                 </Link>
                               </div>
                               <div className='col-6'>
                                 <Link className='btn btn-social btn-md btn-facebook form-control'>
                                   <i className='fa fa-facebook' />
                                   Sign in with Facebook
                                 </Link>
                               </div>
                             </Row>
                           </LocalForm>
                         </div>
                       </TabPanel>
                       <TabPanel fade show className='tab-pane' id='signUp'>
                         <div className='text-center'>
                           <h2 className='mt-3'>Create an account</h2>
                         </div>
                         <p className='form-text text-muted sizing'>
                           No more pain to find the house of your choice.
                           <br />
                           No more pain to sell your house and terrain.
                         </p>
                         <div className='col'>
                           <LocalForm
                             onSubmit={(values) => this.handleSignUp(values)}
                           >
                             <Row className='form-group'>
                               <Col>
                                 <Control.text
                                   model='.firstName'
                                   className='form-control placeHolder'
                                   name='firstName'
                                   id='firstName'
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
                               <Col>
                                 <Control.text
                                   model='.lastName'
                                   className='form-control placeHolder'
                                   name='lastName'
                                   id='lastName'
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
                             <Row className='form-group'>
                               <Col>
                                 <Control.text
                                   model='.email'
                                   className='form-control placeHolder'
                                   name='emailAddress'
                                   id='emailAddress'
                                   placeholder='Email Address'
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
                                 <small
                                   id='emailHelp'
                                   className='form-text text-muted'
                                 >
                                   We'll never share your email with anyone
                                   else.
                                 </small>
                               </Col>
                             </Row>
                             <Row className='form-group'>
                               <Col md={6}>
                                 <Control.text
                                   model='.password'
                                   className='form-control placeHolder'
                                   name='password'
                                   id='password'
                                   placeholder='Password'
                                 />
                               </Col>
                               <Col md={6}>
                                 <Control.text
                                   model='.confirmPassword'
                                   className='form-control btn-lg placeHolder'
                                   name='confirmPass'
                                   id='confirmPass'
                                   placeholder='Confirm Password'
                                 />
                               </Col>
                             </Row>
                             <p className='form-text text-center sizing'>
                               By clicking Sign Up, you agree to our
                               <Link className='text-primary font-weight-bold'>
                                 Terms of Use
                               </Link>{" "}
                               and our
                               <Link className='text-primary font-weight-bold'>
                                 Privacy Policy.
                               </Link>
                             </p>
                             <Button
                               type='submit'
                               className='btn btn-info form-control d-none d-block my-4 rounded text-uppercase shadow'
                             >
                               Sign Up
                             </Button>
                             <div className='separator text-muted my-4'>
                               you can also
                             </div>
                             <Row className='form-group'>
                               <Col md={6}>
                                 <Link className='btn btn-social btn-md btn-google form-control'>
                                   <i className='fa fa-google' />
                                   Sign up with Google
                                 </Link>
                               </Col>
                               <Col md={6}>
                                 <Link className='btn btn-social btn-md btn-facebook form-control'>
                                   <i className='fa fa-facebook' />
                                   Sign up with Facebook
                                 </Link>
                               </Col>
                             </Row>
                           </LocalForm>
                         </div>
                       </TabPanel>
                     </div>
                   </div>
                 </div>
               </Tabs>
             </section>
           );
         }
       }

export default Login;
