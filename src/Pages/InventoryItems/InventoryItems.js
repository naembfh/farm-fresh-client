import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryItems = () => {
    const [inventoryItems,setInventoryItems]=useState([]);
    useEffect(()=>{
        const url='http://localhost:5000/vegetable'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setInventoryItems(data))
    },[])
    return (
       <div>
            <div className='container '>
            {
                inventoryItems.map(vegetable=> <InventoryItem
                key={vegetable._id}
                vegetable={vegetable}
                ></InventoryItem>)
            }
        </div>
        <Link to='/invetory/:id'>Manage Inventory</Link>
       </div>
    );
};

export default InventoryItems;