import { combineReducers } from 'redux'
import homeData, {homeDataInitialState} from './homePage'
import getNavData, {getNavInitialState} from './getNavReducer'
import globalStatus, {globalInitialState} from './globalReducer'

export const initialTotalState = {
  homeData: homeDataInitialState,
  getNavData: getNavInitialState,
  globalStatus: globalInitialState
}

console.log(initialTotalState, 'initialTotalState in reducer index')

export default combineReducers({
	homeData,
  getNavData,
  globalStatus
});
