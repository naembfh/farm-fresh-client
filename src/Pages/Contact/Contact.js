import React from 'react';



const Contact = () => {
    return (
       <div>
            <div className='container pt-2 mt-5'>
            <div className=' d-flex justify-content-around mt-3'>
                <div className='d-flex '>
                    <div className='d-flex mx-2'>
                        <img style={{ width: "25px", height: "25px" }} src="https://i.ibb.co/Tq96HV4/call.jpg" alt="" srcset="" />
                        <p>+60183141719</p>
                    </div>
                    <div className='d-flex '>
                        <img style={{ width: "25px", height: "25px" }} src='https://i.ibb.co/YkSd7xj/email.png'alt="" srcset="" />
                        <p>naembfh@gmail.com</p>
                    </div>
                </div>
                <div className='d-flex'>
                    <img style={{ width: "25px", height: "25px" }} src='https://i.ibb.co/4mH4wxx/facebook.png' alt="" srcset="" />
                    <img style={{ width: "25px", height: "25px" }} src='https://i.ibb.co/23JM4cW/twitter.png' alt="" srcset="" />


                </div>
            </div>
            <hr /> <hr />
        </div>
       </div>
    );
};

export default Contact;