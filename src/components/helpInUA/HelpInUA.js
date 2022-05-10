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
            <div className='d-flex justify-content-center mb-5'>
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

            <div className='d-flex justify-content-center m-5'>
                <button onClick={() => getAllOrgs()} type="button"
                        className={`mx-1 btn ${getFilter === 'all' ? 'btn-warning text-primary fw-bold' : 'btn-outline-primary'}`}>Visi
                </button>
                <button onClick={() => getLocation('country')} type="button"
                        className={`mx-1 btn ${getFilter === 'country' ? 'btn-warning text-primary fw-bold' : 'btn-outline-primary'}`}>Visa Lietuva
                </button>
                <button onClick={() => getLocation('vilnius')} type="button"
                        className={`mx-1 btn ${getFilter === 'vilnius' ? 'btn-warning text-primary fw-bold' : 'btn-outline-primary'}`}>Vilnius
                </button>
                <button onClick={() => getLocation('kaunas')} type="button"
                        className={`mx-1 btn ${getFilter === 'kaunas' ? 'btn-warning text-primary fw-bold' : 'btn-outline-primary'}`}>Kaunas
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