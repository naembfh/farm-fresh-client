import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from "react-hook-form";


const AddNewItem = () => {
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
  <input className='mb-2' placeholder='Supplier' type="email" {...register("supplier", )} />
  <input className='mb-2' placeholder='' type="submit" />
</form>

    </div>
    );
};

export default AddNewItem;