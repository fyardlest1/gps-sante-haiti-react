import React from 'react';
import { Col, Breadcrumb, BreadcrumbItem, Button, Row } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function PasswordReset() {
    return (
        <React.Fragment>
            <div className="container">
                <div className='row'>
                    <div className='col'>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to='/home'>Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>Reset Password</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
                <div id="resetSection">
            <div className="row">
                <div className="col-lg-8 mx-auto py-3">
                <div className="card">
                    <div className="card-body">
                    <form action>
                        <div className="form-group text-center">
                        <h2 className="mt-3">Reset Your Password</h2>
                        <p className="text-muted sizing text-center mt-1">Please enter the email address you used when you signed up for your account.
                        </p>
                        </div>
                        <div className="form-group row">
                        <div className="col">
                            <input type="email" className="form-control btn-lg placeHolder" name="passReset" id="passReset" placeholder="Email Address" />
                            <a href="#" className="btn btn-info form-control d-none d-block my-4 rounded text-uppercase shadow">Send
                            Email</a>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default PasswordReset;
