import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function CustomNavbar() {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Location</Nav.Link>
                <Nav.Link href="/summary">Summary</Nav.Link>
                <Nav.Link href="#pricing">Devices</Nav.Link>

                <div style={{float:'right'}}>
                    
                </div>
            </Nav>

            <Nav>
            <Nav.Link href="/login">Sign In</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
            
        </Navbar>
    )
}