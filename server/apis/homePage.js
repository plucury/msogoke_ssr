import request from '../../utils/fetch';
import queryString from 'query-string'

// 获取home页数据
export async function getHomeData(params, baseUrl) {
  console.log('getting data in apis')
  return request(`${baseUrl}/api/streams/activities?${queryString.stringify(params)}`)
}
