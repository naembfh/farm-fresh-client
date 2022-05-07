import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loadding from '../../Share/Loadding/Loadding';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

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