import renderToDom from '../utils/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://thumbs.dreamstime.com/b/vocabulary-icon-trendy-design-style-isolated-white-background-vector-simple-modern-flat-symbol-web-site-mobile-logo-135734608.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"></a>
    <div> <button class="btn btn-warning" id="add-card">Create Card</button> </div>
    <div id="logout-button"></div>
  </div>
</nav>`;
  renderToDom('#navBar', domString);
};

export default navBar;
