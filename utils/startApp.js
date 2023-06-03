import domBuilder from '../shared/domBuilder';
import getVocabCards from '../api/vocabData';
import { showVocabCards } from '../pages/vocabCards';
import logoutButton from '../components/buttons/logoutButton';
import navBar from '../shared/navBar';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  logoutButton();
  getVocabCards().then((cards) => showVocabCards(cards));
};

export default startApp;
