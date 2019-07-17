import React from 'react';
import ReactDOM from 'react-dom';
import Hours from './Hours.jsx';
import Location from './Location.jsx';
import Phone from './Phone.jsx';
import WebLink from './WebLink.jsx';
import Directions from './Directions.jsx';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          currentRestaurant: 'VENICE ITALIAN RESTAURANT',
          restaurantData: null,
          dailyHoursHidden: true
      }
    }

      componentDidMount() {
        this.loadRestaurant (this.setRestaurantData.bind(this));
      }
     
      setRestaurantData(data) {
        this.setState({
          restaurantData: data[0]
        });
      }
    
      loadRestaurant(cb) {
        axios.get(`api/contact/${this.state.currentRestaurant}`)
          .then(function (response) {
            console.log(response), 'first .then';
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
                    <Hours hours={this.state.restaurantData && this.state.restaurantData.hoursOpen || 'Loading'}
                      clickHandler = {this.handleHoursClick.bind(this)}
                      isHidden = {this.state.dailyHoursHidden}
                    />
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