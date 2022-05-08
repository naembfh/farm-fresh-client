import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import InventoryItem from '../InventoryItem/InventoryItem';

const MyItem = () => {
    const [user]=useAuthState(auth)
    const [inventoryItems,setInventoryItems]=useState([])
    
    const navigate=useNavigate()
    if(!user){
        navigate('/')
    }
   

useEffect(()=>{
    const url=`https://fathomless-brushlands-62853.herokuapp.com/vegetable?email=${user?.email}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setInventoryItems(data)
        
    })
   
},[])
    return (
        <div>
           {
               inventoryItems.map(vegetable=> <InventoryItem
               key={vegetable._id}
               vegetable={vegetable}
               ></InventoryItem>)
           } 
        </div>
    );
};

export default MyItem;