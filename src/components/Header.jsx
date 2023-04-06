import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './styles/Headerstyle.css';
// import '../pages/Home';
import Darklightmode from './Darklightmode';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <>
      {['sm',].map((expand) => (
        <Navbar className="p-3 navbarCustom" key={expand} variant="dark" expand={expand} >
          <Container fluid>
           
            <Navbar.Toggle className='ham' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 TRANCE MENU
                </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                {/* 日夜按鈕 */}
                {/* <Darklightmode /> */}

                <Nav className="justify-content-end flex-grow-1 pe-3 navlink">
                  <Nav.Link as={NavLink} to="/">HOME</Nav.Link>
                  <Nav.Link as={NavLink} to="/AboutUs" >ABOUT US</Nav.Link>
                  <Nav.Link as={NavLink} to="/Music" >MUSIC</Nav.Link>
                  <Nav.Link as={NavLink} to="/Shop" >SHOP</Nav.Link>
                  <Nav.Link as={NavLink} to="/Model" >3D MODEL</Nav.Link>

                  {/* 下拉菜單 */}
                  {/* <NavDropdown

                    title="TYPE"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">MUSIC</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      3D MODEL
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action5">
                      ART WORK
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action5">
                      LEARNING
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  

                </Nav>

                {/* <Nav className="me-3 gap-2 login">
                  <Nav.Link className="btn btn-outline-light text-white" href="#">LOGIN</Nav.Link>
                  <Nav.Link eventKey={2} className="btn btn-outline-light text-white " href="#">
                    SIGN UP
                  </Nav.Link>
                </Nav> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;