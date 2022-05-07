import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user]=useAuthState(auth)
    
    const navigate=useNavigate()
    if(!user){
        navigate('/')
    }
   
const [myItem,setMyitem]=useState([])
useEffect(()=>{
    const url=`http://localhost:5000/vegetable?email=${user?.email}`
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