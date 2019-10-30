import React from 'react';
import './index.scss';
import Player from './Player';


const RegisterPlayer = (props) => {
  const number = props.match.params.numberPlayer <= 10
    ? props.match.params.numberPlayer
    : props.history.push('3');
  let players = [];
  for (let i = 0; i < number; i++) {
    players[i] = <Player playerNumber={i} key={i} />
  }
  return (
    <div className='register-player'>
      {players}
    </div>
  )
}

export default RegisterPlayer;