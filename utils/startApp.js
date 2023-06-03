import domBuilder from '../shared/domBuilder';
import logoutButton from '../components/buttons/logoutButton';
import navBar from '../shared/navBar';
import navagationEvents from '../events/navagationEvents';
import { getVocabCards } from '../api/vocabData';
import { showVocabCards } from '../pages/vocabCards';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  logoutButton();
  getVocabCards(user.uid).then((cards) => showVocabCards(cards));
  navagationEvents(user);
  formEvents(user);
};

export default startApp;
