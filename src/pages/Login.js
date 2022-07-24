import React from 'react'
import "../App.css";
import {auth,provider} from '../firebase-config';
import {signInWithPopup,signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';



function Login({setIsAuth,isAuth,userName,setUserName}) {

    let navigate = useNavigate();
    const signInWithGoogle=()=>{
        signInWithPopup(auth,provider).then((result)=>{
            localStorage.setItem("isAuth",true);
            localStorage.setItem("auth",auth);
            setIsAuth(true);
            setUserName(auth.currentUser.displayName);
            localStorage.setItem("username",auth.currentUser.displayName);
            navigate("/"); 
            
        });
    };

    const signUserOut=()=>{
        signOut(auth).then(()=>{
            localStorage.clear();
            setIsAuth(false);
            setUserName("");
        })
    }


  return (

    <div className="LoginPage">

        {!isAuth?
        <>
        <div className="sign-in-div">
    <p>Sign in with google to continue</p>

    <button className='Login-with-google' onClick={signInWithGoogle}>
     <div className="google-btn">
        <div className="google-icon-wrapper">
             <img alt='google' className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
        </div>
        <p className="btn-text">Sign in with google</p>
    </div>
    </button>
    </div>
        </>:<>
        <div>Hello {userName}</div> 
        <button onClick={signUserOut}>Sign Out</button>
        </>}
    </div>
  )
}

export default Login