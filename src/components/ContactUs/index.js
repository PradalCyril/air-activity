import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { translate } from '../../translate/translate';
import image1 from '../../svg/terminal1.jpg';
import image2 from '../../svg/terminal2.jpg';
import image3 from '../../svg/insta.jpg';
import { inputName, inputEmail, inputTextArea } from '../Generic/Form';
import './index.scss';

const ContactUs = (props) => {
    const dispatch = useDispatch()
    const language = useSelector(state => state.user.language)
    const messageSend = useSelector(state => state.user.messageSend)
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const inputFirstName = inputName(firstName, (e) => setFirstName(e.target.value), 'firstName', language)
    const inputMail = inputEmail(email, (e) => setEmail(e.target.value), language);
    const inputMessage = inputTextArea(message, (e) => setMessage(e.target.value), language);
    return (
        <div className='contact-container'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h3 style={{ color: "#C70B0C" }}>Air activity met tout en oeuvre pour répondre à vos questions et satisfaire vos demandes.</h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ paddingLeft: '10%', width: '100%' }}>
                    <h4 className='contact-section-title'>Nous Contacter : </h4>
                    <p style={{ marginRight: '5%', fontWeight: 'bold', textDecoration: 'underline', textDecorationColor: '#C70B0C' }}>Laissez nous un message :  </p>
                    {!messageSend && <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            {inputFirstName}
                            {inputMail}
                        </div>
                        {inputMessage}
                        <input
                            type="submit"
                            className='register-submit'
                            value='Soumettre'
                            onClick={
                                (e) => {
                                    e.preventDefault();
                                    if (!firstName && !email && !message) return;
                                    dispatch({ type: 'MESSAGE_SEND' });
                                    props.history.push('/contact/confirm');
                                }
                            }
                        />
                    </div>}
                    {messageSend && <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p className='prise-de-contact'> Votre prise de contact a été envoyé </p>
                    </div>}
                </div>
            </div>
            <div style={{ paddingLeft: '10%' }}>
                <h4 className='contact-section-title'>Nous Suivre : </h4>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: '50%' }}>
                            <p style={{ marginRight: '5%' }}> Réseaux sociaux : </p>
                            <p style={{ marginLeft: '10%' }}> Instagram : @air.activity</p>
                            <p style={{ marginLeft: '10%' }}> Facebook : Air Activity</p>
                            <p style={{ marginLeft: '10%' }}> Twitter : @air.activity</p>
                        </div>
                        <img style={{ width: '40%' }} src={image3} alt="image3" />

                    </div>
                </div>
            </div>
            <div style={{ paddingLeft: '10%' }}>

                <h4 className='contact-section-title'>Nous Trouver :</h4>
                <div style={{ marginBottom: 40, marginTop: 40 }}>
                    <img style={{ width: '100%' }} src={image1} alt="image1" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column'}}>
                    <p style={{ marginRight: '2%', width: '100%', textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline', textDecorationColor: '#C70B0C' }}>Plan : Terminal 2E - Porte M </p>
                        <img style={{ width: '100%', marginBottom: 100 }} src={image2} alt="image2" />
                </div>
            </div>

        </div>
    )
}
export default withRouter(ContactUs);