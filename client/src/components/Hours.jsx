import React from 'react';
import ReactDOM from 'react-dom'
import WeeklyHours from './WeeklyHours.jsx'

const Hours = (props) => {
    return (
        <div onClick = {()=>(props.clickHandler())}>
            {/* toggles based on current time vs hrs of operation */}
            <span>OPEN NOW</span>
            <span>·</span>
            <div>
                {!props.isHidden && <WeeklyHours hours = {props.hours}/>}
            </div>
        </div>
    )
}

export default Hours;