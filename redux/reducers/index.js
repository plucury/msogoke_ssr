import { combineReducers } from 'redux'
import homeData, {homeDataInitialState} from './homePage'
import getNavData, {getNavInitialState} from './getNavReducer'

export const initialTotalState = {
  homeData: homeDataInitialState,
  getNavData: getNavInitialState
}

console.log(initialTotalState, 'initialTotalState in reducer index')

export default combineReducers({
	homeData,
  getNavData
});
