import { createVocabCard, getVocabCards, updateVocabCard } from '../api/vocabData';
import { showVocabCards } from '../pages/vocabCards';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-card')) {
      const payload = {
        title: document.querySelector('#cardTitle').value,
        definition: document.querySelector('#cardDefinition').value,
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
    if (e.target.id.includes('edit-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#cardTitle').value,
        definition: document.querySelector('#cardDefinition').value,
        language: document.querySelector('#language').value,
        uid: user.uid,
        firebaseKey
      };
      updateVocabCard(payload).then(() => {
        getVocabCards(user.uid).then(showVocabCards);
      });
    }
  });
};

export default formEvents;
