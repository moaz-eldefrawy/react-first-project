import React from 'react'
import { useState } from 'react'
import Med from './Med'

const Medications_ = [
    {
        name: "med1",
        day: 0,
        time: "10:30"
    }
]


function Medication() {
    const [Medications, setstateMedications] = useState(Medications_)
    return (
        <div className="container">
        {
            Medications.map( (medication) => {
                return <Med medication={medication} />
            } )    
        }  
        </div>
    )
}

export default Medication
