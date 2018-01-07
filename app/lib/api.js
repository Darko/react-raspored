class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb) {
    const host = 'https://dog.ceo/api'
    const url = `${host}${route}`
    let options = Object.assign(
      { method: verb, headers: Api.headers() },
      params ? { body: JSON.stringify(params) } : null );

    console.log('Fetching', url, 'With options', options)

    return fetch(url, options)
    .then(result => {
      console.log(result.json());
      return result.json()
    });
  }
}
export default Api