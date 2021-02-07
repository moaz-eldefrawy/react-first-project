import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function CustomNavbar() {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
                <Nav.Link><Link to='/summary'>Summary</Link></Nav.Link>
                <Nav.Link><Link to='/Medication'>Medication</Link></Nav.Link>
            </Nav>
            
            <Nav inline>
                <Nav.Link><Link to='/signup'>sign-up</Link></Nav.Link>
                <Nav.Link href="#features"><Link to='/signin'>sign-in</Link></Nav.Link>
            </Nav>
            
        </Navbar>
    )
}