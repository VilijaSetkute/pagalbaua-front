import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandHoldingMedical} from "@fortawesome/free-solid-svg-icons";

const DonateHumanitarian = () => {
    return (
        <div className='d-flex justify-content-center align-items-center mx-1' >
            <div className='text-warning'>
                <FontAwesomeIcon style={{width: '36px', height: '32px'}} className='fs-2' icon={faHandHoldingMedical} />
            </div>
        </div>
    );
};

export default DonateHumanitarian;