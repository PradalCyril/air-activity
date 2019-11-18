import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { translate } from '../../../translate/translate';
import './index.scss';
import Activity from './Activity';

const ChooseActivity = (props) => {
    const dispatch = useDispatch()
    const language = useSelector(state => state.user.language)
    const activityChoosed = (activity) => {
        dispatch({ type: 'ACTIVITY_CHOOSED', payload: activity })
    }
    return (<div className='activities-container'>
        <h3 className='no-decoration section-title'>{translate(language, 'selectActivity')}</h3>
        <div className='activity-List'>
            <Link
                className='no-decoration btn-activity-booking-taille'
                onClick={
                    () => activityChoosed('escapegame')
                }
                to='/booking/escapegame/select-date'
            >
                <Activity
                    type='escapegame'
                    title={
                        translate(language, 'escapeName')
                    }
                    text={
                        translate(language, 'escapeText')
                    }
                />
            </Link>
            <Link
                className='no-decoration btn-activity-booking-taille'
                onClick={
                    () => activityChoosed('lasergame')
                }
                to='/booking/lasergame/select-date'
            >
                <Activity
                    type='lasergame'
                    title={
                        translate(language, 'laserName')
                    }
                    text={
                        translate(language, 'laserText')
                    }
                />
            </Link>
            <Link
                className='no-decoration btn-activity-booking-taille'
                onClick={
                    () => activityChoosed('guidedtour')
                }
                to='/booking/guidedtour/select-date'
            >
                <Activity
                type='guidedtour'
                    title={
                        translate(language, 'guidedtourName')
                    }
                    text={
                        translate(language, 'guidedtourText')
                    } />
            </Link>
        </div>
    </div>
    )
}
export default withRouter(ChooseActivity);