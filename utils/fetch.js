
function getTokenFromSessionStorage() {
  const user = localStorage.getItem('user')
  if(!user) return null
  const userJson = JSON.parse(user)
  return userJson.token
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {

    if (response.status === 401) {
      window.location.href = '/admin/user/login';
      return;
    }

    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

function checkSuccess(response) {
  if (!response.success) {
    // handle message
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
  const token = getTokenFromSessionStorage()
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
  return fetch(url, newOptions)
          .then(checkStatus)
          .then(parseJSON)
          .then(checkSuccess)
          .catch(function(error) {
            console.log(error);
          })
}
