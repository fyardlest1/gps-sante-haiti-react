import React from 'react';


const Footer = () => {
  return (
    <React.Fragment>
        <div className="page-footer font-small text-white py-4">
            <div className="container">
                <div className="row">
                    {/* Copyright */}
                    <div className="col text-center footer-copyright py-3">© 2020 Copyright -
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
