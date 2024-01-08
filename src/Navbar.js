import {Nav, Navbar, Image, Container, Button} from 'react-bootstrap';
import './App.css';
import { Link } from 'react-router-dom';

function NavbarMain() {
  return (
    <Navbar className='navbar'>
      <Container>
        <Link to ="/home">
          <a><Image src="logo.png" className='logo'/></a>
        </Link>
          <Nav>
            <Link to ="/home" style={{textDecoration: 'none'}}>
              <Nav.Link href = "/home" className='nav-text'>Home</Nav.Link>
            </Link>
            <Link to ="/about" style={{textDecoration: 'none'}}>
              <Nav.Link href="/about" className='nav-text'>About Us</Nav.Link>
            </Link>
            <Link to ="/logout">
              <a href='/logout'><Button className='nav-button'>Logout</Button></a>
            </Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;