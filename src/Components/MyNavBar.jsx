import React, { useState } from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { Link,useNavigate} from 'react-router-dom';
import FavoritesSidebar from './FavoriteSidebar';


const MyNavBar = () => {
  const navigate = useNavigate();
const logout=()=>{
  localStorage.setItem("token","")
  navigate("/login")
}


const [show, setShow] = useState(true);
const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
  <>
   
      <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">E-Commerce </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
         <Nav.Link   as={Link} to="/login">Login</Nav.Link>
            <Nav.Link onClick={handleShow}  as={Link} to="/Purchases">Purchases</Nav.Link>
            <Nav.Link onClick={logout} >Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <FavoritesSidebar show={show} handleClose={handleClose} />



     {/* <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home" to="/"  as={Link}>Product Bar</Navbar.Brand>
          <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="#home"  as={Link} to="/login">Login</Nav.Link>
            <Nav.Link href="#features"  as={Link} to="/Purchases">Purchases</Nav.Link>
            <Nav.Link href="#pricing" >Purchases(sidebar)</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

    </>
    
 




      
      
    
  );
};

export default MyNavBar;