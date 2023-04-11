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
import { useEffect, useState } from 'react';
// import { SearchOutlined } from '@ant-design/icons';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://fzzbffjgesbywijwlztg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6emJmZmpnZXNieXdpandsenRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExMTg0ODQsImV4cCI6MTk5NjY5NDQ4NH0.CUYU0u1DTvOYm3jYZhKZ690cwOYFEAn66Y9fh7H-NqI');

function Header() {

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    let aa = !session ? "s" : session.user

    console.log(aa)
  }, [])

  useEffect(() => {
    const { user } = supabase.auth.session();
    setUser(user);
  }, []);

  const [session, setSession] = useState(null)

  async function logout() {
    const { error } = await supabase.auth.signOut()
  }


  return (
    <>
      {['sm',].map((expand) => (
        <Navbar className={styles.navbarCustom} key={expand} variant="dark" expand={expand} >
          <Container fluid style={{ justifyContent: 'end' }}>

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
                  <Nav.Link as={NavLink} to="/Model" >3D MODEL</Nav.Link>

                  <Nav.Link as={NavLink} to="/Sign">
                    {!session ?
                      <>SIGN UP/IN</>
                      :
                      <div className={styles.userFrame} >
                        <>{session.user.email}</>
                        <Button onClick={logout} className={styles.logoutBtnCustom}><>SIGN OUT</></Button>
                      </div>
                    }
                  </Nav.Link>
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
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar >
      ))
      }
    </>
  );
}

export default Header;