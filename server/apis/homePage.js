import request, { exportFetch } from '../utils/fetch';
import queryString from 'query-string'

// 获取home页面posts
export async function getHomeData(params) {
  return request(`/api/streams/activities?${queryString.stringify(params)}`)
}
