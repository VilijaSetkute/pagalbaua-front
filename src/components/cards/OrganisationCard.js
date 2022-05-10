import React, {useEffect, useRef} from 'react';
import DonateMoney from "../../helpers/DonateMoney";
import DonateHumanitarian from "../../helpers/DonateHumanitarian";
import DonateVolunteers from "../../helpers/DonateVolunteers";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const OrganisationCard = ({organisation, getFilter, getExpanded, setExpanded, getHeight, setHeight}) => {

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
            {(getFilter === 'all' || getFilter === organisation.locationAlias) &&
            <div style={getExpanded === organisation.nameAlias ? {height: getHeight + 'px'} : {maxHeight: '200px'}}>
                <div
                    className={`org-box ${getExpanded === organisation.nameAlias && 'border border-5 border-warning'} d-flex flex-column justify-content-between align-items-center text-white text-center`}
                    onClick={() => toggleBox(organisation.nameAlias)}>
                    <div className='d-flex justify-content-center'>
                        <div className='d-flex align-items-start justify-content-between'>
                            {organisation.helpIcon.donateMoney && <div className='me-2'><DonateMoney/></div>}
                            {organisation.helpIcon.donateHumanitarian && <DonateHumanitarian/>}
                        </div>
                        <div className='d-flex justify-content-center mt-3'>
                            {organisation.helpIcon.donateVolunteering && <DonateVolunteers/>}
                        </div>
                    </div>
                    <div>
                        <div className='fw-bold fs-5'>{organisation.title}</div>
                        <div>{organisation.locationText}</div>
                    </div>
                </div>
                {getExpanded === organisation.nameAlias && <div ref={ref} className='child'>
                    <div className='mb-3'>
                        <div className='text-uppercase text-primary fw-bold'>Paramos gavėjas</div>
                        <div>{organisation.receiverType}
                        </div>
                    </div>
                    <div className='mb-3'>
                        <div className='text-uppercase text-primary fw-bold'>Paramos pobūdis</div>
                        <div>{organisation.donationType}
                        </div>
                    </div>
                    <div className='mb-3'>
                        <div className='text-uppercase text-primary fw-bold'>Aukojimo būdai</div>
                        {organisation.donationForms.map((x, i) => <div style={{textAlign: 'left'}} key={i}>&#10003; {x}</div>)}
                    </div>

                    {/*<button type='button' className='btn py-0 btn-outline-primary mb-3 d-flex align-items-center'>*/}
                    {/*    <a href={organisation.website} target='_blank' rel='noreferrer'*/}
                    {/*       className='me-3'>{organisation.linkText}</a>*/}
                    {/*    <FontAwesomeIcon icon={faAngleDoubleRight} className='fs-4 py-2'/>*/}
                    {/*</button>*/}
                    <div>
                        <a className='btn py-0 btn-outline-primary my-3 me-3 d-flex align-items-center fit-content'
                           href={organisation.website}
                           target='_blank' rel='noreferrer'>
                            Oficialus puslapis <FontAwesomeIcon icon={faAngleDoubleRight} className='fs-4 py-2 ps-3 pe-0'/>
                        </a>
                    </div>
                </div>}
            </div>}
        </div>
    );
};

export default OrganisationCard;