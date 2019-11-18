import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { translate } from '../../translate/translate';
import fleche from '../../svg/fleche.svg';
import escape from '../../svg/image11.jpg';
import laser from '../../svg/image10.jpg';
import guided from '../../svg/image13.jpg';
import './index.scss';

const Activities = (props) => {
    const language = useSelector(state => state.user.language)
    const [activities, setActivities] = useState({
        escapetext: 'escapeText'
        , lasertext: 'laserText', guidetext: 'guidedtourText'
    })
    return (<div className='activities-container'>
        <h3 className='section-title'>{translate(language, 'activityDescription')}</h3>
        <div className='activities-List'>
            <div
                className='no-decoration btn-activities-booking-taille-1'
            >
                <div className='activities-display-text'>
                        <img className='image-resize' src={escape} alt="escape"/>
                    <h3 className='activities-title'>{translate(language, 'escapeName').toUpperCase()}</h3>
                    <div className='escape-option'>
                        <p>{translate(language, `${activities.escapetext}1` || 'seeMore')}</p>
                        <p>{translate(language, `${activities.escapetext}2` || 'seeMore')}</p>
                        <p>{translate(language, `${activities.escapetext}3` || 'seeMore')}</p>
                    </div>
                </div>
            </div>
            <div
                className='no-decoration btn-activities-booking-taille-2'
            >
                <div className='activities-display-text'>
                <img className='image-resize' src={laser} alt="laser"/>
                    <h3 className='activities-title'>{translate(language, 'laserName').toUpperCase()}</h3>
                    <div className='laser-option'>
                        <p>{translate(language, `${activities.lasertext}1` || 'seeMore')}</p>
                        <p>{translate(language, `${activities.lasertext}2` || 'seeMore')}</p>
                        <p>{translate(language, `${activities.lasertext}3` || 'seeMore')}</p>
                    </div>
                </div>
            </div>
            <div
                className='no-decoration btn-activities-booking-taille-3'
            >
                <div className='activities-display-text'>
                <img className='image-resize' src={guided} alt="guided"/>
                    <h3 className='activities-title'>{translate(language, 'guidedtourName').toUpperCase()}</h3>
                    <p>{translate(language, `${activities.guidetext}1` || 'seeMore')}</p>
                    <div className='guide-tour-option'>
                        <p style={{paddingLeft: 20, display:'flex', alignItems:'center'}}><img style={{width: 12, marginRight: 5}} src={fleche} alt='fleche'/>{translate(language, `${activities.guidetext}2` || 'seeMore')}</p>
                        <p style={{paddingLeft: 20, display:'flex', alignItems:'center'}}><img style={{width: 12, marginRight: 5}} src={fleche} alt='fleche'/>{translate(language, `${activities.guidetext}3` || 'seeMore')}</p>
                        <p style={{paddingLeft: 20, display:'flex', alignItems:'center'}}><img style={{width: 12, marginRight: 5}} src={fleche} alt='fleche'/>{translate(language, `${activities.guidetext}4` || 'seeMore')}</p>
                        <p style={{paddingLeft: 20, display:'flex', alignItems:'center'}}><img style={{width: 12, marginRight: 5}} src={fleche} alt='fleche'/>{translate(language, `${activities.guidetext}5` || 'seeMore')}</p>
                        <p style={{paddingLeft: 20, display:'flex', alignItems:'center'}}><img style={{width: 12, marginRight: 5}} src={fleche} alt='fleche'/>{translate(language, `${activities.guidetext}6` || 'seeMore')}</p>
                        <p style={{ display:'flex', alignItems:'center'}}>{translate(language, `${activities.guidetext}7` || 'seeMore')}</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
}
export default withRouter(Activities);