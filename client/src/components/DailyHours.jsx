import React from 'react';
import ReactDOM from 'react-dom'
import { PromiseProvider } from 'mongoose';


const DailyHours = (props) => {
    return (
        <div>
        
         {props.hours[0]}:
         {/* {props.hours[1].map(openTime=>(<span>{openTime}</span>))} */}
     
        </div>
    )
}

export default DailyHours;