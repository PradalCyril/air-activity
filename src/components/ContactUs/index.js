import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { translate } from '../../translate/translate';
import './index.scss';

const ContactUs = (props) => {
    const language = useSelector(state => state.user.language)
    return (
        <div className='contact-container'>
            <p>Air activity met tout en oeuvre pour répondre à vos questions et satisfaire vos demandes. N’hésitez pas à consulter notre FAQ avant de nous consulter.</p>
            <p> Adresse mail : airactivity2@gmail.com</p>
            <p>Téléphone : 06 10 53 48 41 - 06 50 80 89 05  </p>
            <p>Plan : Terminal 2E </p>
            <p> Réseaux sociaux : </p>

        </div>
    )
}
export default withRouter(ContactUs);