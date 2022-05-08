import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import auth from '../../../firebase.init';
import Loadding from '../../Share/Loadding/Loadding';

import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [emailBlur,setEamilBlur]=useState('')
const  handleEmailBlur=(e)=>{
  setEamilBlur(e.target.value)
}
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if(loading || sending){
return <Loadding></Loadding>
  }

  if (user) {
      navigate(from, { replace: true });
  }

  if (error) {
      errorElement = <p>Error: 'Email and Password Do not match'</p>
  }

  const handleSignIn=(e)=>{
    e.preventDefault()
    const email=e.target.email.value
    const password=e.target.password.value
    signInWithEmailAndPassword(email, password)
}

const navigateToRegister=()=>{
  navigate('/register')
      }

  const resetPassword = async () => {
    
      if (emailBlur) {
          await sendPasswordResetEmail(emailBlur);
          toast('Sent email');
      }
      else{
          toast('Please enter your email address');
      }
  }
    return (
       <div className='mt-5'>
          <div className='w-50 pt-2 mx-auto'>
          <h1>Login</h1>
<form className='d-flex flex-column' onSubmit={handleSignIn}>
  <input className='mb-2'  type="email" onBlur={handleEmailBlur} name="email" placeholder='Email' id="" required/>
  <input className='mb-2' type="password" name="password" placeholder='Password' id="" required />
  <input className='mb-2' type="submit" value="Login" />  
</form>
{errorElement}
<p>New to shop? <button onClick={navigateToRegister}>Please register first</button></p>
<p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
<hr />
<SocialLogin></SocialLogin>
<ToastContainer></ToastContainer>
        </div>
       </div>
    );
};

export default Login;