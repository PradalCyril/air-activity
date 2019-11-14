const initialState = {
  }
  
  
  const user = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USERS':
        return {...state, [action.payload.playerNumber]: action.payload.userData}
      default:
        return state;
    }
  }
  
  export default user;