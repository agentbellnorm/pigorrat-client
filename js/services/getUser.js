import serviceEndpoints from '../config/serviceEndpoints.json';

export default function getUser(userId) {
    return fetch(serviceEndpoints.getUser + '?userId=' + userId)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }
