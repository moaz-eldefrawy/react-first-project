import React from 'react'
import Form from "react-bootstrap/Form"

const dayName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ,"Sunday"]

function Med({medication}) {

    return (
        <div className ="">
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Medication Name:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Day</Form.Label>
                    <Form.Control as="select">
                    <option>Saturday</option>
                    <option>Sundary</option>
                    <option>Monday</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Example multiple select</Form.Label>
                    <Form.Control as="select" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <h1> {medication.name} </h1>
            <h3> day: {dayName[medication.day]} </h3>
            <h3> time: {medication.time} </h3>
        </div>
    )
}




export default Med
