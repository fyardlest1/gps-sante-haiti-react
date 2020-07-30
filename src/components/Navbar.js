import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, NavLink} from 'reactstrap';

class NavbarFixed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState ({
            isNavOpen: !this.state.isNavOpen
        });
    };

    render() {
        return (
          <React.Fragment>
            <Navbar className='navbar navbar-expand-md navbar-dark sticky-top'>
              <div className='container'>
                <NavbarBrand className='col d-none d-md-block navbar-brand'>
                  <img
                    src='assets/images/mlogo.png'
                    width='50'
                    height='50'
                    alt='Site Logo'
                    className='img-fluid'
                  />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar>
                    <NavItem>
                      <NavLink className='nav-link' to='/home'>
                        {" "}
                        Home
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink className='nav-link' to='/about'>
                        About
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink className='nav-link' to='/services'>
                        Services
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink className='nav-link' to='/contactus'>
                        Contact
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink className='nav-link' to='/contactus'>
                        Log In
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink className='nav-link' to='/addyours'>
                        Ajouter
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink className='nav-link' to='/ourshop'>
                        {" "}
                        Shop
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <form className='col-md-4 input-group ml-auto'>
                    <input
                      type='text'
                      className='form-control d-inline mr-2'
                      placeholder='Trouver un Medecin'
                    />
                    <button className='btn btn-danger btn-md'>Trouver</button>
                  </form>
                </Collapse>
              </div>
            </Navbar>
          </React.Fragment>
        );
    }  
}

export default NavbarFixed;
