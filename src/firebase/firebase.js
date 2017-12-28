import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBt6vetvQMwG9KuUf99Rgt-pADNd9tWLsg',
  authDomain: 'expensify-9313.firebaseapp.com',
  databaseURL: 'https://expensify-9313.firebaseio.com',
  projectId: 'expensify-9313',
  storageBucket: 'expensify-9313.appspot.com',
  messagingSenderId: '774138614776',
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
