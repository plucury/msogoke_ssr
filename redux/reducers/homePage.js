
/**
 * 好友页数据的reducer
 * 处理数据：
 * isFetching   是否获取数据中
 * dataGeted  	是否成功获取数据

 * page  		页面编号
 * hasMore     	是否还有更多数据

 * homeData		用户主页数据
 */
export const homeDataInitialState = {
	isFetching: false,
	dataGeted: false,
	homeData: [],
	page: 0,
	hasMore: true
}


const homeData = (state = homeDataInitialState, {type, payload}) => {
	switch (type) {
		case  'INIT_HOME_DATA':
			return {
				...homeDataInitialState
			}
		case  'FETCHING_HOME_DATA':
			return {
				...state,
				isFetching: true,
				dataGeted: false
			}
		case  'FETCHING_HOME_SUCCESS':
			// const items = payload.data
			// const newItems = action.page !== 1 ? (
			// 	action.page != state.page 
			// 	? state.homeData.concat(items) 
			// 	: state.homeData
			// ) : items
			return {
					...state,
					isFetching: false,
					dataGeted: true,
					homeData: [...state.homeData, ...payload.data],
					page: ++state.page,
					hasMore: payload.data.length != 0
				}
		case 'FETCHING_HOME_FAILED':
			return {
				isFetching: false,
				dataGeted: false,
				msg: payload.msg
			}
		default: 
			return state
	}
}

export default homeData
