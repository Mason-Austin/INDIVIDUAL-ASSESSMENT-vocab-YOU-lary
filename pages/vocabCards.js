import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyVocabCards = () => {
  const domString = '<h1>No Vocabulary Cards</h1>';
  renderToDom('#view', domString);
};

const showVocabCards = (array) => {
  clearDom();

  const filterString = '<button type="button" class="btn btn-primary">HTML</button> <button type="button" class="btn btn-primary">CSS</button> <button type="button" class="btn btn-primary">JavaScript</button> <button type="button" class="btn btn-primary">Python</button>';
  renderToDom('#filterBtns', filterString);

  let domString = '';
  array.forEach((card) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title" id="cardTitle">${card.title}</h5>
        <h5 class="card-title" id="cardLanguage">${card.language}</h5>
        <p class="card-text" id="cardDef">${card.definition}</p>
        <button class="btn btn-primary" >Edit</button>
        <button class="btn btn-danger" >delete</button>
      </div>
    </div>`;
  });
  renderToDom('#view', domString);
};

export { showVocabCards, emptyVocabCards };
