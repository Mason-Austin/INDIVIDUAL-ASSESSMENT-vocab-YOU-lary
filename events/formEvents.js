import { createVocabCard, getVocabCards, updateVocabCard } from '../api/vocabData';
import { showVocabCards } from '../pages/vocabCards';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    console.warn(e.target);
    if (e.target.id.includes('submit-card')) {
      const payload = {
        title: document.querySelector('#cardTitle').value,
        definition: document.querySelector('#cardDescription').value,
        language: document.querySelector('#language').value,
        uid: user.uid
      };
      createVocabCard(payload).then(({ name }) => {
        const patchPayLoad = {
          firebaseKey: name,
          timeSubmit: Date.now()
        };
        updateVocabCard(patchPayLoad).then(() => {
          getVocabCards(user.uid).then(showVocabCards);
        });
      });
    }
  });
};

export default formEvents;
