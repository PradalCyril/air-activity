import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { translate } from '../../../translate/translate';
import './index.scss';

const NumberPlayer = (props) => {
    const [count, setCount] = useState({ price: 0, players: 0 });
    const language = useSelector(state => state.user.language)
    const getPrice = {
        lasergame: {
            1: 15,
            2: 28,
            3: 39,
            4: 48,
            5: 50
        },
        escapegame: {
            1: 30,
            2: 58,
            3: 84,
            4: 108,
            5: 125
        },
        guidedtour: {
            1: 10,
            2: 20,
            3: 30,
            4: 40,
            5: 50
        }
    }
    const display = count.players === 5 ? `+ ${count.players && count.price / count.players}€ par joueurs supplémentaires` : ''
    return (<div className='number-container'>
        <div className='number-player'>
            <Link
                className='booking-link taille'
                onMouseEnter={() => {
                    const prices = getPrice[props.match.params.activity]
                    setCount({ price: prices[1], players: 1 })
                }}
                to={`/booking/${props.match.params.activity}/${props.match.params.hour}/register/1`}
            >
                1 {translate(language, 'players')}
            </Link>
            <Link className='booking-link taille' onMouseEnter={() => {
                const prices = getPrice[props.match.params.activity]
                setCount({ price: prices[2], players: 2 })
            }} to={`/booking/${props.match.params.activity}/${props.match.params.hour}/register/2`}> 2 {translate(language, 'players')}</Link>
            <Link className='booking-link taille' onMouseEnter={() => {
                const prices = getPrice[props.match.params.activity]
                setCount({ price: prices[3], players: 3 })
            }} to={`/booking/${props.match.params.activity}/${props.match.params.hour}/register/3`}> 3 {translate(language, 'players')}</Link>
            <Link className='booking-link taille' onMouseEnter={() => {
                const prices = getPrice[props.match.params.activity]
                setCount({ price: prices[4], players: 4 })
            }} to={`/booking/${props.match.params.activity}/${props.match.params.hour}/register/4`}> 4 {translate(language, 'players')}</Link>
            <Link className='booking-link taille' onMouseEnter={() => {
                const prices = getPrice[props.match.params.activity]
                setCount({ price: prices[5], players: 5 })
            }} to={`/booking/${props.match.params.activity}/${props.match.params.hour}/register/5`}> 5 {translate(language, 'players')}</Link>
        </div>
        <div className='right-div-booking'>
            <div className='price-container'>
                <div className='price-one-player'>
                    {count.players && count.price / count.players}
                </div>
                <div className='price-details'>
                    <p style={{ margin: 0, fontSize: '2rem' }}>€</p>
                    <p style={{ margin: 0, fontWeight: 'bold' }}>/joueur</p>
                </div>
            </div>
            <p>Soit {count.price}€ TTC </p>
            <p style={{fontSize: '0.8em'}}>{display}</p>

        </div>
    </div>
    )
}
export default NumberPlayer;