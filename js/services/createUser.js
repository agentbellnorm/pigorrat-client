import serviceEndpoints from '../config/serviceEndpoints.json';

export default function createUser({ userId, name, imgUrl }) {
  const data = {
    "userId" : userId,
   	"name": name,
  	"imgUrl": imgUrl
  }

  return fetch(serviceEndpoints.createUser, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      return response.json();
    }).catch((error) => {
      console.error(error);
    });
}
