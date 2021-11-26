import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import useFirebase from './../../Hook/useFirebase';
import { Container, Navbar} from 'react-bootstrap';

const Header = () => {
  const {user, handleLogout } = useFirebase();
    return (

      
  <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
  <Container>
      <Navbar.Brand href="#home" className="img"><img src={'http://zcube.in/hitup/img/logo/logo.png'} alt="" width="100" height="24"/></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <NavLink to="/home" className="items">
                    <li>Home</li>
                  </NavLink>
                 <NavLink to="/about" className="items">
                    <li>About</li>
                  </NavLink>
                  <NavLink to="/services" className="items">
                  <li>Services</li>
                  </NavLink>
                  <NavLink to="/offer" className="items">
                  <li>Offer</li>
                  </NavLink>
                  {user.email && <li className="items" style={{ color: "#fff" }}>{user.displayName}</li>}
                     {
                        user.email ?
                              <button className='items btn-danger' onClick={handleLogout}><li>Log Out</li></button> :
                         <NavLink className='items' to="/login">Login</NavLink>
                   }
      </Navbar.Collapse>
  </Container>
  </Navbar>
      
    );
};

export default Header;

