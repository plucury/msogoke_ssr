import fetch from 'isomorphic-unfetch'

function getTokenFromSessionStorage() {
  const user = null
  if(!user) return null
  const userJson = JSON.parse(user)
  return userJson.token
}

function checkStatus(res) {
  if (res.status >= 200 && res.status < 300) {
    return res
  } else {

    if (res.status === 401) {
      // window.location.href = '/admin/user/login';
      console.log('not logined')
      return;
    }

    var error = new Error(res.statusText)
    error.res = res
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

function checkSuccess(response) {
  if (!response.success) {
    // handle message
    console.log('checked')
  }

  return response
}

export function exportFetch(url) {
  const token = getTokenFromSessionStorage()
  const defaultOptions = {
    credentials: 'include',
    headers: {
      token: token
    }
  };

  return fetch(url, defaultOptions);
}

export default function request(url, options) {
  // const token = getTokenFromSessionStorage()
  const defaultOptions = {
    // credentials: 'include',
    // headers: {
    //   token: token
    // }
  };
  const newOptions = { ...defaultOptions, ...options };
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      };
    }
  }
  console.log(url, newOptions, 'fetch options')
  return fetch(url, newOptions)
          .then(checkStatus)
          .then(parseJSON)
          .then(checkSuccess)
          .catch(function(error) {
            console.log(error);
          })
}
