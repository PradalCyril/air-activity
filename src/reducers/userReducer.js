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
    case 'ACTIVITY_CHOOSED': 
      return {...state, 
        activity: action.payload
      }
      case 'SELECT_DATE': 
      return {...state, 
        dateSelected: action.payload
      }
    default:
      return state;
  }
}

export default user;