import serviceEndpoints from '../config/serviceEndpoints.json';

export default function getNumberOfVotes(userId) {
    return fetch(serviceEndpoints.getNumberOfVotes + '?userId=' + userId)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }
