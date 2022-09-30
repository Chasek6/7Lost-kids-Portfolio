import React from "react";
import { Nav, Navbar, Container, Tab, Tabs,NavDropdown, NavbarBrand} from "react-bootstrap";
import { MDBFooter } from 'mdb-react-ui-kit';
import {fontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBots, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


 function Footer() {
  return (
    <MDBFooter bgColor='footer bg-dark' className='text-center text-lg-left fixed-bottom '>
      <div className='text-center p-3 text-light' style={{ backgroundColor: 'grey' }}>
        &copy; {new Date().getFullYear()} Creator:{' Chase Stratton '}
        <a className='fa text-light' href='https://github.com/Chasek6'><FontAwesomeIcon icon={faGithub}  size="lg" border color="" /></a>
          <a className='fa text-light' href='https://www.linkedin.com/in/chase-stratton-0b0b1b1b9/'>
     
          <FontAwesomeIcon icon={faLinkedin}  size="lg" border   />
        </a>
      </div>
    </MDBFooter>
  );
}


export default Footer;
