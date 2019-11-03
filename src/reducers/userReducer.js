const initialState = {
  language : 'fr'
}


const user = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload
    case 'LANGUAGE':
      let lang = 'fr'
      if(action.payload === 'fr') lang = 'en'
      return {
        ...state,
        language: lang
      }
    default:
      return state;
  }
}

export default user;