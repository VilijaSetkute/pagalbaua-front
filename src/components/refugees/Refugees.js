import React, {useEffect, useState} from 'react';
import http from "../../helpers/http";
import RefugeeCard from "../cards/RefugeeCard";

const Refugees = () => {

    const [getFilter, setFilter] = useState('all')
    const [getExpanded, setExpanded] = useState('')
    const [getHeight, setHeight] = useState(0)

    const [getPoints, setPoints] = useState([])

    async function getAllPoints() {
        const data = await http.get('/allPoints')
        if (data.success) return setPoints(data.allPoints)
    }

    useEffect(() => {
        getAllPoints()
    }, [])

    return (
        <div className='my-container-child' style={{width: '700px'}}>
            <div style={{height: '70px'}}/>
            <div className='mx-3 mt-3 mb-5'>Laikinai informacija yra pateikiama <span className='text-primary fw-bold'>tik Vilniaus miestui</span>. Informacija apie kitų didžiųjų miestų paramos punktus bus pateikiama netrukus.</div>
            <div className='org-block'>

                {getPoints.map((x, i) => <RefugeeCard
                    key={i}
                    point={x}
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

export default Refugees;