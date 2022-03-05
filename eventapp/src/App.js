import logo from './logo.svg';
import './App.css';
import HomeImage from './assets/images/Home.png';
import Arrow from './assets/images/Vector.svg';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='mainMenu'>
          <div className='calenderContainer'>
            Calendar <span className='calenderYear'>2021</span>
          </div>
          <div>
              <img src = {HomeImage}   className='imageContainer' />
          </div>
          <div className='profileInfoContainer'>
            <h3 className='header'>Hi Mastan!</h3>
            <p className='paragraphContainer'>Welcome to your daily event calendar. Be more engaging & personalised than ever before. We’ll help you in Tracking Upcoming Events, Scheduling Meetings & Creating New Event!</p>
            <div className='ecclipse'><img src = {Arrow} className='arrow' /></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
