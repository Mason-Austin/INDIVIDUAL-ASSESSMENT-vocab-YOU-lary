const endpoint = 'https://vocab-you-lary-a51a4-default-rtdb.firebaseio.com/';

const getVocabCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}vocab.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getVocabCards;
