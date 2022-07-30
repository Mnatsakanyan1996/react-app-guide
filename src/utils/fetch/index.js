import { getToken } from './token';

class Fetch {
  static createHeader = () => {
    const token = getToken();
    const herder = new Headers();
    herder.append('content-type', 'application/json');
    herder.append('authorization', token);
    return herder;
  };

  static fetchData = async (url, options) => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return { data, status: response.status, ok: response.ok, hasError: false };
    } catch {
      return { data: null, status: null, ok: false, hasError: false };
    }
  };

  static GET = async (url, newHeaders) => {
    const headers = newHeaders || Fetch.createHeader();
    return await Fetch.fetchData(url, {
      headers,
      method: 'GET',
    });
  };

  static POST = async (url, body, newHeaders) => {
    const headers = newHeaders || Fetch.createHeader();
    return await Fetch.fetchData(url, {
      headers,
      method: 'POST',
      body: JSON.stringify(body),
    });
  };

  static PUT = async (url, body, newHeaders) => {
    const headers = newHeaders || Fetch.createHeader();
    return await Fetch.fetchData(url, {
      headers,
      method: 'PUT',
      body: JSON.stringify(body),
    });
  };

  static DELETE = async (url, newHeaders) => {
    const headers = newHeaders || Fetch.createHeader();
    return await Fetch.fetchData(url, {
      headers,
      method: 'DELETE',
    });
  };

  static UPLOAD = async (url, body, pureBody = true, contentType) => {
    const headers = Fetch.createHeader();
    const token = getToken();
    headers.append('Authorization', token);
    if (contentType) headers.append('Content-Type', contentType);
    return await Fetch.fetchData(url, {
      headers,
      method: 'POST',
      body: pureBody ? body : JSON.stringify(body),
    });
  };
}

export default Fetch;
