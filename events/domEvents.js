import {
  deleteVocabCard, filterVocabCards, getSingleVocabCard, getVocabCards
} from '../api/vocabData';
import addCardForm from '../components/form/addCardForm';
import { showVocabCards } from '../pages/vocabCards';
import { filterOld, filterNew, filterAlph } from '../utils/filter';

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
  setTimeout(() => {
    document.querySelector('#filterBy').addEventListener('change', () => {
      console.warn('wow');
      switch (document.querySelector('#filterBy').value) {
        case '1':
          console.warn('1');
          filterAlph(user);
          break;
        case '2':
          console.warn('2');
          filterOld(user);
          break;
        case '3':
          console.warn('3');
          filterNew(user);
          break;
        default:
          break;
      }
      console.warn('jam');
    });
  }, 500);
};

export default domEvents;
