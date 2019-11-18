import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';

const SelectHour = (props) => {
    const [hours, setHours] = useState('');
    const [submit, setsubmit] = useState(false);
    const isValid = submit && hours >= 5;
    if(isValid){
        props.history.push('/booking/select-activities')
    }
    const error = <div className='text-error'>
        <p className='text-error-select-hour-top'>Nous nous excusons car nous ne pouvons pas assurer votre activité.</p>
        <p className='p-no-margin'> Votre temps d’escale est trop court afin de réaliser une activité à l’extérieur de l’aéroport.</p>
        <p className='text-error-select-hour-bottom'>On vous souhaite un bon voyage !</p>
    </div>

return (<div className='register-hour'>
    <p> Pour une meilleure expérience, nous vous proposons des activités à partir de 5 heures d'escale</p>
    <p>Veuillez renseignez votre nombre d'heures d'escale ci dessous : </p>
    <input
        className='connexion-input'
        type='escale'
        name='hoursEscale'
        autoComplete='off'
        placeholder="Nombre d'heures d'escale..."
        value={hours}
        onChange={(e) => setHours(e.target.value)}
    />
    {submit && !isValid && error}
    <input type="submit" className='register-submit' value='Soumettre' onClick={()=> setsubmit(true)} />
</div>)
}

export default withRouter(SelectHour);