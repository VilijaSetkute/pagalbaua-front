import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import './toolbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faBars} from "@fortawesome/free-solid-svg-icons";

const Toolbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    function handleToggle() {
        if (screenWidth <= 1070) {
            setToggleMenu(!toggleMenu)
        }
    }

    const nav = useNavigate()
    function homePage() {
        if (screenWidth <= 1070) {
            setToggleMenu(false)
        }
        nav('/')
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])


    return (
        <div className='toolbar bg-primary'>
            <div className='d-flex justify-content-between'>
                <div className='flagbox'>
                    <Link to='/'><FontAwesomeIcon className='fs-4' icon={faHome} onClick={homePage}/></Link>
                </div>
                <div className='menuicon flex justify-center align-center align-items-center me-4'>
                    <FontAwesomeIcon className='fs-1' icon={faBars}  onClick={handleToggle}/>
                </div>
            </div>
            {(toggleMenu || screenWidth > 1070) &&
            <div className='d-flex menuposition'>
                <Link to='/pagalba-Ukrainoje' onClick={handleToggle}>Pagalba Ukrainoje</Link>
                <Link to='/pagalba-Lietuvoje' onClick={handleToggle}>Pagalba Lietuvoje</Link>
                <Link to='/paramos-punktai-ukrainieciams' onClick={handleToggle}>Paramos punktai ukrainiečiams</Link>
                <Link to='/naudingos-nuorodos' onClick={handleToggle}>Naudinga informacija</Link>
            </div>}
        </div>
    );
};

export default Toolbar;