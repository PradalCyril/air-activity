import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import logoJPG from './svg/IMG_2025.JPG'
// import logoSVG from './svg/air-activity-slim.svg'
import HomePage from './components/HomePage';
import Booking from './components/Booking';

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'column', height:400}}>
         <img src={logoJPG} className="App-logo" alt="logo" />
         {/* <img src={logoSVG} className="App-logo" alt="logo" /> */}
      </div>
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <Redirect
              to='/home'
            />
          )}
        />
        <Route path='/home' component={HomePage} />
        <Route path='/booking' component={Booking} />
      </Switch>
    </div>
  );
}

export default App;
