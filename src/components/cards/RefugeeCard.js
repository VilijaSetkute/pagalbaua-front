import React, {useEffect, useRef} from 'react';
import DonateMoney from "../../helpers/DonateMoney";
import DonateHumanitarian from "../../helpers/DonateHumanitarian";
import DonateVolunteers from "../../helpers/DonateVolunteers";
import './cards.css'
import PickupPoint from "../../helpers/PickupPoint";

const RefugeeCard = ({point, getFilter, getExpanded, setExpanded, getHeight, setHeight}) => {

    const ref = useRef()

    function toggleBox(text) {
        if (getExpanded === text) {
            setExpanded('')
            setHeight(ref.current.clientHeight + 200)
        } else {
            setExpanded(text)
        }
    }

    useEffect(() => {
        if (ref.current) {
            setHeight(ref.current.clientHeight + 200)
        }
    }, [getExpanded])


    return (
        <div>
            <div>
                {(getFilter === 'all' || getFilter === point.locationAlias) &&
                <div style={getExpanded === point.nameAlias ? {height: getHeight + 'px'} : {maxHeight: '200px'}}>
                    <div
                        className={`org-box ${getExpanded === point.nameAlias && 'border border-5 border-warning'} d-flex flex-column justify-content-between align-items-center text-white text-center`}
                        onClick={() => toggleBox(point.nameAlias)}>
                        <div className='d-flex m-3'>
                            <PickupPoint/>
                        </div>
                        <div>
                            <div className='fw-bold fs-5'>{point.title}</div>
                            <div>{point.locationText}</div>
                        </div>
                    </div>
                    {getExpanded === point.nameAlias && <div ref={ref} className='child'>
                        <div className='mb-3'>
                            <div className='text-uppercase text-primary fw-bold'>Teikiama pagalba</div>
                            {point.DonationForms.map((x, i) => <div style={{textAlign: 'left'}} key={i}>&#10003; {x}</div>)}
                        </div>

                        {point.extrainfo.length > 0 &&
                            <div className='mb-3'>
                                <div className='text-uppercase text-primary fw-bold'>Papildoma informacija / paslaugos</div>
                                <div>{point.extrainfo}</div>
                            </div>
                        }

                        <div className='mb-3'>
                            <div className='text-uppercase text-primary fw-bold'>Kontaktai</div>
                            <div><strong>Adresas:</strong> {point.address}</div>
                            <div><strong>Darbo laikas:</strong> {point.openHours}</div>
                            {point.phone.length > 0 && <div><strong>Telefonas:</strong> {point.phone}</div>}
                        </div>

                        <div className='mb-3'>
                            <div className='text-uppercase text-primary fw-bold mb-2'>Viešasis transportas</div>
                            <div className='mb-2'>
                                <div className='fw-bold'>Stotelė </div>
                                <button className='text-primary fw-bold p-2 border border-primary rounded bg-white'>{point.publicTransport}</button>
                            </div>


                            {point.publicBusExpress.length > 0 &&
                                <div className='mb-2'>
                                    <div className='fw-bold'>Greitieji autobusai</div>
                                    <div className='d-flex flex-wrap'>
                                        {point.publicBusExpress.map((x, i) => <div className='transportCard rounded me-2 my-1 px-2 py-1 text-white' style={{backgroundColor: 'darkgreen'}} key={i}>{x}</div>)}
                                    </div>
                                </div>
                            }

                            {point.publicBus.length > 0 &&
                                <div className='mb-2'>
                                    <div className='fw-bold'>Autobusai</div>
                                    <div className='d-flex flex-wrap'>
                                        {point.publicBus.map((x, i) => <div className='transportCard rounded me-2 my-1 px-2 py-1 text-white' style={{backgroundColor: '#0000b7'}}  key={i}>{x}</div>)}
                                    </div>
                                </div>
                            }

                            {point.publicTrolley.length > 0 &&
                                <div className='mb-2'>
                                    <div className='fw-bold'>Troleibusai</div>
                                    <div className='d-flex flex-wrap'>
                                        {point.publicTrolley.map((x, i) => <div className='transportCard rounded me-2 my-1 px-2 py-1 text-white' style={{backgroundColor: '#be0000'}} key={i}>{x}</div>)}
                                    </div>
                                </div>
                            }
                        </div>


                        {point.website.length > 0 &&
                            <button type='button' className='btn py-0 btn-outline-primary mb-3 d-flex align-items-center'>
                                <a href={point.website} target='_blank' rel='noreferrer'
                                   className='me-3'>{point.linkText}</a>
                                <div style={{fontSize: '28px'}}>&#129122;</div>
                            </button>
                        }

                    </div>}
                </div>}
            </div>
        </div>
    );
};

export default RefugeeCard;