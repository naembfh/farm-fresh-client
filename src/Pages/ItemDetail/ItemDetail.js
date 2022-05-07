import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const ItemDetail = () => {
    const {id}=useParams();
  

    const [vegetable,setVegetable]=useState({})
    useEffect(()=>{
        const url= `http://localhost:5000/vegetable/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setVegetable(data))
    },[])
  
    return (
        <div>
            <h1>{vegetable.Name}</h1>
        </div>
    );
};

export default ItemDetail;