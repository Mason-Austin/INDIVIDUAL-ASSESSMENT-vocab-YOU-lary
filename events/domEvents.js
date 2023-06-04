import { deleteVocabCard, getSingleVocabCard, getVocabCards } from '../api/vocabData';
import addCardForm from '../components/form/addCardForm';
import { showVocabCards } from '../pages/vocabCards';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card')) {
      const [, firebaseKey] = (e.target.id.split('--'));

      deleteVocabCard(firebaseKey).then(() => {
        getVocabCards(user.uid).then(showVocabCards);
      });
    }
    if (e.target.id.includes('edit-card')) {
      const [, firebaseKey] = (e.target.id.split('--'));

      getSingleVocabCard(firebaseKey).then((cardObj) => addCardForm(cardObj));
    }
  });
};

export default domEvents;
