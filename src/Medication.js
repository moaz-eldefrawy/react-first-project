import React from 'react'
import { useState } from 'react'
import Med from './Med'
import CustomNavbar from './reusable-components/CustomNavbar'
import Button from 'react-bootstrap/Button'

import Form from "react-bootstrap/Form"
import Time  from "./Time";

const Medications_ = [
    {
        name: "Panadol",
        day: 0,
        time: "10:30 PM"
    },
  
    {
        name: "Migranil",
        day: 0,
        time: "4:30 PM"
    }
]

const dayName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ,"Sunday"]



function Medication() {
    const [Medications, setstateMedications] = useState(Medications_)
    const [addMedicationForm, setAddMedicationForm] = useState(false);

    const [name, setName] = useState("")
    const [days, setDays] = useState([]);
    const [time, setTime] = useState([]);


    const addMed = (e) => {
        var medication = {
            name: name,
            days: days,
            time: time
        }
        console.log(medication)
        setstateMedications([ ...Medications, medication ])
        return 0;
    }

    const addTime = (e) => {
        e.preventDefault();
        console.log("time",e.target.value);
        setTime( [...time, "00:00"] )
    }

    return (
        <div>
        <CustomNavbar />
        <div className="" style={{width:"80%", margin:"50px auto"}} >
        <div>
            <Button variant='success' onClick={ () => { setAddMedicationForm(!addMedicationForm) } } >Add Medication</Button>
        </div>
        <br></br>
        {
            addMedicationForm? 
        <Form >
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label><h4>Medication Name:</h4></Form.Label>
                    <Form.Control type="text" placeholder="add med name" 
                    value=  {name} onChange = { (e) => setName(e.target.value) } />
                    
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
                <Button variant='outline-success' onClick={addMed}>Submit</Button>
            </Form> : ""

        }
        <br/>
        <hr/>
        
        {
            Medications.map( (medication) => {
                return <Med medication={medication} />
            } )    
        }

        </div>
        </div>
    )
}

export default Medication
