import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const Navigate=useNavigate()
    const handleSignIn=(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        signInWithEmailAndPassword(email, password)
    }
    if(user){
      Navigate(from, { replace: true });

    }
    const navigateToRegister=()=>{
Navigate('/register')
    }
    return (
        <div>
<form onSubmit={handleSignIn}>
<input type="email" name="email" placeholder='Email' id="" />
  <input type="password" name="password" placeholder='Password' id="" />
  <input type="submit" value="Login" />  
</form>
<p>New to shop? <button onClick={navigateToRegister}>Please register first</button></p>
<hr />
<SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;