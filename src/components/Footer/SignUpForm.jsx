import React from 'react'
import logo from "./assets/logo.png"
import Button from '../common/Button'
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SignUpForm() {
    const handleGoogleLogin = () => {
        window.location.href = 'https://accounts.google.com/login';
      };
    
      const handleFacebookLogin = () => {
        window.location.href = 'https://www.facebook.com/login';
      };
    return (
        <div className='signUp'>
            <img src={logo} alt="" />
            <h3>Sign Up</h3>
            <p>Create your account today</p>
            <button onClick={handleGoogleLogin}><FontAwesomeIcon icon={faGoogle} style={{ color: "#e70d0d", marginRight: "5px" }} /> Sign up with Google</button>
            <button  onClick={handleFacebookLogin}> <FontAwesomeIcon icon={faFacebook} size='lg' style={{ color: "#2760aa", marginRight: "5px" }} />  Sign up with Facebook </button>
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