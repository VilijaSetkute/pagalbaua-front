import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";

const WorkIcon = () => {
    return (
        <div className='d-flex justify-content-center align-items-center mx-2 mt-3'>
            <div className='text-warning'>
                <FontAwesomeIcon style={{width: '36px', height: '32px'}} className='fs-3' icon={faBriefcase} />
            </div>
        </div>
    );
};

export default WorkIcon;