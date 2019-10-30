import React from 'react';

export const inputName = (string, updateState, inputName) => (
  <input
    className='connexion-input'
    type='text'
    name={inputName}
    autoComplete='off'
    placeholder={inputName}
    value={string}
    onChange={(e) => updateState(e)}
  />
)

export const inputEmail = (email, updateState) => (
  <input
    className='connexion-input'
    type='email'
    name='email'
    autoComplete='off'
    placeholder='Email'
    value={email}
    onChange={(e) => updateState(e)}
  />
)

export const inputPhoneNumber = (number, updateState) => (
  <input
    className='connexion-input'
    type='number'
    name='phoneNumber'
    autoComplete='off'
    placeholder='Phone Number'
    value={number}
    onChange={(e) => updateState(e)}
  />
)