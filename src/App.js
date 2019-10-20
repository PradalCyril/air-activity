import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
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
      </Switch>
    </div>
  );
}

export default App;
