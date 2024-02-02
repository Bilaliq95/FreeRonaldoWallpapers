import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCA3AMXbFBx9MdQhOQMCz0mwZThTp_9oMY',
  authDomain: 'wallpapersapp-388e5.firebaseapp.com',
  projectId: 'wallpapersapp-388e5',
  storageBucket: 'wallpapersapp-388e5.appspot.com',
  messagingSenderId: '722309953319',
  appId: '1:722309953319:web:10e712866026a707649b02',
  measurementId: 'G-DERBFZYEXD',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
