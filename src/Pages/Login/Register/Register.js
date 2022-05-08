import React, { useState } from 'react';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';


const Register = () => {
   
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
    const navigate =useNavigate()
    const [updateProfile, updating] = useUpdateProfile(auth);
   
    const handleCreateUser=async(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const email=e.target.email.value
        const password=e.target.password.value
        const confirmPassword=e.target.confirmPassword.value
        if(password !== confirmPassword){
return toast('Password do not match')
        }
        else{
          await createUserWithEmailAndPassword(email,password)
        await updateProfile({ displayName:[name]});  
        navigate('/')
        }
        
    }
   
   const navigateToLogin=()=>{
navigate('/login')
   }

    return (
        <div className='mt-5 pt-2 w-50 mx-auto'>
          <h1>Register</h1>
         <form className='d-flex flex-column' onSubmit={handleCreateUser}>
   <input className='mb-2'  type="text" name="name" placeholder='Name' id="" />
   <input className='mb-2'  type="email" name="email" placeholder='Email' id="" />
  <input  className='mb-2' type="password" name="password" placeholder='Password' id="" />
  <input  className='mb-2' type="password" name="confirmPassword" placeholder='Confirm Password' id="" />
  
  <input type="submit" value="Register" /> 

             </form> 
             <p className='mt-2'>Already have an account? <button onClick={navigateToLogin}>Please Login</button></p>
             <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;