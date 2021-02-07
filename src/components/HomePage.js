import React, { useEffect } from 'react';
import { Button, Container, Row, Jumbotron } from 'react-bootstrap';
import CustomNavbar from '../reusable-components/CustomNavbar';

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
        <div>
            <CustomNavbar />
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </div>
    )
}