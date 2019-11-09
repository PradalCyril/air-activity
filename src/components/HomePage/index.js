import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import './index.scss';
import Carousel from './Carousel';
import {translate} from '../../translate/translate'; 

class HomePage extends Component {
  render() {
    return (
      <div className='home-container'>
        <p style={{textAlign:'center'}}>{translate(this.props.language, 'definitionAirActivity1')}</p>
        <p style={{textAlign:'center'}}>{translate(this.props.language, 'definitionAirActivity2')}</p>
        <p style={{textAlign:'center'}}>{translate(this.props.language, 'definitionAirActivity3')}</p>
        <Carousel />
        <Link className='booking-link' to='/booking/select-activities'>{translate(this.props.language, 'bookingBtnHomePage')}</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  language: state.user.language
});

export default withRouter(connect(mapStateToProps)(HomePage));
