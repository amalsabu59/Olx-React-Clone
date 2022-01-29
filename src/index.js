import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from './store/Contest';
import { Contest } from './store/Contest'
import firebase from './Firebase/config'

ReactDOM.render(
<FirebaseContest.Provider value={{firebase}}>
<Context>
<App />
</Context>
</FirebaseContest.Provider>
 ,document.getElementById('root'));
