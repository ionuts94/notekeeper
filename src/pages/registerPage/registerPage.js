import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormInput from '../../components/formInput/formInput.js';
import FormBtn from '../../components/formBtn/formBtn.js';
import NavBar from '../../components/navBar/navBar.js';
import firebase from '../../fiebase';
import './registerPage.css';

const RegisterPage = () => {
    const history = useHistory();

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleChangeCPassword = (e) => {
        setCPassword(e.target.value);  
    }
    const handleHttpRequest = () => {
        if(password !== cPassword) {
            return null;
        } else if(email.length < 3) { 
            alert('Username must be atleast 3 characters long')
            return null;
        } else {
            history.push('/');
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .catch(err => alert(err.message));      
        }
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');

    return(
        <div>
            <NavBar active={'register'} />
            <div className="registerPage signInPage">
                <div className="signInContainer unregistered">
                    <h1>REGISTER</h1>
                    <FormInput 
                        id={ 'registerUsername' }
                        name= { 'registerUsername' }
                        type= { 'text' }
                        label = { 'Email' }
                        handleChange = { handleChangeEmail }
                    />
                    <FormInput 
                        id={ 'registerPassword' }
                        name= { 'registerPassword' }
                        type= { 'password' }
                        label = { 'Password' }
                        handleChange = { handleChangePassword }
                    />
                    <div className="cpassDiv">
                        <FormInput 
                            id={ 'registerCPassword' }
                            name= { 'registerCPassword' }
                            type= { 'password' }
                            label = { 'Confirm Password' }
                            handleChange = { handleChangeCPassword }
                        />
                    </div>

                    <div className="mt40">
                        <FormBtn handleRequest = { handleHttpRequest }>REGISTER</FormBtn>
                        <span className="passMatch">{password === cPassword ?<div>&nbsp;</div> : "Passwords don't match!"}</span>
                    </div>
                </div> 

                <div className="signInContainer registered hidden">
                    <h1>Account created successfully!</h1>
                    <h3>Page will now be redirected to sign in</h3>
                    <div className="loadingSpin">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;