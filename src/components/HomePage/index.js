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
        <h3 className='section-title' >Vos escales sont trop longues ? </h3>
        <p style={{textAlign:'center', color:'black'}}>{translate(this.props.language, 'definitionAirActivity1')}</p>
        <p style={{textAlign:'center', color:'black'}}>{translate(this.props.language, 'definitionAirActivity2')}</p>
        <p style={{textAlign:'center', color:'black'}}>{translate(this.props.language, 'definitionAirActivity3')}</p>
        <Carousel />
        <Link className='booking-link' to='/booking/check-escale'>{translate(this.props.language, 'bookingBtnHomePage')}</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  language: state.user.language
});

export default withRouter(connect(mapStateToProps)(HomePage));
