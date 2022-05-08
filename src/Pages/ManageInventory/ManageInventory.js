import React, { useEffect, useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';

const ManageInventory = () => {
    const [inventoryItems,setInventoryItems]=useState([]);
    useEffect(()=>{
        const url='https://fathomless-brushlands-62853.herokuapp.com/vegetable'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setInventoryItems(data))
    },[])
    return (
        
        <div className='container '>
        {
            inventoryItems.map(vegetable=> <InventoryItem
            key={vegetable._id}
            vegetable={vegetable}
            
            ></InventoryItem>)
        }
    </div>
    );
};

export default ManageInventory;