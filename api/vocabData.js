const endpoint = 'https://vocab-you-lary-a51a4-default-rtdb.firebaseio.com/';

const getVocabCards = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}vocab.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export default getVocabCards;
