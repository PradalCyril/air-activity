import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';


const Activity = (props) => {
  const [divTextClassName, setDivTextClassName] = useState('activity-display-text')
  return (
    <div className={`activity-container ${props.type}`} onMouseEnter={()=>setDivTextClassName(`activity-display-text-active`)} onMouseLeave={()=>setDivTextClassName('activity-display-text')}>
      <div className={`${divTextClassName}`}>
          <h4 className='activity-title'>{props.title}</h4>
          <p>{props.text}</p>
      </div>
    </div>
  )
}

export default withRouter(Activity);