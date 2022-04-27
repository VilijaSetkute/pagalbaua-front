import React, {useRef} from 'react';
import './addOrganization.css'
import http from "../../helpers/http";

const AddOrganization = () => {

    const nameAlias = useRef()
    const title = useRef()
    const locationText = useRef()
    const locationAlias = useRef()
    const receiverType = useRef()
    const donationType = useRef()
    const donationForms = useRef()
    const website = useRef()
    const linkText = useRef()
    const money = useRef()
    const humanitarian = useRef()
    const volunteers = useRef()

    async function addOrg() {
        const donationFormsText = donationForms.current.value
        const newEntry = {
            "nameAlias": nameAlias.current.value,
            "helpIcon": {
                "donateMoney": money.current.checked,
                "donateHumanitarian": humanitarian.current.checked,
                "donateVolunteering": volunteers.current.checked
            },
            "title": title.current.value,
            "locationText": locationText.current.value,
            "locationAlias": locationAlias.current.value,
            "receiverType": receiverType.current.value,
            "donationType": donationType.current.value,
            "donationForms": donationFormsText.replaceAll('; ', ';np').split(';'),
            "website": website.current.value,
            "linkText": linkText.current.value
        }

        const data = await http.post('/addOrg', newEntry)
        console.log(data)
    }

    return (
        <div className='my-container'>
            <div style={{height: '70px'}}/>
            <div className='fs-5 fw-bold mb-3'>Informacija naujai organizacijos kortelei</div>
            <div className='d-flex flex-column justify-content-center mb-5'>
                <div className='d-flex align-items-center m-1'>
                    <label className='me-3 flex-grow-1'>nameAlias</label>
                    <input className='w-75' ref={nameAlias} type="text" placeholder='nameAlias - unikalus organizacijos pavadinimas'/>
                </div>
                <div className='d-flex align-items-center m-1'>
                    <label className='me-3 flex-grow-1'>helpIcon</label>
                    <div className='d-flex w-75'>
                        <div className='checkboxList'>
                            <label htmlFor="money" className='me-2'>Pinigais</label>
                            <input ref={money} id="money" type="checkbox" className='me-5'/>
                        </div>
                        <div className='checkboxList'>
                            <label htmlFor="humanitarian" className='me-2'>Daiktais</label>
                            <input ref={humanitarian} id="humanitarian" type="checkbox" className='me-5'/>
                        </div>
                        <div className='checkboxList'>
                            <label htmlFor="volunteers" className='me-2'>Savanoriavimas</label>
                            <input ref={volunteers} id="volunteers" type="checkbox" className='me-5'/>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center m-1'>
                    <label className='me-3 flex-grow-1'>title</label>
                    <input className='w-75' ref={title} type="text" placeholder='title - atvaizduojamas pavadinimas'/>
                </div>
                <div className='d-flex align-items-center m-1'>
                    <label className='me-3 flex-grow-1'>locationText</label>
                    <input className='w-75' ref={locationText} type="text" placeholder='locationText - atvaizduojama lokacija'/>
                </div>
                <div className='d-flex align-items-center m-1'>
                    <label className='me-3 flex-grow-1'>locationAlias</label>
                    <input className='w-75' ref={locationAlias} placeholder='locationAlias - lokacijos klasės pavadinimas'/>
                </div>
                <div className='d-flex align-items-center m-1'>
                    <label className='me-3 flex-grow-1'>receiverType</label>
                    <textarea className='w-75' ref={receiverType} placeholder='receiverType - paramos gavėjo tipas (ilgesnis ar trumpesnis tekstas)'/>
                </div>
                <div className='d-flex align-items-center m-1'>
                    <label className='me-3 flex-grow-1'>donationType</label>
                    <textarea className='w-75' ref={donationType} placeholder='donationType - paramos pobūdis (ilgesnis ar trumpesnis tekstas)'/>
                </div>
                <div className='d-flex align-items-center m-1'>
                    <label className='me-3 flex-grow-1'>donationForms</label>
                    <input className='w-75' ref={donationForms} type="text" placeholder='donationForms - sąrašas galimų rėmimo formų (atskirti kabliataškiu)'/>
                </div>
                <div className='d-flex align-items-center m-1'>
                    <label className='me-3 flex-grow-1'>website</label>
                    <input className='w-75' ref={website} type="text" placeholder='website - tinklapis'/>
                </div>
                <div className='d-flex align-items-center m-1'>
                    <label className='me-3 flex-grow-1'>linkText</label>
                    <input className='w-75' ref={linkText} type="text" placeholder='linkText - atvaizduojamas tinklapio tipas (oficialus, facebook puslapis / įrašas ir pan.)'/>
                </div>
                <button onClick={addOrg} type='button' className='btn btn-primary my-5'>Pridėti</button>
            </div>
        </div>
    );
};

export default AddOrganization;