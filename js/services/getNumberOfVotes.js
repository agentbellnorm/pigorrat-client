import serviceEndpoints from '../config/serviceEndpoints.json';

export default function getNumberOfVotes() {
    return fetch(serviceEndpoints.getNumberOfVotes + '?userId=FABIAN')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }
