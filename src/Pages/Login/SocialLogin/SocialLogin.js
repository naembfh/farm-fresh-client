import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    return (
        <>
        {error?.message}
          <button onClick={()=>signInWithGoogle()}>google sign in</button>
        </>
    );
};

export default SocialLogin;