export const globalInitialState = {
  flexibleLoaded: false
}

const globalStatus = (state = globalInitialState, {type, payload}) => {
  switch (type) {
    case  'FLEXIBLE_LOADED':
      console.log('updating')
      return {
        ...state,
        flexibleLoaded: true
      }
    default: 
      return state
  }
}

export default globalStatus

