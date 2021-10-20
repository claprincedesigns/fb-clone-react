import React from 'react';
import './Login.css';
import Button from '@mui/material/Button';
import { auth, provider } from '../../firebase'
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

function Login() {
    const [state, dispatch] = useStateValue()
    const signIn = () => {
        console.log('I have been clicked!')
    //  Sign in Stuff
        auth
            .signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"
                    alt="Facebook Logo"
                />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt=""/>
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login;