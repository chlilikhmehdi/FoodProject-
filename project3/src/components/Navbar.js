import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavScrollExample({filtringSearch  }) {
  const [state , setState] = useState('') ; 
  
  const SearchFunc = ()=>{ //mali rnclicker rat2ixucat had l function 
    filtringSearch(state) 
    setState('')//bach tkhwi l input dyal search
  }
  
  return (
    
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container >
        <Navbar.Brand href="#" className=''>
          <div style={{color:'#b45b35'}}>
          DarFood
          </div>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search"
              className="mx-2"
              onChange={(e) =>setState(e.target.value)} //hna radi n7at l value li raydkhl f l form f useState 
              value = {state}//hna l value li wlat and had l form hiya state btabi3te lhale 
              />
            <Button onClick={()=>SearchFunc()} variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;