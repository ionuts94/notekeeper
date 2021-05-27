import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import SignInPage from './pages/signInPage/signInPage';
import RegisterPage from './pages/registerPage/registerPage';
import LoggedPage from './pages/loggedpage/loggedpage';
import firebase from './fiebase';
import './App.css';


function App() {
  const [isLoged, setIsLogged] = useState(false);
  const [userId, setUserId] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const authListener = () => {
    firebase.auth().onAuthStateChanged(usr => {
        if(usr) {
          setUserId(usr.uid);
          setUserEmail(usr.email);
          setIsLogged(true);
        } else {
          setIsLogged(false);
        }
    })
  }

  useEffect(() => {
    authListener();
  }, [isLoged])

  if(!isLoged) { 
    return (
      <div className="App">
          <Switch>
            <Route path="/" exact component={ Homepage } />
            <Route path="/signin" exact component={ () => <SignInPage /> } />
            <Route path="/register" exact component={ () => <RegisterPage /> } />
          </Switch>
      </div>
    );
  }
  else {
    return(
      <div className="loggedPage">
        <LoggedPage userId={ userId } userEmail={ userEmail } />
      </div>
    )
  }
}

export default App;
