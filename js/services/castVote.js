import serviceEndpoints from '../config/serviceEndpoints.json';

export default function castVote({ userId, voteSubjectId, vote }) {
  const data = {
    userId,
    voteSubject: voteSubjectId,
    vote
  }
  
  return fetch(serviceEndpoints.castVote, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (!response.ok) {
        var error = new Error(response.status)
        error.response = response
        throw error
      }
      return response;
    })
  }
