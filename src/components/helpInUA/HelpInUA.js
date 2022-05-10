import React, {useEffect, useState} from 'react';
import './helpInUA.css'
import DonateMoney from "../../helpers/DonateMoney";
import DonateHumanitarian from "../../helpers/DonateHumanitarian";
import DonateVolunteers from "../../helpers/DonateVolunteers";
import http from "../../helpers/http";
import OrganisationCard from "../cards/OrganisationCard";


const HelpInUa = () => {

    const [getFilter, setFilter] = useState('all')
    const [getExpanded, setExpanded] = useState('')
    const [getHeight, setHeight] = useState(0)

    const [getOrganisations, setOrganisations] = useState([])

    async function getAllOrgs() {
        setFilter('all')
        const data = await http.get('/orgList')
        if (data.success) return setOrganisations(data.allList)
    }

    async function getLocation(city) {
        setFilter(city)
        const data = await http.post('/orgLocation', {city: city})
        if (data.success) return setOrganisations(data.filteredList)
    }

    useEffect(() => {
        getAllOrgs()
    }, [])

    return (
        <div>
            <div style={{height: '70px'}}/>
            <div className='lt-help-legend d-flex justify-content-center mb-3'>
                <div className='legend-box m-1'>
                    <DonateMoney/>
                    <div className='text-center'>Finansinė pagalba</div>
                </div>
                <div className='legend-box m-1'>
                    <DonateHumanitarian/>
                    <div className='text-center mt-1'>Humanitarinė pagalba</div>
                </div>
                <div className='legend-box m-1'>
                    <div className='mt-3'>
                        <DonateVolunteers/>
                    </div>
                    <div className='text-center mt-1'>Reikalingi savanoriai</div>
                </div>
            </div>

            <div className='d-flex justify-content-center mb-5 flex-wrap'>
                <button onClick={() => getAllOrgs()} type="button"
                        className={getFilter === 'all' ? 'm-1 btn btn-warning text-primary fw-bold' : 'm-1 btn btn-outline-primary'}>Visos organizacijos
                </button>
                <button onClick={() => getLocation('country')} type="button"
                        className={getFilter === 'country' ? 'm-1 btn btn-warning text-primary fw-bold' : 'm-1 btn btn-outline-primary'}>Veikia visoje Lietuvoje
                </button>
                <button onClick={() => getLocation('vilnius')} type="button"
                        className={getFilter === 'vilnius' ? 'm-1 btn btn-warning text-primary fw-bold' : 'm-1 btn btn-outline-primary'}>Veikia Vilniuje
                </button>
                <button onClick={() => getLocation('kaunas')} type="button"
                        className={getFilter === 'kaunas' ? 'm-1 btn btn-warning text-primary fw-bold' : 'm-1 btn btn-outline-primary'}>Veikia Kaune
                </button>
            </div>


            <div className='org-block'>

                {getOrganisations.map((x, i) => <OrganisationCard
                    key={i}
                    organisation={x}
                    getExpanded={getExpanded}
                    setExpanded={setExpanded}
                    getFilter={getFilter}
                    getHeight={getHeight}
                    setHeight={setHeight}
                />)}

            </div>

        </div>
    );
};

export default HelpInUa;