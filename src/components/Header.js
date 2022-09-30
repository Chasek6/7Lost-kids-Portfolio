import React from 'react';
import { Nav, Navbar, Container, Tab, Tabs,NavDropdown, NavbarBrand} from 'react-bootstrap';


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Header({ currentPage, handlePageChange }) {
  return (
    <Navbar> 
     {/*  */}
      <Container>
        
        <Navbar.Brand onClick={() => handlePageChange('Home')}>Chase|Stratton</Navbar.Brand>
        <Navbar.Toggle aria-controls="Logo-navbar-nav" />
        <Navbar.Collapse id="Logo-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handlePageChange('Home')}>Home</Nav.Link>
            <Nav.Link onClick={() => handlePageChange('About')}>About</Nav.Link>
            <Nav.Link onClick={() => handlePageChange('Projects')}>Projects</Nav.Link>
            <Nav.Link onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
            {/* Below will be a dropdown tab that will include a link to my resume  */}
            <NavDropdown title="Resume" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://drive.google.com/uc?export=download&id=1cdaUHYWsWlh4mUeQHWOUzP7iAM4CHbVr">Download Resume</NavDropdown.Item>
              <NavDropdown.Item href="https://chasek6.github.io/ChasingBoltz/"> Online Resume </NavDropdown.Item>
              <NavDropdown.Item href="https://music.apple.com/us/playlist/foreign-language/pl.u-oZylKe9tRYGZeMZ">Listen to my Playlist</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          CHASE | Stratton
        </Navbar.Collapse>
      </Container>
      {/* </NavbarBrand> */}
      {/*  */}
    </Navbar>

  
  
  );
}

export default Header;
