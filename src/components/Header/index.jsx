import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './Headerstyle.module.css';
// import '../pages/Home';
// import Darklightmode from '../Darklightmode';
import { NavLink } from 'react-router-dom';
// import { SearchOutlined } from '@ant-design/icons';


function Header() {


  return (
    <>
      {['sm',].map((expand) => (
        <Navbar className={styles.navbarCustom} key={expand} variant="dark" expand={expand} >
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
                <Nav className={styles.navlink}>
                  <Nav.Link as={NavLink} to="/">HOME</Nav.Link>
                  <Nav.Link as={NavLink} to="/AboutUs" >ABOUT US</Nav.Link>
                  <Nav.Link as={NavLink} to="/Music" >MUSIC</Nav.Link>
                  {/* <Nav.Link as={NavLink} to="/Shop" >SHOP</Nav.Link> */}
                  <Nav.Link as={NavLink} to="/Model" >3D MODEL</Nav.Link>



                </Nav>

                {/* <Form className="d-flex justify-content-end " >
                  <Form.Control
                    type="search"
                    placeholder=""
                    id={styles.searchbar}
                    className="me-2 rounded-pill"
                    aria-label="Search"

                  />
                  <Button className='rounded-pill' variant="outline-light"><SearchOutlined /></Button>
                </Form> */}

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