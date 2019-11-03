import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RegisterPlayer from './RegisterPlayers';
import NumberPlayers from './NumberPlayers';

const Booking = () => (
  <div className='booking'>
    <Switch>
      <Route
        exact
        path='/booking/register'
        render={() => (
          <Redirect
            to={`/booking/register/3`}
          />
        )}
      />
      <Route exact path='/booking' component={NumberPlayers} />
      <Route path='/booking/register/:numberPlayer' component={RegisterPlayer} />
      {/* <Route path='/booking/?' component={} /> */}
    </Switch>
  </div>
);

export default Booking;