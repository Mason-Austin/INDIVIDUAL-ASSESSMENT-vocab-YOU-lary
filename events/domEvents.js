import {
  deleteVocabCard, filterVocabCards, getSingleVocabCard, getVocabCards
} from '../api/vocabData';
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
    if (e.target.id === ('htmlBtn')) {
      // eslint-disable-next-line quotes
      filterVocabCards(user.uid, "HTML").then(showVocabCards);
    }
    if (e.target.id.includes('cssBtn')) {
      // eslint-disable-next-line quotes
      filterVocabCards(user.uid, "CSS").then(showVocabCards);
    }
    if (e.target.id === ('javaBtn')) {
      // eslint-disable-next-line quotes
      filterVocabCards(user.uid, "JavaScript").then(showVocabCards);
    }
    if (e.target.id === ('pythonBtn')) {
      // eslint-disable-next-line quotes
      filterVocabCards(user.uid, "Python").then(showVocabCards);
    }
    if (e.target.id === ('clearBtn')) {
      getVocabCards(user.uid).then(showVocabCards);
    }
  });
};

export default domEvents;
