import { signOut } from 'firebase/auth';
import React from 'react';
import {  Container,  Nav, Navbar,} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate=useNavigate()
    const logout = () => {
        signOut(auth);
      };
    
    return (
        <div>
           <Navbar className='nav fixed-top' collapseOnSelect expand="lg" bg="success" variant="dark">
  <Container className='d-flex' >
  <Navbar.Brand as={Link} to='/' href="#home">Farm Fresh</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    
    </Nav>
    <Nav>  
      <Nav.Link as={Link} to='/' href="#pricing">Home</Nav.Link>
      {
      user && <Nav.Link as={Link} to='/additem' href="#deets">Add new item</Nav.Link>
      }
      {
        user && <Nav.Link as={Link} to='/manageinventory' href="#deets">Manage Inventory</Nav.Link>
      }
      {
        user &&<Nav.Link as={Link} to='/myitem' href="#features">My item</Nav.Link>
      }
     
     
     <Nav.Link as={Link} to='/blogs' href="#features">Blogs</Nav.Link>
     <Nav.Link as={Link} to='/contact' href="#features">Contact Us</Nav.Link>

     
     {
                user ? <button onClick={logout}>SignOut</button>: < Nav.Link as={Link} to='/login' eventKey={2} href="#memes">
                Login
              </Nav.Link>
            }
  
  
    </Nav>

    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;