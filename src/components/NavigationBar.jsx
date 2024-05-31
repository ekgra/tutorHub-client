import styles from './NavigationBar.module.css';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import { Link } from 'react-router-dom';

import { useState, useEffect, useContext } from 'react';
import { MdMenuBook, MdLogin, MdLogout } from 'react-icons/md';

import { AuthContext } from '../utils/AuthContext';
import { decodeJWT } from '../utils/decodeJWT';
import googleIcon from '../assets/google.svg';


const NavigationBar = () => {
  const { auth, loginWithGoogle, logout } = useContext(AuthContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <LinkContainer className='ms-2' to="/">
          <Navbar.Brand> <MdMenuBook size={25}/> TutorHub</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/courses">
              <Nav.Link>Courses</Nav.Link>
            </LinkContainer>
            {auth ? (
                <LinkContainer to="/profile">
                  <Nav.Link>Profile</Nav.Link>
                </LinkContainer>
              )
            : null }
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
          
          <Nav className="ms-auto">
            {auth ? (
              <>
                <LinkContainer to="/myLearning">
                  <Nav.Link>My Learning</Nav.Link>
                </LinkContainer>
                <div >
                  <Button className='me-2' variant="outline-light" onClick={logout}><MdLogout size={25} /> Logout</Button>
                  {/* <Container><Navbar.Text className={styles.loginText}>User: {name}</Navbar.Text></Container> */}
                </div>
              </>
              )
            : (
                <Button className='me-2' variant="outline-light" onClick={loginWithGoogle}>
                  <img className= {styles.loginButtonImage} src={googleIcon}/> 
                  Login with Google
                </Button>
              ) 
            }
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;

//     return (
//       <Navbar bg="dark" variant="dark" expand="lg">
//         <Navbar.Brand className="brandLogo" as={CustomLink} to="/">
//           TutorHub
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             <CustomLink to="/courses">Courses</CustomLink>
//             <CustomLink to="/profile">Profile</CustomLink>
//           </Nav>
//           <Nav className="ml-auto">
//             <Button variant="outline-light" onClick={handleAuthButtonClick}>
//                 {loggedIn ? 'Logout' : 'Login'}
//             </Button>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     );
//   };

// import CustomLink from './CustomLink'


// https://stackoverflow.com/questions/70090030/is-there-a-solution-for-linkcontainer-component-from-react-router-bootstrap-erro
{/* <Container>
<Nav.Link as={Link} to="/courses">
  Courses
</Nav.Link>
</Container> */}