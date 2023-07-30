import React from 'react'
import logo from "./assets/logo.png"
import Button from '../common/Button'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SignUpForm() {
    const firebaseConfig = {
        apiKey: "AIzaSyDYiW1HJPursSgqWvq-vRXxHSfcntv__VU",
        authDomain: "login-5990d.firebaseapp.com",
        projectId: "login-5990d",
        storageBucket: "login-5990d.appspot.com",
        messagingSenderId: "471422538466",
        appId: "1:471422538466:web:fcf11f42e35ee98cf1c4bb",
        measurementId: "G-TB9M2ZL56D"
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    function call_login_google() {
        const providerGoogle = new GoogleAuthProvider();
        signInWithPopup(auth, providerGoogle)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                alert(`Correct Login with ${result.user.displayName} `)
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    function call_login_facebook() {
        const providerFacebook = new FacebookAuthProvider();
        signInWithPopup(auth, providerFacebook)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                alert(`Correct Login with ${result.user.displayName} `)

                // IdP data available using getAdditionalUserInfo(result)
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);

                // ...
            });


    }

    return (
        <div className='signUp'>
            <img src={logo} alt="" />
            <h3>Sign Up</h3>
            <p>Create your account today</p>
            <button onClick={call_login_google}><FontAwesomeIcon icon={faGoogle} style={{ color: "#e70d0d", marginRight: "5px" }} /> Sign up with Google</button>
            <button onClick={call_login_facebook} > <FontAwesomeIcon icon={faFacebook} size='lg' style={{ color: "#2760aa", marginRight: "5px" }} />  Sign up with Facebook </button>
            <form className='userCreator'>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" />
                <div class="password-row-labels">
                    <label for="password">Password</label>
                    <label for="repeatPassword">Repeat Password</label>

                </div>
                <div class="password-row">
                    <input type="password" name="password" id="password" />
                    <input type="password" name="repeatPassword" id="repeatPassword" />
                </div>
                <label htmlFor="" id='labelchk'><input type="checkbox" name="terms" id="" />
                    I accept the <a href="">&nbsp;terms&nbsp;</a> and <a href=""> &nbsp;privacy policy&nbsp; </a></label>
                <Button bgColor="#3874ff" radius={8} style={{ fontFamily: "Nunito Sans", fontSize: 20, padding: "10px 30px" }} >Sign up</Button>
            </form>

        </div>
    )
}

export default SignUpForm