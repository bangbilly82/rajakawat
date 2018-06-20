import Config from '../config/config';
import Axios from 'axios';

const ELIGIBLE_ENDPOINT = {
  'send-email': '/send-mail'
};

function getEndpoint(endpoint) {
  const baseUrl = Config.api.endpoint;
  const path = ELIGIBLE_ENDPOINT[endpoint];
  return [baseUrl, path].join('');
}

function callAPi(endpoint, payload) {
  const _callApi = new Promise(
    (resolve, reject) => {
      Axios.post(endpoint, payload)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    }
  );
  return _callApi;
}

export function sendEmail(payload, callback) {
  callAPi(getEndpoint('send-email'), payload)
    .then(() => {
      callback();
    });
}