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
        <div>
         <form onSubmit={handleCreateUser}>
             <input type="text" name="name" placeholder='Name' id="" />
         <input type="email" name="email" placeholder='Email' id="" />
  <input type="password" name="password" placeholder='Password' id="" />
  <input type="password" name="confirmPassword" placeholder='Confirm Password' id="" />
  
  <input type="submit" value="Register" /> 

             </form> 
             <p>Already have an account? <button onClick={navigateToLogin}>Please Login</button></p>
             <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;