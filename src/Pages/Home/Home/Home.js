import React from 'react';
import InventoryItems from '../../InventoryItems/InventoryItems';
import Banner from '../../Banner/Banner'
import Contact from '../../Contact/Contact'
import ContactUs from '../Contact/ContactUs';

const Home = () => {
    

    return (
        <div>
            <Contact></Contact>
            <Banner></Banner>
           <InventoryItems></InventoryItems>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;