import React from 'react';
import InventoryItems from '../../InventoryItems/InventoryItems';
import Banner from '../../Banner/Banner'
import Contact from '../../Contact/Contact'

const Home = () => {
    

    return (
        <div>
            <Contact></Contact>
            <Banner></Banner>
           <InventoryItems></InventoryItems>
        </div>
    );
};

export default Home;