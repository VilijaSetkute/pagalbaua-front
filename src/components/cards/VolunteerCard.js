import React, {useEffect, useRef} from 'react';
import Volunteer from "../../helpers/Volunteer";
import WorkIcon from "../../helpers/WorkIcon";

const VolunteerCard = ({organisation, getFilter, getExpanded, setExpanded, getHeight, setHeight}) => {

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
                    <div className='d-flex'>
                        <Volunteer/>
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

                    <button type='button' className='btn py-0 btn-outline-primary mb-3 d-flex align-items-center'>
                        <a href={organisation.website} target='_blank' rel='noreferrer'
                           className='me-3'>{organisation.linkText}</a>
                        <div style={{fontSize: '28px'}}>&#129122;</div>
                    </button>
                </div>}
            </div>}
        </div>
    );
};

export default VolunteerCard;