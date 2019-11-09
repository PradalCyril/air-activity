import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import RegisterPlayer from './RegisterPlayers';
import NumberPlayers from './NumberPlayers';
import ChooseActivity from './ChooseActivity';
import SelectDate from './SelectDate';

const Booking = () => (
  <div className='booking'>
    <Switch>
    <Route
      exact
        path='/booking'
        render={() => (
          <Redirect
            to={`/booking/select-activities`}
          />
        )}
      />
      <Route
        path='/booking/select-date'
        render={() => (
          <Redirect
            to={`/booking/select-activities`}
          />
        )}
      />
      <Route
        path='/booking/register'
        render={() => (
          <Redirect
            to={`/booking/select-activities`}
          />
        )}
      />
      <Route path='/booking/select-activities' component={ChooseActivity} />
      <Route path='/booking/:activity/select-date' component={SelectDate} />
      <Route exact path='/booking/:activity/:hour/register' component={NumberPlayers} />
      <Route path='/booking/:activity/:hour/register/:numberPlayer' component={RegisterPlayer} />
      {/* <Route path='/booking/?' component={} /> */}
    </Switch>
  </div>
);

export default withRouter(Booking);