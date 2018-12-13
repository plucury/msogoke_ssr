import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import fetchData from '/utils/fetchData'
import reducers, {initialTotalState} from './reducers'
import thunk from 'redux-thunk';


// actions
const receiveNav = (response) => ({
    type: 'RECEIVE_NAV',
    navMain: response.data
})
export const getNav = () => async (dispatch, getState) => {
    try {
        let response = await fetchData.get(`/api/nav`)
        await dispatch(receiveNav(response.data))
    } catch (error) {
        console.log('error: ', error)
    }
}

export const initStore = (initialState = initialTotalState) => {
    console.log(initialTotalState, 'initialState in initStore 3')
    return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}


// export function initializeStore (initialState = initialState) {
//   return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
// }
