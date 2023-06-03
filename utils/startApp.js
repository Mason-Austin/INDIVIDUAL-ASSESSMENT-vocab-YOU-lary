import domBuilder from '../shared/domBuilder';
import getVocabCards from '../api/vocabData';
import { showVocabCards } from '../pages/vocabCards';
import logoutButton from '../components/buttons/logoutButton';

const startApp = (user) => {
  domBuilder(user);
  logoutButton();
  getVocabCards().then((cards) => showVocabCards(cards));
};

export default startApp;
