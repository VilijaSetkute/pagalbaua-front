import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandsHoldingChild} from "@fortawesome/free-solid-svg-icons";

const HelpKids = () => {
    return (
        <div className='d-flex justify-content-center align-items-center mx-2 mt-3'>
            <div className='text-warning'>
                <FontAwesomeIcon style={{width: '36px', height: '32px'}} className='fs-2' icon={faHandsHoldingChild} />
            </div>
        </div>
    );
};

export default HelpKids;