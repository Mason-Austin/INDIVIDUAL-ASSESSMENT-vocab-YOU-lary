import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const addCardForm = () => {
  clearDom();
  const domString = `
    <form id="submit-card">
    <div class="mb-3">
      <label for="cardTitle" class="form-label">Title</label>
      <input type="text" class="form-control" id="cardTitle" placeholder="Title">
    </div>
    <div class="mb-3">
      <label for="cardDescription" class="form-label">Description</label>
      <textarea class="form-control" id="cardDescription" placeholder="Description" rows="3"></textarea>
    </div>
    <select id="language" class="form-select" aria-label="Default select example">
      <option selected>Language/Tech</option>
      <option value="HTML">HTML</option>
      <option value="CSS">CSS</option>
      <option value="JavaScript">JavaScript</option>
      <option value="Python">Python</option>
    </select>
    <button type="submit" class="btn btn-success">Create</button>
    </form>`;
  renderToDom('#form-container', domString);
};

export default addCardForm;
