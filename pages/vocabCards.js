import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyVocabCards = () => {
  const domString = '<h1>No Vocabulary Cards</h1>';
  renderToDom('#view', domString);
};

const showVocabCards = (array) => {
  clearDom();

  const filterString = '<button type="button" class="btn btn-primary">Primary</button>';
  renderToDom('#filterBtns', filterString);

  let domString = '';
  array.forEach((card) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title" id="cardTitle">${card.title}</h5>
        <p class="card-text" id="cardDef">${card.defintion}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`;
  });
  renderToDom('#view', domString);
};

export { showVocabCards, emptyVocabCards };
