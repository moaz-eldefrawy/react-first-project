import React, { useEffect } from 'react';
import { Button, Container, Row, Jumbotron } from 'react-bootstrap';
import CustomNavbar from '../reusable-components/CustomNavbar';
import './HomePage.css'

export default function HomePage() {

    useEffect(() => {
        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(pos => {
                console.log(pos.coords);
            })

        }
    }
    )

    return (
        
        <div >
            <CustomNavbar />
            <Jumbotron>
                <h1>CareTaker</h1>
                <p>
                    Using IoMT technology to protect our loved ones. 
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </div>
    )
}