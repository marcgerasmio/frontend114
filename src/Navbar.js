import {Nav, Navbar, Image, Container, Button} from 'react-bootstrap';
import './App.css';

function NavbarMain() {
  return (
    <Navbar className='navbar'>
      <Container>
      <a href='#logo'><Image src="logo.png" className='logo'/> </a>
        <Nav>
          <Nav.Link href="#" className='nav-text'>Home</Nav.Link>
          <Nav.Link href="#" className='nav-text'>About Us</Nav.Link>
          <Button className='nav-button'>Sign In</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;