import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { translate } from '../../translate/translate';
import './index.scss';

const Activities = (props) => {
    const language = useSelector(state => state.user.language)
    const [activities, setActivities] = useState({text: ''
        , isActive: ''})
    return (<div className='activities-container'>
        <div className='activities-List'>
            <div
                className='no-decoration btn-activities-booking-taille'
                onClick={() => setActivities({text: 'escapeText', isActive: 'active'})}
            >
                <div className='activities-display-text'>
                    <h4 className='activities-title'>{translate(language, 'escapeName')}</h4>
                    <p>{translate(language, 'seeMore')}</p>
                </div>
            </div>
            <div
                className='no-decoration btn-activities-booking-taille'
                onClick={() => setActivities({text: 'laserText', isActive: 'active'})}
            >
                <div className='activities-display-text'>
                    <h4 className='activities-title'>{translate(language, 'laserName')}</h4>
                    <p>{translate(language, 'seeMore')}</p>
                </div>
            </div>
            <div
                className='no-decoration btn-activities-booking-taille'
                onClick={() => setActivities({text: 'guidedtourText', isActive: 'active'})}
            >
                <div className='activities-display-text'>
                    <h4 className='activities-title'>{translate(language, 'guidedtourName')}</h4>
                    <p>{translate(language, 'seeMore')}</p>
                </div>
            </div>
        </div>
        <div className={`no-active ${activities.isActive}`}>
            {translate(language, activities.text)}
        </div>
    </div>
    )
}
export default withRouter(Activities);