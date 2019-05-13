import config from './config';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object} The parsed JSON, status from the response
 */
function parseJSON(response) {
  // TODO: refactor
  return new Promise(resolve => (
    response.status === 204 ? (
      resolve({ status: response.status, ok: response.ok })
    ) : (
      response.json().then(json => resolve({ status: response.status, ok: response.ok, json }))
    )
  ));
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {Promise}          The request promise
 */
export default function (url, options) {
  return new Promise((resolve, reject) => {
    let noCacheUrl = new URL((options.baseUrl ? options.baseUrl : config['API_ENDPOINT']) + url);

    if (!options.cache) {
      noCacheUrl.searchParams.append('t', Date.now());
    }
    options.cache = 'no-cache';

    fetch(noCacheUrl, options)
      .then(parseJSON)
      .then((response) => response.ok ? resolve(response.json) : reject(response.json))
      .catch(error => reject(error));
  });
}


function getCloudToken() {
  return localStorage.getItem('token');
}


export function requestHeader() {
  return {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + getCloudToken(),
  }
}