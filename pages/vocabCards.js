import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyVocabCards = () => {
  const domString = '<h1>No Vocabulary Cards</h1>';
  renderToDom('#view', domString);
};

const showVocabCards = (array) => {
  clearDom();

  const filterString = '<select id="filterBy" class="form-select" aria-label="Default select example"><option selected disabled hidden>Filter by</option><option id="test1" value="1">Alphabetically</option><option value="2">Oldest-Newest</option><option value="3">Newest-Oldest</option></select>';
  renderToDom('#filterBtns', filterString);

  let domString = '';
  array.forEach((card) => {
    domString += `
      <div class="card rainbow hvr-float">
        <div class="card-body">
          <div class="card-info">
          <h5 class="card-title" id="cardTitle">${card.title}</h5>
          <h5 class="card-title" id="cardLanguage">${card.language}</h5>
          <p class="card-text" id="cardDef">${card.definition}</p>
          </div>
          <div class="card-btns">
          <button id="edit-card--${card.firebaseKey}" class="btn btn-outline-dark" >Edit</button>
          <button id="delete-card--${card.firebaseKey}" class="btn btn-outline-dark" >delete</button>
          </div>
        </div>
      </div>`;
  });
  renderToDom('#view', domString);
};

export { showVocabCards, emptyVocabCards };
