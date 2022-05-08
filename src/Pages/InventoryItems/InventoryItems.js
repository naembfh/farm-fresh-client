import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useVegetables from '../../Hooks/useVegetables';
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryItems = () => {
    const [inventoryItems,setInventoryItems]=useVegetables([])
    const Navigate=useNavigate()
    const navigateToDetail=(id)=>{
Navigate( `/inventory/${id}`)
    }
    return (
       <div>
            <div className='mt-3' >
               
           <div className='container mt-5 '>
           {
                inventoryItems.slice(0,6).map(vegetable=> <InventoryItem
                key={vegetable._id}
                vegetable={vegetable}
                navigateToDetail={navigateToDetail}
                ></InventoryItem>)
            }
           </div>
           <Link to='manageInventory'><button>Manage Inventory</button></Link>
        </div>
        
       </div>
    );
};

export default InventoryItems;