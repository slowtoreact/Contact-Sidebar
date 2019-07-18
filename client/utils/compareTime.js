

const compareTime = (currentTime, timeString) => {
    if(timeString === ''){
        return false
    }
    let currentHour = currentTime[1]
    let currentMinute = currentTime[2]
    let openHour = timeString.split('-')[0].split(':')[0]
    let openMinute = timeString.split('-')[0].split(':')[1]
    let closeHour = timeString.split('-')[1].split(':')[0]
    let closeMinute = timeString.split('-')[1].split(':')[1]
    return (currentHour >= openHour && currentHour <= closeHour && currentMinute >= openMinute && currentMinute <= closeMinute)
}

export default  compareTime