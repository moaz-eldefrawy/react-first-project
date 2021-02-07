import React from 'react'
import Form from "react-bootstrap/Form"
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Time  from "./Time";

const dayName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ,"Sunday"]

function Med({medication}) {

    const [name, setName] = useState("")
    const [days, setDays] = useState([]);
    const [time, setTime] = useState([]);

    const addTime = (e) => {
        console.log("time",e.target.value);
        setTime( [...time, "00:00"] )
    }

    return (
        <div className="">
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label><h4>Medication Name:</h4></Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" 
                    value={name} onChange = { (e) => setName(e.target.value) } />
                    
                </Form.Group>
                
                <Form.Group controlId="formBasicCheckbox">
                    {
                        dayName.map( (day) => {
                            return <Form.Check type="checkbox" label={day} /> 
                        } )
                    }
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <h3>Times:</h3>
                    <Button onClick={addTime}>Add Time:</Button>
                    {
                        time.map( (time_,index) => {
                            console.log(index)
                           return <Time key={index} time={time_} 
                           onChange = {(e) => {
                               console.log("change")
                               console.log(e.target)
                               setTime( 
                                   time.map((time_,index_) => {
                                    console.log("target",e.target)
                                    console.log("key",e.target.key)
                                    if(index == e.target.key){
                                        return e.target.value
                                    }
                                    else {
                                        return time_
                                    }
                                    
                                    })
                                )
                           }}
                           />
                        } )
                    }
                </Form.Group>

                
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label><h4>Description:</h4></Form.Label>
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
