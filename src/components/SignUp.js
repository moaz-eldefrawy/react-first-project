import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from './AuthProvider';
import { Link } from 'react-router-dom';
import './Sign.css'
import CustomNavbar from '../reusable-components/CustomNavbar';

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { handleSignUp } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            setLoading(false);
            return setError('Passwords do not match!');
        }
        try {
            setError('');
            setLoading(true);
            await handleSignUp(emailRef.current.value, passwordRef.current.value);
            console.log('kolo 100 100');
        } catch (err) {
            setError("kolo sharafanta7");
        }
        setLoading(false);
    }

    return (
        <>
        <CustomNavbar/>
       <div className='flex-container'>
            <Card className='form-card'>
                <Card.Body>
                    <h2 className="text-center mb-4">SignUp</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>

                        <Form.Group id="confirm-password">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={confirmPasswordRef} required />
                        </Form.Group>

                        <Form.Group controlId="user-role">
                            <Form.Label>Use as: </Form.Label>
                            <Form.Control as="select">
                                <option>Elder</option>
                                <option>Caretaker</option>
                            </Form.Control>
                        </Form.Group>

                        <Button type="submit" className="w-100" disabled={loading}>SignUp!</Button>
                    </Form>
                </Card.Body>
            </Card>

            <div className="w-100 text-center m-2">
                Already have an account?
                <Link to="/login"> Login</Link>
            </div>
        </div>
        </>
    )
}