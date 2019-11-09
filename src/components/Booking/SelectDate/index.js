import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import './index.scss';
import { translate } from '../../../translate/translate';

const dayName = {
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
    0: 'sunday'

}
const monthName = {
    0: 'january',
    1: 'february',
    2: 'march',
    3: 'april',
    4: 'may',
    5: 'june',
    6: 'july',
    7: 'august',
    8: 'september',
    9: 'october',
    10: 'november',
    11: 'december'
}


const SelectDate = (props) => {
    const dispatch = useDispatch();
    const language = useSelector(state => state.user.language)
    const activity = props.match.params.activity
    const [daySelected, setDaySelected] = useState({ selected: false, day: '' });
    const dateDay = new Date();
    let dateList = [];
    for (let i = 0; i < 7; i++) {
        const afterDay = new Date(dateDay);
        afterDay.setDate(afterDay.getDate() + i);
        let newDate = afterDay.getDate();
        newDate = newDate < 10 ? '0' + newDate : `${newDate}`
        let newMonth = afterDay.getMonth();
        newMonth = monthName[newMonth];
        let newDay = afterDay.getDay();
        newDay = dayName[newDay];
        dateList.push((
            <div className='calendar-date' key={i} onClick={() => {
                dispatch({ type: 'SELECT_DATE', payload: { date: newDate, month: newMonth, day: newDay } });
                setDaySelected({ selected: true, day: newDay })
            }
            }>
                <p className='no-margin'>{translate(language, newDay)}</p>
                <p className='date-size no-margin'>{newDate}</p>
                <p className='no-margin'>{translate(language, newMonth)}</p>
            </div>
        ));
    }

    const renderButton = (hour) => (
        <Link to={`/booking/${props.match.params.activity}/${hour}/register`} onClick={() => dispatch({ type: 'SELECT_HOUR', payload: { hour: hour } })}>
            <p className='date-size no-margin'>{hour}</p>
        </Link>)

    const activityDay = {
        lasergame: {
            monday: [(renderButton('14h00')), renderButton('16h00'), renderButton('18h00')],
            tuesday: [renderButton('14h00'), renderButton('16h00'), renderButton('18h00'), renderButton('20h00')],
            wednesday: [renderButton('14h00'), renderButton('16h00'), renderButton('18h00')],
            thursday: [renderButton('14h00'), renderButton('16h00'), renderButton('18h00'), renderButton('20h00')],
            friday: [renderButton('14h00'), renderButton('16h00'), renderButton('18h00'), renderButton('20h00')],
            saturday: [renderButton('14h00'), renderButton('16h00'), renderButton('18h00')],
            sunday: [renderButton('14h00'), renderButton('16h00'), renderButton('18h00')]
        },
        escapegame: {
            monday: [renderButton('14h00'), renderButton('16h00'), renderButton('18h00')],
            tuesday: [renderButton('10h00'), renderButton('14h00'), renderButton('16h00'), renderButton('18h00')],
            wednesday: [renderButton('14h00'), renderButton('16h00'), renderButton('18h00')],
            thursday: [renderButton('14h00'), renderButton('16h00'), renderButton('18h00')],
            friday: [renderButton('10h00'), renderButton('14h00'), renderButton('16h00'), renderButton('18h00')],
            saturday: [renderButton('14h00'), renderButton('16h00'), renderButton('18h00')],
            sunday: [renderButton('14h00'), renderButton('16h00'), renderButton('18h00')]
        },
        guidedtour: {
            monday: [renderButton('9h00'), renderButton('11h00'), renderButton('14h00')],
            tuesday: [renderButton('9h00'), renderButton('11h00'), renderButton('14h00')],
            wednesday: [renderButton('9h00'), renderButton('11h00'), renderButton('14h00')],
            thursday: [renderButton('9h00'), renderButton('11h00'), renderButton('14h00')],
            friday: [renderButton('9h00'), renderButton('11h00'), renderButton('14h00')],
            saturday: [renderButton('9h00'), renderButton('11h00'), renderButton('14h00')],
            sunday: [renderButton('9h00'), renderButton('14h00')]
        }

    }
    const activityHours = (activity = 'lasergame', day) => {
        let activityList = activityDay[activity];
        return activityList[day];
    }
    const activityList = activityHours(activity, daySelected.day);
    return (<div>
        <div className='calendar-container'>
            {dateList}
        </div>
        <div className='calendar-hour'>
            {daySelected.selected && activityList}
        </div>
    </div>
    )
}

export default withRouter(SelectDate);