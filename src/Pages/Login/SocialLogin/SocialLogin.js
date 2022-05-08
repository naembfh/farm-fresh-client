import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loadding from '../../Share/Loadding/Loadding';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    console.log(user)
    const navigate=useNavigate()
    if(user){
        navigate('/')
    }

if(loading){
return <Loadding></Loadding>
}
    return (
        <>
        {error?.message}
          <button onClick={()=>signInWithGoogle()}>google sign in</button>
        </>
    );
};

export default SocialLogin;