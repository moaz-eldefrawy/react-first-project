import React, {useState, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';

export default function Notifications() {

    const [notifs, setNotifs] = useState([55, 66, 77, 88, 99]);
    let i = 0;
    useEffect(() => {
        setInterval(() => {
            // Do API CALL
            setNotifs(prevNotifs => [newNotifs, ...prevNotifs])
        }, 1000);
    }, [])

    return (
        <Container>
            {notifs.map((notif, index) => <Row key={index}>{notif}</Row>)}
        </Container>
    )
}