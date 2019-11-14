import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { translate } from '../../translate/translate';
import './index.scss';

const Teams = (props) => {
    const language = useSelector(state => state.user.language)
    return (
        <div className='teams-container'>
            <h3 className='presentation-teams'>{translate(language, 'presentationTeam')}</h3>
            <div className='teams-displayer'>
                <div
                    className='teams-display'
                >
                    <div className='name-display'>
                        <h4 className='right-margin'>Sarah Abd-Ali</h4>
                        <p className='no-margin'>(22 ans)</p>
                    </div>
                    <div >
                        <p className='no-margin'>Passions :</p>
                        <p className='no-margin with-padding'>- Les voyages (Liban, Sénégal, Espagne, Maroc)</p>
                        <p className='no-margin with-padding'>- La photographie</p>
                        <p className='no-margin with-padding'>- La pâtisserie</p>
                    </div>
                </div>
                <div
                    className='display-border-right'
                ></div>
                <div
                    className='teams-display'
                >
                    <div className='name-display'>
                        <h4 className='right-margin'>Anissa Haddouch</h4>
                        <p className='no-margin'>(21 ans)</p>
                    </div>
                    <div >
                        <p className='no-margin'>Passions :</p>
                        <p className='no-margin with-padding'>- La danse</p>
                        <p className='no-margin with-padding'>- La mode</p>
                        <p className='no-margin with-padding'>- La cuisine</p>
                    </div>
            </div>
            </div>
        </div>
    )
}
export default withRouter(Teams);