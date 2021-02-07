import React from 'react'
import Form from "react-bootstrap/Form"
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Time  from "./Time";

const dayName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ,"Sunday"]

function Med({medication}) {

    
    return (
        <div className="border shadow" style={{background:"white", margin: "20px"}}>
            
            <h1> {medication.name} </h1>
            <h3> day: {dayName[medication.day]} </h3>
            <h3> time: {medication.time} </h3>
        </div>
    )
}


export default Med
