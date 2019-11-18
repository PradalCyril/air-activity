import React from 'react';
import {translate} from '../../translate/translate';

export const inputName = (string, updateState, inputName, language) => (
  <input
    className='connexion-input'
    type='text'
    name={inputName}
    autoComplete='off'
    placeholder={translate(language, inputName)}
    value={string}
    onChange={(e) => updateState(e)}
  />
)

export const inputEmail = (email, updateState, language) => (
  <input
    className='connexion-input'
    type='email'
    name='email'
    autoComplete='off'
    placeholder={translate(language, 'email')}
    value={email}
    onChange={(e) => updateState(e)}
  />
)

export const inputPhoneNumber = (number, updateState, language) => (
  <input
    className='connexion-input'
    type='number'
    name='phoneNumber'
    autoComplete='off'
    placeholder={translate(language, 'phoneNumber')}
    value={number}
    onChange={(e) => updateState(e)}
  />
)


export const inputTextArea = (message, updateState) => (
  <textarea
    className='connexion-input-area'
    name='textArea'
    placeholder='Votre message....'
    value={message}
    onChange={(e) => updateState(e)}
  />
)