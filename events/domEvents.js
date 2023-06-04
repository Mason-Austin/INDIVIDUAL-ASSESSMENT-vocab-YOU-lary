import { deleteVocabCard, getVocabCards } from '../api/vocabData';
import { showVocabCards } from '../pages/vocabCards';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card')) {
      const [, firebaseKey] = (e.target.id.split('--'));

      deleteVocabCard(firebaseKey).then(() => {
        getVocabCards(user.uid).then(showVocabCards);
      });
    }
  });
};

export default domEvents;
