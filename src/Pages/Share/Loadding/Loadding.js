import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loadding = () => {
    return (
        <div className='w-100 d-flex justify-content-center align-items-center'>
            <Spinner animation="grow" /> <Spinner animation="grow" /> <Spinner animation="grow" />
        </div>
    );
};

export default Loadding;