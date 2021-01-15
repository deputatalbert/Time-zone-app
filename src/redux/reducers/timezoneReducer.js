import { timezone } from '../state/state';

export const timezoneReducer = (state = timezone, action) => {

  switch (action.type) {
    case 'CHANGE_TIMEZONE':
      if(action.payload.id === state.clocks[0].id) {
        state.clocks[0].timeZone = action.payload.value;
        console.log(state)
        return state
      }

      if(action.payload.id === state.clocks[1].id) {
        state.clocks[1].timeZone = action.payload.value;
        return state
      }

      return state
     
    default: 
      return state 
    }
}