import React from 'react';
import ReactDOM from 'react-dom';
import Hours from './Hours.jsx';
import Location from './Location.jsx';
import Phone from './Phone.jsx';
import WebLink from './WebLink.jsx';
import Directions from './Directions.jsx';
import axios from 'axios';
import WeeklyHours from './WeeklyHours.jsx'

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          currentRestaurant: 'VENICE ITALIAN RESTAURANT',
          restaurantData: null,
          dailyHoursHidden: true,
          dayAndTime: []
      }
    }

      componentDidMount() {
        this.setDate()
        this.loadRestaurant (this.setRestaurantData.bind(this));
      }
     
      setDate() {
        let now = new Date()
        let time = [];
        time.push(now.getDay())
        time.push(now.getHours())
        time.push(now.getMinutes())
        this.setState({
          dayAndTime: time
        }) 
      }

      loadTime(cb){
        cb()
      }

      setRestaurantData(data) {
        this.setState({
          restaurantData: data[0]
        });
      }
    
      loadRestaurant(cb) {
        axios.get(`api/contact/${this.state.currentRestaurant}`)
          .then(function (response) {
            cb(response.data);
          });
        }
        
        toggleDailyHours () {
          this.setState({
            dailyHoursHidden: !this.state.dailyHoursHidden
          })
        }

        handleHoursClick() {
           this.toggleDailyHours()
        }
    render(){
        return(
            <div>
                <div>
                    <Hours 
                      clickHandler = {this.handleHoursClick.bind(this)}
                      dayAndTime = {this.state.dayAndTime}
                    />
                </div>
                <div>
                {!this.state.dailyHoursHidden && <WeeklyHours hours={this.state.restaurantData && this.state.restaurantData.hoursOpen || 'Loading'}/>}
            </div>
                <div>
                    <Location />
                </div>
                <div>
                    <Phone />
                </div>
                <div>
                    <WebLink />
                </div>
                <div>
                    <Directions />
                </div>
            </div>
        )
    }
}

export default App