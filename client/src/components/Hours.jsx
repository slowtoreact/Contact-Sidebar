import React from 'react';
import ReactDOM from 'react-dom'
import WeeklyHours from './WeeklyHours.jsx'

const Hours = (props) => {
    return (
        <div>
            {/* toggles based on current time vs hrs of operation */}
            <span>OPEN NOW</span>
            <span>·</span>
            <div>
                <WeeklyHours hours = {props.hours}/>
            </div>
        </div>
    )
}

export default Hours;