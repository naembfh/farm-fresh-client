import React from 'react';

const ContactUs = () => {
    return (
        <div class="container mt-5 bg-success mb-5 d-flex flex-column"
        style={{height:"250px"}}>
            <h1>Let's Stay In Touch</h1>
            <p>Get Updates On Specials and More</p>

            <input className='mb-2 rounded-3' type="text" placeholder='Your email' name="" id="" /> <br />
            <input className='rounded-3 text-primary' type="submit" value="Submit" />
        </div>
    );
};

export default ContactUs;