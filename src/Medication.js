import React from 'react'
import { useState } from 'react'
import Med from './Med'
import CustomNavbar from './reusable-components/CustomNavbar'

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
        <>
        <CustomNavbar />
        <div className="container">
        {
            Medications.map( (medication) => {
                return <Med medication={medication} />
            } )    
        }  
        </div>
        </>
    )
}

export default Medication
