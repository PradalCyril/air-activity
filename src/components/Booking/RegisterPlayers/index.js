import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux'
import './index.scss';
import Player from './Player';
import { translate } from '../../../translate/translate';


const RegisterPlayer = (props) => {
    const [isCreate, setIsCreate] = useState(false);
    const language = useSelector(state => state.user.language)
    const number = props.match.params.numberPlayer <= 10
        ? props.match.params.numberPlayer
        : props.history.push('3');
    let players = [];
    for (let i = 0; i < number; i++) {
        players[i] = <Player isCreated={isCreate} playerNumber={i} key={i} />
    }
    return (
        <div className='register-player'>
            {players}
            <input
                type="submit"
                className='register-submit'
                value={translate(language, 'booking')}
                onClick={
                    (e) => {
                        e.preventDefault();
                        setIsCreate(true);
                        props.history.push('/booking/confirm')
                    }
                }
            />
        </div>
    )
}

export default withRouter(RegisterPlayer);