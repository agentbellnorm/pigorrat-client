import serviceEndpoints from '../serviceEndpoints.json';

export default function getUsers() {
    return fetch(serviceEndpoints.getUsers)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }
