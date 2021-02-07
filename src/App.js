import './App.css';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './components/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './components/HomePage';
import firebase from 'firebase'
import Medication from "./Medication"

var firebaseConfig = {
  apiKey: "AIzaSyDs1BuBmCULnjtlsWrA0uKf-0AtX1ihVY8",
  authDomain: "blab-c32a2.firebaseapp.com",
  databaseURL: "https://blab-c32a2.firebaseio.com",
  projectId: "blab-c32a2",
  storageBucket: "blab-c32a2.appspot.com",
  messagingSenderId: "827490397878",
  appId: "1:827490397878:web:7f25e4b51dcaeb0396c017",
  measurementId: "G-SWBHZCFVM5" 
};

firebase.initializeApp(  firebaseConfig  );

var db = firebase.firestore();

db.collection("users").add({
  first: "Omar",
  middle: "Mathison",
  last: "Turing",
  born: 1912
})
.then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
  console.error("Error adding document: ", error);
});

db.collection("users").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
  });
});

 
function App() {
  
  return (
    <AuthProvider>

        <div>
          <Router>
            <Switch>
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={LogIn} />
              <Route path="/home" component={HomePage} />
              <Route component={LogIn} />
            </Switch>
          </Router>
        </div>
    </AuthProvider>
  );
}

export default App;
