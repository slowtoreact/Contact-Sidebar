

const compareTime = (currentTime, timeStringArray) => {
    if(timeStringArray[0] === ''){
        return false
    }
    timeStringArray.forEach( (timeString) => {
        let currentHour = currentTime[1]
        let currentMinute = currentTime[2]
        let openHour = timeString.split('-')[0].split(':')[0]
        let openMinute = timeString.split('-')[0].split(':')[1]
        let closeHour = timeString.split('-')[1].split(':')[0]
        let closeMinute = timeString.split('-')[1].split(':')[1]
        if (currentHour >= openHour && currentHour <= closeHour && currentMinute >= openMinute && currentMinute <= closeMinute) {
            return true
        }
    })
    return false
}

export default  compareTime