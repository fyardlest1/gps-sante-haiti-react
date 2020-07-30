import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
        <div className="page-footer font-small text-white py-4">
            <div className="container">
                <div className="row py-3 mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">HaForS</h6>
                        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Site Map</h6>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/directory'>Hospital</Link></li>
                            <li><Link to='/aboutus'>About</Link></li>
                            <li><Link to='/services'>Services</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                            <li><Link to='/login'>Log In</Link></li>
                            <li><Link to='/addyours'>Ajouter</Link></li>
                            <li><Link to='/ourshop'>Shop</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                        <ul className="list-unstyled">
                            <li><Link to="#!">Your Account</Link></li>
                            <li><Link to="#!">Become an Affiliate</Link></li>
                            <li><Link to="#!">Shipping Rates</Link></li>
                            <li><Link to="#!">Help</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase font-weight-bold">Contact</h6>
                        <ul className="list-unstyled">
                            <li><i className="fa fa-home mr-3" /> New York, NY 10012, US</li>
                            <li><i className="fa fa-envelope mr-3" /> fyardlest@fyardlest.net</li>                            
                            <li><i className="fa fa-phone mr-3" /> + 01 234 567 88</li>
                            <li><i className="fa fa-print mr-3" /> + 01 234 567 89</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    {/* Copyright */}
                    <div className="col text-center footer-copyright py-3">&copy; {new Date().getFullYear()} - All Rights Reserved -
                        <a href="https://fyardlest.net/" className="text-warning"> FYARDLEST.NET</a>
                    </div>                
                </div>
                <div className="row">
                    <div className="col text-center">
                        <h3>Gps-Sante-Haiti</h3>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Footer;
