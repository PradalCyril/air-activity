import React from 'react';
import { Link, withRouter } from 'react-router-dom'; 
import './index.scss';
import { translate } from '../../translate/translate';

const Navbar = (props, context) => {
  let pathname = props.location.pathname;
  if(pathname !== '/'){
    pathname = pathname.split('/', 2)
  }
  const classNameHome = pathname[1] === 'home' ? 'nav-link active' : 'nav-link';
  const classNameActivity = pathname[1] === 'activity' ? 'nav-link active' : 'nav-link';
  const classNameBooking = pathname[1] === 'booking' ? 'nav-link active' : 'nav-link';
  const classNameTeam = pathname[1] === 'teams' ? 'nav-link active' : 'nav-link';
return(
  <div className='navbar-container'>
    <Link className ={classNameHome} to='/'><p className='text-link'>{translate(props.language, 'home')}</p></Link>
    <Link className ={classNameActivity} to='/'><p className='text-link'>{translate(props.language, 'activity')}</p></Link>
    <Link className ={classNameBooking} to='/booking'><p className='text-link'>{translate(props.language, 'booking')}</p></Link>
    <Link className ={classNameTeam} to='/'><p className='text-link'>{translate(props.language, 'team')}</p></Link>
  </div>
)
}

export default withRouter(Navbar);