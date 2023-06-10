import firebase from 'firebase/app';
import 'firebase/auth';
import clearDom from './clearDom';

const signIn = () => {
  document.querySelector('#login-form-container').innerHTML = '';
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  clearDom();
  document.querySelector('#navBar').innerHTML = '';
  firebase.auth().signOut();
};

export { signIn, signOut };
