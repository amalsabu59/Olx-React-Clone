import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from './store/firebaseContest';
import { FirebaseContest } from './store/firebaseContest'
import firebase from './Firebase/config'

ReactDOM.render(
<FirebaseContest.Provider value={{firebase}}>
<Context>
<App />
</Context>
</FirebaseContest.Provider>
 ,document.getElementById('root'));
