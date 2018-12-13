import request from '../../utils/fetch';
import queryString from 'query-string'

// 获取home页数据
export async function getHomeData(params) {
  console.log('getting data in apis')
  return request(`/api/streams/activities?${queryString.stringify(params)}`)
}
