import React, { Component } from 'react';

class ContactComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="contactSection">
                    <div className="container">
                        <div className="row">
                        {/* CONTACT FORM SECTION */}
                        <div className="col-lg-8 py-3">
                            <div className="text-center">
                            <h3 className="getInTouch">Get In Touch</h3>
                            <p className="contactUsSection mb-4">Please contact us if you need any further information</p>
                            </div>
                            <div className="col">
                            <form action className="form-group">
                                <div className="form-group row">
                                <div className="col-sm-2">
                                    <label htmlFor="inputName" className="col-form-label">Your Name</label>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" id="inputName" placeholder="First Name" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" id="inputName" placeholder="Last Name" />
                                </div>
                                </div>
                                <div className="form-group row">
                                <div className="col-sm-2">
                                    <label htmlFor="areaCode" className="col-form-label">Phone #</label>
                                </div>
                                <div className="col-3 col-sm-4">
                                    <input type="tel" className="form-control" id="areaCode" placeholder="Area Code" defaultValue={+1} />
                                </div>
                                <div className="col">
                                    <input type="tel" className="form-control" name="telNum" id="inputName" placeholder="Phone Number" required />
                                </div>
                                </div>
                                <div className="form-group row">
                                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Your Email</label>
                                <div className="col">
                                    <input type="email" className="form-control" id="inputEmail" placeholder="Email Address" required />
                                </div>
                                </div>
                                <div className="form-group row">
                                <label htmlFor="subject" className="col-sm-2 col-form-label">Subject</label>
                                <div className="col">
                                    <select name="subject" id="subject" className="form-control" required>
                                    <option selected>Select ...</option>
                                    <option value={1}>Informations</option>
                                    <option value={2}>Pour Ajouter Votre Pub</option>
                                    <option value={3}>Suggestions</option>
                                    <option value={4}>Autres</option>
                                    </select>
                                </div>
                                </div>
                                <div className="form-group row">
                                <label htmlFor="textArea" className="col-form-label col-sm-2">Message</label>
                                <div className="col">
                                    <textarea name="textArea" id="textArea" className="form-control" rows={7} required defaultValue={""} />
                                </div>
                                </div>
                                <div className="row">
                                <div className="offset-md-2 col-md-10">
                                    <button className="btn btn-info d-none d-block bnt-lg" type="submit">Submit Form</button>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        {/* CAONTACT CARD */}
                        <div className="col-4 align-self-center py-4 text-center bg-light">                    
                            <div className="row">
                            <div className="col">
                                <h3 className="contactUsPart">Contact Us</h3>                            
                                <p><i className="fa fa-map" /> <span>298, Monseigneur Guilloux</span></p>                            
                            </div>
                            </div>
                            <div className="row">
                            <div className="col">
                                <p><i className="fa fa-phone" /> <span>+1 509 - 37 08 05 65</span></p>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col">
                                <p><i className="fa fa-envelope-open" /> <span>fyardlest@fyardlest.net</span></p>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col">
                                {/*Facebook*/}
                                <a className="btn-floating btn-lg btn-fb" type="button" role="button" href="http://facebook.com/">
                                    <i className="fa fa-facebook-f" /></a>
                                {/*Twitter*/}
                                <a className="btn-floating btn-lg btn-tw" type="button" role="button" href="http://twitter.com/">
                                    <i className="fa fa-twitter" /></a>
                                {/*Google +*/}
                                <a className="btn-floating btn-lg btn-gplus" type="button" role="button" href="http://google.com/">
                                    <i className="fa fa-google-plus" /></a>
                                {/*Linkedin*/}
                                <a className="btn-floating btn-lg btn-li" type="button" role="button" href="http://linkedin.com/">
                                    <i className="fa fa-linkedin" /></a>
                                {/*Instagram*/}
                                <a className="btn-floating btn-lg btn-ins" type="button" role="button" href="http://instagram.com/">
                                    <i className="fa fa-instagram" /></a>
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

        )
    }
}

export default ContactComponent;
