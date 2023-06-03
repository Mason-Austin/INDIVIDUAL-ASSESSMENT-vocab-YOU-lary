import renderToDom from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navBar"></div>
  <div id="main-container">
    <div id="filterBtns"></div>
    <div id="form-container"></div>
    <div id="view"></div>
  </div>`;
  renderToDom('#app', domString);
};

export default domBuilder;
