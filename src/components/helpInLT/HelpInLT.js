import './helpInLT.css'
import React, {useEffect, useState} from 'react';
import DonateMoney from "../../helpers/DonateMoney";
import DonateHumanitarian from "../../helpers/DonateHumanitarian";
import DonateVolunteers from "../../helpers/DonateVolunteers";
import http from "../../helpers/http";
import FinanceLTCard from "../cards/FinanceLTCard";
import WorkLtCard from "../cards/WorkLTCard";
import ItemsCard from "../cards/ItemsCard";
import KidsCard from "../cards/KidsCard";
import VolunteerCard from "../cards/VolunteerCard";
import HelpKids from "../../helpers/HelpKids";
import WorkIcon from "../../helpers/WorkIcon";

const HelpInLt = () => {
    const [getFilter, setFilter] = useState('all')
    const [getExpanded, setExpanded] = useState('')
    const [getHeight, setHeight] = useState(0)

    const [getFinance, setFinance] = useState([])
    const [getItems, setItems] = useState([])
    const [getWork, setWork] = useState([])
    const [getVolunteer, setVolunteer] = useState([])
    const [getKids, setKids] = useState([])

    async function getAllOrgs() {
        setFilter('all')
        const financeData = await http.get('/financeLTList')
        if (financeData.success) {
            setFinance(financeData.financeLtList)
        }

        const ItemData = await http.get('/itemsLTList')
        if (ItemData.success) {
            setItems(ItemData.itemsLTList)
        }

        const workData = await http.get('/workLTList')
        if (workData.success) {
            setWork(workData.workLtList)
        }

        const volunteerData = await  http.get('/volunteerList')
        if (volunteerData.success) {
            setVolunteer(volunteerData.volunteerList)
        }

        const kidsData = await  http.get('/kidList')
        if (kidsData.success) {
            setKids(kidsData.kidList)
        }
    }

    async function getLocation(city) {
        setFilter(city)
        const financeData = await http.post('/FinanceOrgLocation', {city: city})
        if (financeData.success) {
            setFinance(financeData.filteredList)
        }

        const ItemData = await http.post('/ItemOrgLocation', {city: city})
        if (ItemData.success) {
            setItems(ItemData.filteredList)
        }

        const workData = await http.post('/WorkOrgLocation', {city: city})
        if (workData.success) {
            setWork(workData.filteredList)
        }

        const volunteerData = await http.post('/VolunteerOrgLocation', {city: city})
        if (volunteerData.success) {
            setVolunteer(volunteerData.filteredList)
        }

        const kidsData = await http.post('/KidsOrgLocation', {city: city})
        if (kidsData.success) {
            setKids(kidsData.filteredList)
        }
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
                <div className='legend-box m-1'>
                    <div className='mt-3'>
                        <HelpKids/>
                    </div>
                    <div className='text-center mt-1'>Pagalba vaikams</div>
                </div>
                <div className='legend-box m-1'>
                    <div className='mt-3'>
                        <WorkIcon/>
                    </div>
                    <div className='text-center mt-1'>Darbo katalogai, įdarbinimas</div>
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

            {getFinance.length > 0 &&
                <div>
                    <div className='fs-5 text-center m-4'>Finansinė pagalba</div>
                    <div className='org-block'>
                        {getFinance.map((x, i) => <FinanceLTCard
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
            }


            {getWork.length > 0 &&
                <div>
                    <div className='fs-5 text-center m-4'>Darbo pasiūlymai, vietų registracija</div>
                    <div className='org-block'>
                        {getWork.map((x, i) => <WorkLtCard
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
            }

            {getItems.length > 0 &&
                <div>
                    <div className='fs-5 text-center m-4'>Daiktų aukojimo vietos, platformos</div>
                    <div className='org-block'>
                        {getItems.map((x, i) => <ItemsCard
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
            }

            {getKids.length > 0 &&
                <div>
                    <div className='fs-5 text-center m-4'>Vaikams, mokyklinės priemonės</div>
                    <div className='org-block'>
                        {getKids.map((x, i) => <KidsCard
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
            }

            {getVolunteer.length > 0 &&
                <div>
                    <div className='fs-5 text-center m-4'>Savanoriavimas</div>
                    <div className='org-block'>
                        {getVolunteer.map((x, i) => <VolunteerCard
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
            }



        </div>
    );
};

export default HelpInLt;