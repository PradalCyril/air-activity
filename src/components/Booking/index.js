import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RegisterPlayer from './RegisterPlayers';

const Booking = () => (
  <div className='booking'>
    <Switch>
      <Route
        exact
        path='/booking'
        render={() => (
          <Redirect
            to={`/booking/register/3`}
          />
        )}
      />
      <Route
        exact
        path='/booking/register'
        render={() => (
          <Redirect
            to={`/booking/register/3`}
          />
        )}
      />
      {/* <Route path='/booking/list' component={ChooseActivity} /> */}
      <Route path='/booking/register/:numberPlayer' component={RegisterPlayer} />
      {/* <Route path='/booking/?' component={} /> */}
    </Switch>
  </div>
);

export default Booking;