import React from 'react';
import { Container, Navbar, Nav, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
            <Navbar expand="lg" variant='dark' bg='dark'>
                <Container fluid>
                    <Link to="/"> 
                    <img width={100} src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg" alt="logo" />
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='nav-area'>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '120px' }}
                            navbarScroll
                        >
                            <Link to="/" className='nav-item'>Home</Link>
                            {/* <Link to="/tvs" className='nav-item'>Movies</Link> */}
                            <Link to="/today" className='nav-item'>Today</Link>
                            <Link to="/tvrate" className='nav-item'>Rate</Link>
                            <Link to="/popular" className='nav-item'>Popular</Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-danger">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
     )
}

export default Navigation