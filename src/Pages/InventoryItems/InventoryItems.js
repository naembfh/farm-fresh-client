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
            <div className='container '>
                <div className='row-md d-md-flex d-sm-none d-md-block'>
                    <div className='col '>col</div>
                    <div className='col'>col</div>
                    <div className='col-4'>col</div>
                    <div className='col'>col</div>
                    <div className='col'>col</div>
                    <div className='col'>col</div>
                </div>
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