import serviceEndpoints from '../config/serviceEndpoints.json';

export default function getVoteSubjects(userId) {
    return fetch(serviceEndpoints.getVoteSubjects + '?userId=' + userId)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }
