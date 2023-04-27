import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar bg="light" variant='light' expand="lg" >
      <Container fluid>
        <Navbar.Brand  >MY SHOPPP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <Nav.Link as={Link} exact="true" to="/">Drop here</Nav.Link>
            
            <Nav.Link as={Link} exact="true" to="/SignIn">/ Sign In</Nav.Link>

          </Nav>



       




        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;