import addCardForm from '../components/form/addCardForm';

const navagationEvents = () => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    console.warn(e.target);
    if (e.target.id.includes('add-card')) {
      addCardForm();
    }
  });
};

export default navagationEvents;
