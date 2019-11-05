import React from 'react';
import ReactDOM from 'react-dom'
import DailyHours from './DailyHours.jsx'

const WeeklyHours = (props) => {
    if(typeof(props.hours !== 'string'))
    return (
        <div>
        {Object.entries(props.hours).map((day)=>{
            return(
                <div>
                <DailyHours hours = {day} key = {day[0]}/>
            </div> 
            )
        })}
        </div>
    )
}

export default WeeklyHours;