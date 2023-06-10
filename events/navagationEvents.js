import { filterVocabCards, getVocabCards } from '../api/vocabData';
import addCardForm from '../components/form/addCardForm';
import { showVocabCards } from '../pages/vocabCards';

const navagationEvents = (user) => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    console.warn(e.target);
    if (e.target.id.includes('add-card')) {
      addCardForm();
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

export default navagationEvents;
