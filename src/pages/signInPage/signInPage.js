import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormBtn from '../../components/formBtn/formBtn'
import FormInput from '../../components/formInput/formInput';
import NavBar from '../../components/navBar/navBar';
import firebase from '../../fiebase';
import './signInPage.css';

const SignInPage = (props) => {
    const history = useHistory();

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleHttpRequest = () => {
        firebase.auth().signInWithEmailAndPassword(username, password)
            .then(() => {
                history.push('/');
            })
            .catch(err => {
                alert(err);
            })
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div>
            <NavBar active={'signin'} />
            <div className="signInPage">
                <div className="signInContainer">
                    <h1>SIGN IN</h1>
                    <FormInput 
                        id={ 'loginUsername' }
                        name= { 'loginUsername' }
                        type= { 'text' }
                        label = { 'Email' }
                        handleChange = { handleChangeUsername }
                    />
                    <FormInput 
                        id={ 'loginPassword' }
                        name= { 'loginPassword' }
                        type= { 'password' }
                        label = { 'Password' }
                        handleChange = { handleChangePassword }
                    />

                    <div className="mt40">
                        <FormBtn handleRequest = { handleHttpRequest }>SIGN IN</FormBtn>
                        <span className="passMatch">&nbsp;</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SignInPage;