import serviceEndpoints from '../serviceEndpoints.json';

export default function getVoteSubjects() {
    return fetch(serviceEndpoints.getVoteSubjects + '?userId=FABIAN')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }
