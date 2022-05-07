import React from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryItem = ({vegetable}) => {
    console.log(vegetable)
    const {_id,Name,img,price,quantity,description,supplier}=vegetable;
    const Navigate=useNavigate()
    const navigateToDetail=(id)=>{
Navigate( `/inventory/${id}`)
    }
   
    return (
        <div className='row align-items-center mb-3 py-2 border border-success rounded'>
            <div class="col">
      <img className=' rounded-circle' src={img} style={{height:"50px"}} alt="" srcset="" />
          </div>
    <div class="col">
     {Name}
    </div>
    <div class="col-5 .text-truncate">
      {description}
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
            
        </div>
    );
};

export default InventoryItem;