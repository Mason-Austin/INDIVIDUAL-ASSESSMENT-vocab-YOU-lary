import { getVocabCards } from '../api/vocabData';
import { showVocabCards } from '../pages/vocabCards';

const filterOld = (user) => getVocabCards(user.uid).then((cards) => showVocabCards(cards.sort((a, b) => a.timeSubmit - b.timeSubmit)));
const filterNew = (user) => getVocabCards(user.uid).then((cards) => showVocabCards(cards.sort((a, b) => b.timeSubmit - a.timeSubmit)));
const filterAlph = (user) => getVocabCards(user.uid).then((cards) => showVocabCards(cards.sort((a, b) => a.title.localeCompare(b.title))));
export { filterOld, filterNew, filterAlph };
