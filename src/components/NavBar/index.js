import React from 'react';
import { Link } from 'react-router-dom'; 
import './index.scss';

const Navbar = (props, context) => {
return(
  <div className='navbar-container'>
    <Link className ='nav-link' to='/'><p className='text-link'>Accueil</p></Link>
    <Link className ='nav-link' to='/'><p className='text-link'>Actualités</p></Link>
    <Link className ='nav-link' to='/booking'><p className='text-link'>Reserver</p></Link>
    <Link className ='nav-link' to='/'><p className='text-link'>L'équipe</p></Link>
  </div>
)
}

export default Navbar;