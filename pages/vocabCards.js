import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyVocabCards = () => {
  const domString = '<h1>No Vocabulary Cards</h1>';
  renderToDom('#view', domString);
};

const showVocabCards = (array) => {
  clearDom();

  const filterString = '<button id="htmlBtn" type="button" class="btn btn-primary">HTML</button> <button id="cssBtn" type="button" class="btn btn-primary">CSS</button> <button id="javaBtn" type="button" class="btn btn-primary">JavaScript</button> <button id="pythonBtn" type="button" class="btn btn-primary">Python</button> <button id="clearBtn" type="button" class="btn btn-primary">Clear filter</button>';
  renderToDom('#filterBtns', filterString);

  let domString = '';
  array.forEach((card) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title" id="cardTitle">${card.title}</h5>
        <h5 class="card-title" id="cardLanguage">${card.language}</h5>
        <p class="card-text" id="cardDef">${card.definition}</p>
        <button id="edit-card--${card.firebaseKey}" class="btn btn-warning" >Edit</button>
        <button id="delete-card--${card.firebaseKey}" class="btn btn-danger" >delete</button>
      </div>
    </div>`;
  });
  renderToDom('#view', domString);
};

export { showVocabCards, emptyVocabCards };
