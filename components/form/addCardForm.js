import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const addCardForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `edit-card--${obj.firebaseKey}` : 'submit-card'}">
    <div class="mb-3">
      <label for="cardTitle" class="form-label">Title</label>
      <input value="${obj.title || ''}" required type="text" class="form-input form-select" id="cardTitle" placeholder="Title">
    </div>
    <div class="mb-3">
      <label for="cardDefinition" class="form-label">Definition</label>
      <textarea required class="form-input form-select" id="cardDefinition" placeholder="Definition" rows="3"></textarea>
    </div>
    <select required id="language" class="form-input form-select" aria-label="Default select example">
      <option selected disabled hidden>Select a Language/Tech</option>
      <option value="HTML">HTML</option>
      <option value="CSS">CSS</option>
      <option value="JavaScript">JavaScript</option>
      <option value="Python">Python</option>
    </select>
    <div id="formBtns">
    <button type="submit" class="btn btn-outline-light">Submit</button>
    <button id="cancelCard" class="btn btn-outline-light">Cancel</button></div>
    </form>`;
  renderToDom('#form-container', domString);
  if (obj.definition) {
    document.querySelector('#cardDefinition').value = obj.definition;
    document.querySelector('#language').value = obj.language;
  }
};

export default addCardForm;
