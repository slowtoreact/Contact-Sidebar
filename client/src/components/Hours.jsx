import React from 'react';
import ReactDOM from 'react-dom'


const Hours = (props) => {
    return (
        <div onClick = {()=>(props.clickHandler())}>
            {/* toggles based on current time vs hrs of operation */}
            <span>OPEN NOW</span>
            <span>·</span>
        </div>
    )
}

export default Hours;