import React from 'react';
import ReactDOM from 'react-dom'
import formatArrayOfTimes from '../../utils/formatTime.js'


const DailyHours = (props) => {
    return (
        <div>
            <div className = 'dayOFWeek' >{props.hours[0]}:</div> 
            <div className = 'divider' ></div>
            <div className = 'dailyHours'>{props.hours[1].map(openTime=>(
         formatArrayOfTimes(openTime))).map(hours=>(
             <div>{hours}</div>
         ))}

            </div>
        </div>
    )
}

export default DailyHours;