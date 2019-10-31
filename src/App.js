import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import './App.css';
import logoJPG from './svg/IMG_2025.JPG'
// import logoSVG from './svg/air-activity-slim.svg'
import HomePage from './components/HomePage';
import Booking from './components/Booking';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <div className='header-container'>
        <img src={logoJPG} className="App-logo" alt="logo" />
        {/* <img src={logoSVG} className="App-logo" alt="logo" /> */}
        <div>
          <button type='language'>France-FR</button>
          <Link to='/'>nous contacter </Link>
        </div>
      </div>
      <Navbar />
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
