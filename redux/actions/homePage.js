import {
  getHomeData
} from '../../server/apis/homePage';

// 查询门店列表
/* data: status, data  */
export const getHomeDataAction = (query, baseUrl, refresh) => {
  return async (dispatch) => {
    // refresh && dispatch(initHomeData())
    const res = await getHomeData(query, baseUrl);
    if (res.status !== 1) {
      dispatch(getHomeDataFailed(res));
      return;
    }
    console.log('ready to dispatch success')
    await dispatch(getHomeDataSuccess(res));
  }
}

export const initHomeData = (payload) => {
  return {
    type: 'INIT_HOME_DATA',
    payload,
  }
}

export const getHomeDataSuccess = (payload) => {
  console.log('FETCHING_HOME_SUCCESS')
  return {
    type: 'FETCHING_HOME_SUCCESS',
    payload,
  }
}

export const getHomeDataFailed = (payload) => {
  return {
    type: 'FETCHING_HOME_FAILED',
    payload,
  }
}

