import React, {useState} from 'react';
import './home.css'
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

const Home = () => {

    const [getText, setText] = useState()
    const nav = useNavigate()


    return (
        <div className='my-container-child'>
            <div className='py-5'>
                <div>
                    {/*<div style={{textAlign: "justify"}} className='mx-3 my-5'><span*/}
                    {/*    className='fs-3 text-primary'>Informacija</span> šiame puslapyje skirstoma pagal jos teikimo*/}
                    {/*    vietą, jos pobūdį, taip pat pateikiamos nuorodos ir į kitus pagalbos puslapius. Visos šios*/}
                    {/*    grupės yra persidengiančios, tad reikiamą informaciją galima pasiekti ar per vieną, ar per kitą*/}
                    {/*    filtrą, ar per kitas pagalbos svetaines.*/}
                    {/*</div>*/}
                    <div className='mx-3 my-5 text-center'><span
                        className='fs-3 text-primary'>Noriu suteikti pagalbą... <FontAwesomeIcon icon={faArrowDown}/></span>
                        {/*šiame puslapyje skirstoma pagal jos teikimo*/}
                        {/*vietą, jos pobūdį, taip pat pateikiamos nuorodos ir į kitus pagalbos puslapius. Visos šios*/}
                        {/*grupės yra persidengiančios, tad reikiamą informaciją galima pasiekti ar per vieną, ar per kitą*/}
                        {/*filtrą, ar per kitas pagalbos svetaines.*/}
                    </div>
                </div>
                <div className='card-box d-flex flex-column align-items-center justify-content-center'
                     onClick={() => nav('/paramos-punktai-ukrainieciams')}>
                    <div className='text-uppercase fw-bold fs-5'>Paramos punktai ukrainiečiams</div>
                    <div className='flagboxLT card-box__initial'/>
                    <div className='card-box__inner p-3'>Kontaktiniai duomenys paramos punktų,
                        kurie dalija humanitarinę pagalba Lietuvos <span
                            className='fw-bold'>didžiuosiuose miestuose</span>. <br/>Sąrašas nuolat pildomas.
                    </div>
                </div>
                <div className='card-box d-flex flex-column align-items-center justify-content-center'
                     onClick={() => nav('/pagalba-Ukrainoje')}>
                    <div className='text-uppercase fw-bold fs-5'>Pagalba Ukrainos civiliams ir kariams</div>
                    <div className='flagbox card-box__initial'/>
                    <div className='card-box__inner p-3'>Informacija, kur kreiptis
                        norint suteikti pagalbą <span className='fw-bold text-uppercase'>Ukrainoje</span> esantiems civiliams,
                        kariškiams. <br/>Pagalba apima finansinę ir daiktinę paramą skirtingoms organizacijoms.
                    </div>
                </div>
                <div className='card-box d-flex flex-column align-items-center justify-content-center'
                     onClick={() => nav('/pagalba-Lietuvoje')}>
                    <div className='text-uppercase fw-bold fs-5'>Pagalba Ukrainiečių pabėgėliams Lietuvoje</div>
                    <div className='flagboxLT card-box__initial'/>
                    <div className='card-box__inner p-3'>Informaciją, kur kreiptis
                        norint suteikti pagalbą <span className='fw-bold text-uppercase'>Lietuvoje</span> esantiems ukrainiečių
                        pabėgėliams. <br/>Pagalba apima finansinę ir daiktinę paramą skirtingoms organizacijoms.
                    </div>
                </div>
                {/*<div className='card-box d-flex flex-column align-items-center justify-content-center'*/}
                {/*     onClick={() => nav('/naudingos-nuorodos')}>*/}
                {/*    <div className='text-uppercase fw-bold fs-5'>Naudingos pagalbos svetainės</div>*/}
                {/*    <div className='flagboxWEB card-box__initial'><i className="fas fa-globe"/></div>*/}
                {/*    <div className='card-box__inner p-3'>Šiuo metu yra nemažai svetainių, kurios yra skirtos konkrečiai*/}
                {/*        pagalbai Ukrainai. Visos gal ir neapžvelgiamos, tačiau jų sąrašas ir jų pobūdis bus pateiktas*/}
                {/*        šioje svetainėje. Taip pat čia bus pateikiamos įvairios iniciatyvos, kurios gali būti naudingos*/}
                {/*        prisidedant prie informacijos sklaidos.*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Home;