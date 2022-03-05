import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import HomeImage from './assets/images/Home.png';
import Arrow from './assets/images/Vector.svg';

import { BrowserRouter as Router, Switch, 
  Route, Redirect,Link} from "react-router-dom";

  import EventContainer from './components/EventContainer';

function App() {

  const [isShowCalender, setisShowCalender] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        {!isShowCalender ? <EventContainer /> : 
        <div className='mainMenu'>
        <div className='calenderContainer'>
          Calendar <span className='calenderYear'>2021</span>
        </div>
        <div>
            <img src = {HomeImage}   className='imageContainer' />
        </div>
        <div className='profileInfoContainer'>
          <h3 className='header'>Hi Bushra,</h3>
          <p className='paragraphContainer'>Welcome to your daily event calendar. Be more engaging & personalised than ever before. We’ll help you in Tracking Upcoming Events, Scheduling Meetings & Creating New Event!</p>
          <a onClick={() => setisShowCalender(!isShowCalender)}><div className='ecclipse'><img src = {Arrow} className='arrow' /></div></a>
        </div>
      </div> 
      }
        
      </header>
    </div>
  );
}

export default App;
