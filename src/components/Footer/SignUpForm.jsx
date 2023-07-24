import React from 'react'
import logo from "./assets/logo.png"
import Button from '../common/Button'

import {faFacebook, faGoogle} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignUpModal from './SignUpModal';


function SignUpForm() {
    return (
        <div className='signUp'>
            <img src={logo} alt="" />
            <h3>Sign Up</h3>
            <p>Create your account today</p>
            <button><FontAwesomeIcon icon={faGoogle} style={{ color: "#e70d0d", marginRight: "5px" }} /> Sign up with Google</button>
            <button> <FontAwesomeIcon icon={faFacebook} size='lg' style={{ color: "#2760aa", marginRight: "5px" }} />  Sign up with Facebook </button>
            <form className='userCreator'>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" />
                <label htmlFor="password">Password</label>
                <input type="password" name="" id="" />
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" id="" />
                <label htmlFor=""><input type="checkbox" name="terms" id="" />I accept the <a href="">terms</a> and <a href="">privacy policy</a></label>
                <Button bgColor="#3874ff" radius={8} style={{ fontFamily: "Nunito Sans", fontSize: 20, padding: "10px 30px" }} >Sign up</Button>
            </form>

        </div>
    )
}

export default SignUpForm