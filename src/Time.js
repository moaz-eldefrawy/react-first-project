import React from 'react'

function Time(time) {
    return (
        <div style={{margin:"20px"}}>
            <input type="time" value={time}/>
        </div>
    )
}

export default Time
