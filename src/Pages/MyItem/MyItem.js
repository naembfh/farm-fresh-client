import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user]=useAuthState(auth)
    const {email}=user
    console.log(email)
const [myItem,setMyitem]=useState([])
useEffect(()=>{
    const url=`http://localhost:5000/vegetable?email=${email}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        
    })
   
},[])
    return (
        <div>
            
        </div>
    );
};

export default MyItem;