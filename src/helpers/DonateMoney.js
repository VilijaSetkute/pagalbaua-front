import React from 'react';
import './donate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoins, faHandHolding} from "@fortawesome/free-solid-svg-icons";

const DonateMoney = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{margin: '16px 0 4px 0'}}>
            <div className='text-warning d-flex flex-column position-relative' style={{width: '36px', height: '36px'}}>
                <FontAwesomeIcon style={{fontSize: '14px'}} icon={faCoins} />
                <FontAwesomeIcon style={{fontSize: '32px'}} className='absolute' icon={faHandHolding} />
            </div>
        </div>
    );
};

export default DonateMoney;