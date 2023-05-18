import React, { useContext, useState, useEffect } from 'react';
import { signOut } from "firebase/auth"
import { auth } from '../../firebase'
import { AuthContext } from '../../components/SignContent/context/AuthContext'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FaRegHeart } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSignOutAlt } from 'react-icons/fa';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './Headerstyle.module.css';


import { useNavigate, NavLink } from 'react-router-dom';


function Header() {
  const navigate = useNavigate();
  const { setCurrentUser, currentUser } = useContext(AuthContext)
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoggedIn(user !== null);
    });

    return unsubscribe;
  }, []);


  const handleSignOut = () => {
    if (currentUser) {
      signOut(auth).then(() => {
        setCurrentUser(null);
        setLoggedIn(false);
      }).catch((error) => {
        console.log(error.message);
      });
    } else {
      navigate("/login");
    }
  };


  return (
    <>
      {['sm',].map((expand) => (
        <Navbar className={styles.navbarCustom} key={expand} variant="dark" expand={expand} >
          <Container fluid style={{ justifyContent: 'end' }}>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
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
                    {loggedIn ?
                      <div className={styles.userFrame}>
                       
                        <img className={styles.photo} src={currentUser.photoURL} alt="" />
                        <span className={styles.username}> 
                        
                         { currentUser.displayName}</span>
                        <FaRegHeart className={styles.favoriteIcon} />
                        <Button className={styles.logoutbtn} onClick={handleSignOut}><FaSignOutAlt /></Button>
                       
                      </div>
                      :
                      <span>SIGN UP/IN</span>
                    }
                  </Nav.Link>
                </Nav>

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