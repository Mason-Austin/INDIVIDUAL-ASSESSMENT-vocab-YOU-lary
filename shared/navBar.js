import renderToDom from '../utils/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://thumbs.dreamstime.com/b/vocabulary-icon-trendy-design-style-isolated-white-background-vector-simple-modern-flat-symbol-web-site-mobile-logo-135734608.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">Vocab-YOU-lary</a>
      <button id="htmlBtn" type="button" class="btn btn-primary">HTML</button> <button id="cssBtn" type="button" class="btn btn-primary">CSS</button> <button id="javaBtn" type="button" class="btn btn-primary">JavaScript</button> <button id="pythonBtn" type="button" class="btn btn-primary">Python</button> <button id="clearBtn" type="button" class="btn btn-primary">Clear filter</button>
    <div> <button class="btn btn-warning" id="add-card">Create Card</button> </div>
    <div id="logout-button"></div>
  </div>
</nav>`;
  renderToDom('#navBar', domString);
};

export default navBar;
