import React, { Component } from "react";

class HeaderTop extends Component {
  render() {
    return (
      <div>
        {/* HEADER SECTION */}
        <header className='header-services'>
          <img
            src='assets/images/image2.jpeg'
            alt='Site Logo'
            className='img-fluid'
          />
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 m-auto text-center'>
                <h1>Our Services</h1>
                <p className='serviceId'>
                  Notre Start Up peut vous offrir beaucoup plus que ce dont vous
                  êtes capable d'imagier.
                </p>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default HeaderTop;
