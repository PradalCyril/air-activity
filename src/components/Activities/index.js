import React, {useState} from 'react';
import {withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { translate } from '../../translate/translate';
import './index.scss';
import Activity from '../Booking/ChooseActivity/Activity';

const Activities = (props) => {
    const language = useSelector(state => state.user.language)
   const [activity, setActivity] = useState('')
    return (<div className='activities-container'>
        <div className='activity-List'>
            <div
                className='no-decoration btn-activity-booking-taille'
                onClick={()=> setActivity('escapeText')}
            >
                <Activity
                    type='escapegame'
                    title={
                        translate(language, 'escapeName')
                    }
                    text={
                        translate(language, 'seeMore')
                    }
                />
            </div>
            <div
                className='no-decoration btn-activity-booking-taille'
                onClick={()=> setActivity('laserText')}
            >
                <Activity
                    type='lasergame'
                    title={
                        translate(language, 'laserName')
                    }
                    text={
                        translate(language, 'seeMore')
                    }
                />
            </div>
            <div
                className='no-decoration btn-activity-booking-taille'
                onClick={()=> setActivity('guidedtourText')}
            >
                <Activity
                type='guidedtour'
                    title={
                        translate(language, 'guidedtourName')
                    }
                    text={
                        translate(language, 'seeMore')
                    } />
            </div>
        </div>
        <div>
            {translate(language, activity)}
        </div>
    </div>
    )
}
export default withRouter(Activities);