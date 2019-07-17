import React from 'react';
import ReactDOM from 'react-dom'
import DailyHours from './DailyHours.jsx'

const WeeklyHours = (props) => {
    if(typeof(props.hours) !== 'string'){
        return (
            <div>
                {console.log(Object.entries(props.hours))}
                {Object.entries(props.hours).map((day)=>{
                    return(
                        <div> 
                            <DailyHours hours = {day} key = {day[0]}/>
                        </div> 
                    )
                })
                }
            </div>
        )
    }
    return <div></div>
}

export default WeeklyHours;