import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './index.scss';
import Carousel from './Carousel';
import {translate} from '../../translate/translate'; 

class HomePage extends Component {
  render() {
    return (
      <div className='home-container'>
        <p style={{textAlign:'center'}}>{translate(this.props.language, 'definitionAirActivity')}</p>
        <Carousel />
        <Link className='booking-link' to='/booking'>{translate(this.props.language, 'bookingBtnHomePage')}</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  language: state.user.language
});

export default connect(mapStateToProps)(HomePage);
