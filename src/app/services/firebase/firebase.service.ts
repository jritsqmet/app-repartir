import { Injectable } from '@angular/core';
import { Observable} from  'rxjs'

import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  firebaseConfig = {
    apiKey: "AIzaSyDL1D2C1EJDLqzOYWjqm55w2-HyTzupeFg",
    authDomain: "testweb-1f565.firebaseapp.com",
    databaseURL: "https://testweb-1f565-default-rtdb.firebaseio.com",
    projectId: "testweb-1f565",
    storageBucket: "testweb-1f565.appspot.com",
    messagingSenderId: "45376403947",
    appId: "1:45376403947:web:df545103389ab2740601ae"
  };

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  db = getDatabase(this.app)



}

