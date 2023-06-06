import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const addCardForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `edit-card--${obj.firebaseKey}` : 'submit-card'}">
    <div class="mb-3">
      <label for="cardTitle" class="form-label">Title</label>
      <input value="${obj.title || ''}" required type="text" class="form-control" id="cardTitle" placeholder="Title">
    </div>
    <div class="mb-3">
      <label for="cardDescription" class="form-label">Description</label>
      <textarea required class="form-control" id="cardDescription" placeholder="Description" rows="3"></textarea>
    </div>
    <select required id="language" class="form-select" aria-label="Default select example">
      <option selected disabled hidden>Select a Language/Tech</option>
      <option value="HTML">HTML</option>
      <option value="CSS">CSS</option>
      <option value="JavaScript">JavaScript</option>
      <option value="Python">Python</option>
    </select>
    <button type="submit" class="btn btn-success">Create</button>
    </form>`;
  renderToDom('#form-container', domString);
  if (obj.definition) {
    document.querySelector('#cardDescription').value = obj.definition;
    document.querySelector('#language').value = obj.language;
  }
};

export default addCardForm;
