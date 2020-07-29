import React, { Component } from 'react';

export class SigninInComponent extends Component {
    render() {
        return (
            <section className="container" >
                <div id="signInSection">
                <div className="row">
                    <div className="col-md-8 col-lg-6 mx-auto py-3">
                    <div className="card pb-3 px-3">
                        <ul className="nav nav-tabs text-center">
                            <li className="nav-item text-uppercase col-md-6">
                                <a className="nav-link active" href="#signIn" role="tab" data-toggle="tab">Sign In</a></li>
                            <li className="nav-item text-uppercase col-md-6">
                                <a className="nav-link" href="#signUp" role="tab" data-toggle="tab">Sign Up</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                        {/* SIGN IN PANEL*/}
                        <div role="tabpanel" className="tab-pane fade show active" id="signIn">
                            <div className="text-center">
                            <h2 className="mt-3">Sign in to your account</h2>
                            </div>
                            <p className="form-text text-muted sizing">No more pain to find the house of your choice. <br />No more pain to sell your house and terrain.
                            </p>
                            <div className="col">
                            <form action className="formGroup" id="formGroup">
                                <div className="form-group">
                                <input type="email" className="form-control btn-lg placeHolder" name="emailAddress" id="emailAddress" placeholder="Email Address" />
                                </div>
                                <div className="form-group">
                                <input type="password" className="form-control btn-lg placeHolder" name="password" id="password" placeholder="Password" />
                                </div>
                                <p className="form-text sizing">By clicking Sign In, you agree to our
                                <a href="#" className="text-primary font-weight-bold">Terms of
                                    Use</a> and our <a href="#" className="text-primary font-weight-bold">Privacy
                                    Policy.</a></p>
                                <a href="#" className="btn btn-info form-control d-none d-block my-4 rounded text-uppercase shadow">Sign
                                In</a>
                                <a href="reset-password-account.html" className="form-text text-center text-primary font-weight-bold">Forgot your
                                password?</a>
                                <div className="separator text-muted my-4">you can also</div>
                                <div className="form-group row">
                                <div className="col-6">
                                    <a href="#" className="btn btn-social btn-md btn-google form-control">
                                    <i className="fa fa-google" />Sign in with Google
                                    </a>
                                </div>
                                <div className="col-6">
                                    <a href="#" className="btn btn-social btn-md btn-facebook form-control">
                                    <i className="fa fa-facebook" />Sign in with Facebook
                                    </a>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        {/* SIGN UP PANEL */}
                        <div role="tabpanel" className="tab-pane fade show" id="signUp">
                            <div className="text-center">
                            <h2 className="mt-3">Create an account</h2>
                            </div>
                            <p className="form-text text-muted sizing">No more pain to find the house of your
                            choice.
                            <br />No more pain to sell your house and terrain.
                            </p>
                            <div className="col">
                            <form action className="form-group" id="form-group">
                                <div className="form-group row">
                                <div className="col-md-6">
                                    <input type="text" className="form-control btn-lg placeHolder" name="firstName" id="firstName" placeholder="First Name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control btn-lg placeHolder" name="lastName" id="lastName" placeholder="Last Name" />
                                </div>
                                </div>
                                <div className="form-group">
                                <input type="email" className="form-control btn-lg placeHolder" name="emailAddress" id="emailAddress" placeholder="Email Address" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share
                                    your
                                    email with anyone else.</small>
                                </div>
                                <div className="form-group row">
                                <div className="col-md-6">
                                    <input type="password" className="form-control btn-lg placeHolder" name="password" id="password" placeholder="Password" />
                                </div>
                                <div className="col-md-6">
                                    <input type="password" className="form-control btn-lg placeHolder" name="passwordConfirm" id="passwordConfirm" placeholder="Confirm Password" />
                                </div>
                                </div>
                                <p className="form-text text-center sizing">By clicking Sign In, you agree to
                                our
                                <a href="#" className="text-primary font-weight-bold">Terms of Use</a> and
                                our
                                <a href="#" className="text-primary font-weight-bold">Privacy Policy.</a>
                                </p>
                                <a href="#" className="btn btn-info form-control d-none d-block my-4 rounded text-uppercase shadow">Sign
                                Up</a>
                                <div className="separator text-muted my-4">you can also</div>
                                <div className="form-group row">
                                <div className="col-6">
                                    <a href="#" className="btn btn-social btn-md btn-google form-control">
                                    <i className="fa fa-google" />Sign in with Google
                                    </a>
                                </div>
                                <div className="col-6">
                                    <a href="#" className="btn btn-social btn-md btn-facebook form-control">
                                    <i className="fa fa-facebook" />Sign in with Facebook
                                    </a>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}

export default SigninInComponent;
