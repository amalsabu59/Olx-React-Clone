import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { FirebaseContest } from './store/firebaseContest'
import firebase from './Firebase/config'

ReactDOM.render(
<FirebaseContest.Provider value={{firebase}}>
<App />
</FirebaseContest.Provider>
 ,document.getElementById('root'));
