import {
  getHomeData
} from '../../server/apis/homePage';

// 查询门店列表
/* data: status, data  */
export const getHomeData = (query, refresh) => {
  return async (dispatch) => {
    refresh && dispatch(initHomeData())
    const res = await getHomeData(query);

    if (res.status !== 1) {
      dispatch(getHomeDataFailed(res));
      return;
    }
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

