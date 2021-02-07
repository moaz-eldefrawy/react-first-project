import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import CustomNavbar from '../reusable-components/CustomNavbar';

export default function HomePage() {

    return (
        <div>
            <CustomNavbar />
            <Container>
                <Row>
                    <Button variant='primary' size='lg' block>a</Button>
                </Row>
                <Row>
                    <Button variant='primary' size='lg' block>a</Button>
                </Row>
                <Row>
                    <Button variant='primary' size='lg' block>a</Button>
                </Row>
            </Container>
        </div>
    )
}