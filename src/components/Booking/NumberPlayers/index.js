import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { translate } from '../../../translate/translate';
import './index.scss';

const NumberPlayer = (props) => {
    const [count, setCount] = useState({price:0, players:0});
    const language = useSelector(state => state.user.language)
    return (<div className='number-container'>
        <div className='number-player'>
            <Link className='booking-link taille' onMouseEnter={()=> setCount({price:24, players:2})} to='/booking/register/2'> 2 {translate(language, 'players')}</Link>
            <Link className='booking-link taille' onMouseEnter={()=> setCount({price:30, players:3})}  to='/booking/register/3'> 3 {translate(language, 'players')}</Link>
            <Link className='booking-link taille' onMouseEnter={()=> setCount({price:36, players:4})}  to='/booking/register/4'> 4 {translate(language, 'players')}</Link>
            <Link className='booking-link taille' onMouseEnter={()=> setCount({price:40, players:5})}  to='/booking/register/5'> 5 {translate(language, 'players')}</Link>
        </div>
        <div className='right-div'>
            <p>{count.players && count.price/count.players}€/joueur
                Soit {count.price} € TTC</p>
        </div>
    </div>
    )
}
export default NumberPlayer;