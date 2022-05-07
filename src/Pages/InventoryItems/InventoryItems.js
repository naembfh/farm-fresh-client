import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryItems = () => {
    const [inventoryItems,setInventoryItems]=useState([]);
    useEffect(()=>{
        const url='http://localhost:5000/vegetable'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setInventoryItems(data))
    },[])
    const Navigate=useNavigate()
    const navigateToDetail=(id)=>{
Navigate( `/inventory/${id}`)
    }
    return (
       <div>
            <div className='container '>
            {
                inventoryItems.slice(0,6).map(vegetable=> <InventoryItem
                key={vegetable._id}
                vegetable={vegetable}
                navigateToDetail={navigateToDetail}
                ></InventoryItem>)
            }
        </div>
        <Link to='manageInventory'>Manage Inventory</Link>
       </div>
    );
};

export default InventoryItems;