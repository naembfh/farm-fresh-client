import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';



const AddNewItem = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate=useNavigate()
    if(!user){
        navigate('/')
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
      console.log(data)
      const url=`http://localhost:5000/vegetable`
      fetch(url,{
          method:"POST",
          headers:{
              "content-type":"application/json"
          },
          body:JSON.stringify(data)
  
  })
  .then(res=>res.json())
  .then(result=>{
      console.log(result)
      toast('Data added')
  })
    };
    return (
        <div className='w-50 mx-auto'>
        <h1>Please add service</h1>
        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
  <input className='mb-2' placeholder='Name' {...register("Name", )} />
  <input className='mb-2' placeholder='Quantity' {...register("quantity", { required: true, maxLength: 20 })} />
  <input className='mb-2' placeholder='Price' type="number" {...register("price", )} />
  <input className='mb-2' placeholder='Photo url' type="text" {...register("img", )} />
  <input className='mb-2' placeholder='Description' type="text" {...register("description", )} />
  <input className='mb-2' placeholder='Supplier'  type="Text" {...register("supplier", )} />
  <input className='mb-2' placeholder='Email' value={user?.email}  type="email" {...register("email", )} />
  <input className='mb-2' placeholder='' type="submit" />
</form>
<ToastContainer></ToastContainer>    

    </div>
    );
};

export default AddNewItem;