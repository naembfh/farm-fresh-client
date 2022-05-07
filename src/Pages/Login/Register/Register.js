import React, { useState } from 'react';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';


const Register = () => {
   
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
    const [updateProfile, updating] = useUpdateProfile(auth);
    const Navigate=useNavigate()
    const handleCreateUser=async(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const email=e.target.email.value
        const password=e.target.password.value
        await createUserWithEmailAndPassword(email,password)
        await updateProfile({ displayName:name});
    }
   
   const navigateToLogin=()=>{
Navigate('/login')
   }

    return (
        <div>
         <form onSubmit={handleCreateUser}>
             <input type="text" name="name" placeholder='Name' id="" />
         <input type="email" name="email" placeholder='Email' id="" />
  <input type="password" name="password" placeholder='Password' id="" />
  
  <input type="submit" value="Register" /> 

             </form> 
             <p>Already have an account? <button onClick={navigateToLogin}>Please Login</button></p>
             
        </div>
    );
};

export default Register;