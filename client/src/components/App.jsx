import React from 'react';
import ReactDOM from 'react-dom';
import Hours from './Hours.jsx';
import Location from './Location.jsx';
import Phone from './Phone.jsx';
import WebLink from './WebLink.jsx';
import Directions from './Directions.jsx';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
      }
    }
    render(){
        return(
            <div>
                <div>
                    <Hours />
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