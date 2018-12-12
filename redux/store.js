import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'
import thunk from 'redux-thunk';

// const create = window.devToolsExtension
//   ? window.devToolsExtension()(createStore)
//   : createStore

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。

export default store;

// const initialState = {
//     navMain: [],
//     hotData: [
//         {id: 1, text: '会计11从业'}, 
//         {id: 2, text: 'c语言程序设计'}, 
//         {id: 3, text: '高等数学'}, 
//         {id: 4, text: 'JavaScript'}, 
//         {id: 5, text: '网页设计'}, 
//         {id: 6, text: 'Photoshop'}, 
//         {id: 7, text: '英语四级'}, 
//         {id: 8, text: '线性代数'}, 
//         {id: 9, text: '公务员考试'}
//     ]
// }

// reducer
// export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "RECEIVE_NAV":
//             return {
//                 ...state,
//                 navMain: action.navMain
//         }
//         default: return state
//     }
// }

// actions
// const receiveNav = (response) => ({
//     type: 'RECEIVE_NAV',
//     navMain: response.data
// })

// export const getNav = () => async (dispatch, getState) => {
//     try {
//         let response = await fetchData.get(`/api/nav`)
//         await dispatch(receiveNav(response.data))
//     } catch (error) {
//         console.log('error: ', error)
//     }
// }

// export const initStore = (initialState = initialState) => {
//     return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
// }

