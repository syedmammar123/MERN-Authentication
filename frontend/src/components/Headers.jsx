import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaSignInAlt,FaSignOutAlt} from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to="/">
            <Navbar.Brand href="/">Mern Auth</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/login">
                <Nav.Link >
                    <FaSignInAlt />SignIn
                </Nav.Link>
            </LinkContainer>
            
             <LinkContainer to='/register'>
                <Nav.Link>
                    <FaSignOutAlt/>SignUp
                </Nav.Link>
             </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;