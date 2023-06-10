import {
  deleteVocabCard, getSingleVocabCard, getVocabCards
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
    if (e.target.id === ('cancelCard')) {
      console.warn('wow');
      getVocabCards(user.uid).then(showVocabCards);
    }
  });
  document.querySelector('#filterBtns').addEventListener('change', (e) => {
    console.warn('wow');
    console.warn(e.target.value);
    switch (e.target.value) {
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
};

export default domEvents;
