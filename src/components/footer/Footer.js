import React from 'react';
import {Link} from "react-router-dom";
import preval from 'preval.macro'
import './footer.css'

const Footer = () => {

    // const date = new Intl.DateTimeFormat('lt-Lt', {
    // year: "numeric",
    // month: "short",
    // day: "numeric",
    // hour: "numeric",
    // minute: "numeric"
    // }).format(Date.now())

    const dateTimeStamp = preval`module.exports = new Date().toLocaleString('lt-Lt', {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
    });`


    return (
        <div className='footer d-flex flex-column justify-content-center align-items-center'>

            <div>
                <Link to='/apie'>Apie iniciatyvą</Link>
            </div>
            <div className='text-center'>
                Kontaktai: <a href="mailto:info@pagalbaukrainai.lt">info@pagalbaukrainai.lt</a>
            </div>
            <div className='text-center'>Paskutinis atnaujinimas: {dateTimeStamp}</div>
        </div>
    );
};

export default Footer;