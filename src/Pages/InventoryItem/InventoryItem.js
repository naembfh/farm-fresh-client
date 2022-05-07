import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import useVegetables from '../../Hooks/useVegetables';

const InventoryItem = ({vegetable}) => {
    const [inventoryItems,setInventoryItems]=useVegetables([])
    const [user]=useAuthState(auth)
    console.log(vegetable)
    const {_id,Name,img,price,quantity,description,supplier}=vegetable;
    const Navigate=useNavigate()
    const navigateToDetail=(id)=>{
Navigate( `/inventory/${id}`)
    }
   const handleDelete=(id)=>{
       const procced=window.confirm('Are you sure you want to delete?')
       if(procced){
           console.log(id)
           const url =`http://localhost:5000/vegetable/${id}`
fetch(url,{
    method:"DELETE"
})
.then(res=>res.json())
.then(data=>{
    if(data.deletedCount>0){ 
        toast('Vegetable deleted')
        console.log('deleted')
        const remaining= inventoryItems.filter(vegetable=> vegetable._id !==id)
        setInventoryItems(remaining)
       
    }
})
       }
   }
    return (
        <div className='row align-items-center mb-3 py-2 border border-success rounded'>
            <div class="col">
      <img className=' rounded' src={img} style={{height:"100px"}} alt="" srcset="" />
          </div>
    <div class="col">
     {Name}
    </div>
    <div className="col-4 title">
      {description.length>200 ? description.slice(0,200) + "...." :''}
    </div>
    <div class="col">
    {price} Rm / Kg
    </div>
    <div class="col">
      {quantity} Kg
    </div>
    <div class="col-2">
     {supplier}
    </div>
    
    <div class="col">
     <button onClick={()=>navigateToDetail(_id)}>Stock Update</button>
    </div>
  {
      user && <div class="col">
     <button onClick={()=>handleDelete(_id)} >Delete</button>
    </div>
  }  
        <ToastContainer></ToastContainer>    
        </div>
    );
};

export default InventoryItem;