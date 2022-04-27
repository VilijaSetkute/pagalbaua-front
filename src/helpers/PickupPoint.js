import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

const PickupPoint = () => {
    return (
        <div className='d-flex justify-content-center align-items-center mx-2'>
            <div className='text-warning'>
                <FontAwesomeIcon style={{width: '36px', height: '32px'}} className='fs-3' icon={faLocationDot} />
            </div>
        </div>
    );
};

export default PickupPoint;