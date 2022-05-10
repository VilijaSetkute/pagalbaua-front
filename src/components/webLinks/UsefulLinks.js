import React from 'react';
import './usefulLinks.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";

const UsefulLinks = () => {

    return (
        <div className='my-container-child'>
            <div style={{height: '70px'}}/>

            <div className='webBox d-flex'>
                <div className='w-100 border border-primary m-1 rounded'>
                    <div className='bg-primary p-2 text-white fs-5'>LRV bendroji informacija</div>
                    <div className='p-2'>
                        <div className='text-primary text-uppercase fw-bold m-1 mt-4'>Svetainėje skelbiama informacija</div>
                        <div className='m-1 mb-4'>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-2'>
                                <div>PDF atmintinė lietuvių kalba.</div>
                                <a className='webLink ms-3 btn btn-sm btn-outline-primary' href="https://lrv.lt/uploads/main/documents/files/info%20ua_new_LT1.pdf" target='_blank' rel='noreferrer'>nuoroda</a>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-2'>
                                <div>PDF atmintinė ukrainiečių kalba.</div>
                                <a className='webLink ms-3 btn btn-sm btn-outline-primary' href="https://lrv.lt/uploads/main/documents/files/info%20ua_new_UA1(1).pdf" target='_blank' rel='noreferrer'>nuoroda</a>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-2'>
                                <div>PDF atmintinė rusų kalba.</div>
                                <a className='webLink ms-3 btn btn-sm btn-outline-primary' href="https://lrv.lt/uploads/main/documents/files/info%20ua_new_RUS1.pdf" target='_blank' rel='noreferrer'>nuoroda</a>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-2'>
                                <div>PDF atmintinė anglų kalba.</div>
                                <a className='webLink ms-3 btn btn-sm btn-outline-primary' href="https://lrv.lt/uploads/main/documents/files/info%20ua_new_ENG.pdf" target='_blank' rel='noreferrer'>nuoroda</a>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-2'>
                                <div>Pagrindinė informacija apie integraciją Lietuvoje ir teikiamas paslaugas (ukrainiečių kalba).</div>
                                <a className='webLink ms-3 btn btn-sm btn-outline-primary' href="https://migracija.lrv.lt/lt/naudinga-informacija/ukraina-ukrayina-ukraina-ukraine/informatsiia-dlia-gromadian-ukrayini" target='_blank' rel='noreferrer'>nuoroda</a>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-2'>
                                <div>Pagrindinė informacija apie integraciją Lietuvoje ir teikiamas paslaugas (anglų kalba).</div>
                                <a className='webLink ms-3 btn btn-sm btn-outline-primary' href="https://lrv.lt/lt/aktuali-informacija/informacija-apie-situacija-ukrainoje/aktuali-informacija-1/information-for-ukrainian-citizens" target='_blank' rel='noreferrer'>nuoroda</a>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-2'>
                                <div>Pagrindinė informacija apie integraciją Lietuvoje ir teikiamas paslaugas (lietuvių kalba).</div>
                                <a className='webLink ms-3 btn btn-sm btn-outline-primary' href="https://lrv.lt/lt/aktuali-informacija/informacija-apie-situacija-ukrainoje/aktuali-informacija-1/informacija-atvykstantiems-is-ukrainos" target='_blank' rel='noreferrer'>nuoroda</a>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-2'>
                                <div>Informacija Lietuvos gyventojams apie paramą Ukrainai, savipagalbą, pasiruošimą ekstremalioms situacijoms.</div>
                                <a className='webLink ms-3 btn btn-sm btn-outline-primary' href="https://lrv.lt/lt/aktuali-informacija/informacija-apie-situacija-ukrainoje/aktuali-informacija-1/informacija-lietuvos-gyventojams" target='_blank' rel='noreferrer'>nuoroda</a>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-2'>
                                <div>Informacija apie Rusijai ir Baltarusijai taikomas sankcijas</div>
                                <a className='webLink ms-3 btn btn-sm btn-outline-primary' href="https://lrv.lt/lt/aktuali-informacija/informacija-apie-situacija-ukrainoje/aktuali-informacija-1/sankcijos-rusijai-ir-baltarusijai" target='_blank' rel='noreferrer'>nuoroda</a>
                            </div>
                        </div>
                        <div className='text-primary text-uppercase fw-bold m-1'>Puslapio kalbos</div>
                        <div className='m-1 mt-3 mb-4'>LT | UA | RU | EN</div>
                        <div className='text-primary text-uppercase fw-bold m-1'>Puslapio nuoroda</div>
                        <div>
                            <a className='btn py-0 btn-outline-primary my-3 me-3 d-flex align-items-center fit-content'
                               href="https://lrv.lt/lt/aktuali-informacija/informacija-apie-kara-ukrainoje/aktuali-informacija-1"
                               target='_blank' rel='noreferrer'>
                                Oficialus puslapis <FontAwesomeIcon icon={faAngleDoubleRight} className='fs-4 py-2 ps-3 pe-0'/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='w-100 border border-primary m-1 rounded'>
                    <div className='bg-primary p-2 text-white fs-5'>Suukraina.lt (agreguota informacija)</div>
                    <div className='p-2'>
                        <div className='text-primary text-uppercase fw-bold m-1 mt-4'>Svetainėje skelbiama informacija</div>
                        <div className='m-1 mb-4'>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-2'>
                                <div>Organizacijos Lietuvoje, kurioms galima skirti finansinę ir / arba
                                    daiktinę pagalbą.
                                </div>
                                <a className='webLink ms-3 btn btn-sm btn-outline-primary' href="https://suukraina.lt/kaip-galiu-padeti/aukojimas/lietuvoje/" target='_blank' rel='noreferrer'>nuoroda</a>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-2'>
                                <div>Organizacijos užsienyje, kurioms galima skirti finansinę ir / arba
                                    daiktinę pagalbą.
                                </div>
                                <a className='webLink ms-3 btn btn-sm btn-outline-primary' href="https://suukraina.lt/kaip-galiu-padeti/aukojimas/uzsienyje/" target='_blank' rel='noreferrer'>nuoroda</a>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-2'>
                                <div>Organizacijos, kurioms reikalingi savanoriai.</div>
                                <a className='webLink ms-3 btn btn-sm btn-outline-primary' href="https://suukraina.lt/kaip-galiu-padeti/savanoryste/" target='_blank' rel='noreferrer'>nuoroda</a>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-2'>
                                <div>Aktuali informacija iš Lietuvos Respublikos vyriausybės puslapio; informacija, kaip elgtis ekstremaliose situacijose; savipagalba stresinėse situacijose, patarimai emocinei sveikatai.</div>
                                <a className='webLink ms-3 btn btn-sm btn-outline-primary' href="https://suukraina.lt/piliecio-atmintine/" target='_blank' rel='noreferrer'>nuoroda</a>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-2'>
                                <div>Patikimos informacijos šaltiniai (asmenybės, institucijos, užsienio šaltiniai).</div>
                                <a className='webLink ms-3 btn btn-sm btn-outline-primary' href="https://suukraina.lt/bukime-budrus/patikima-informacija/" target='_blank' rel='noreferrer'>nuoroda</a>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-2'>
                                <div>Kaip saugotis nuo sukčių ir dezinformacijos.</div>
                                <a className='webLink ms-3 btn btn-sm btn-outline-primary' href="https://suukraina.lt/bukime-budrus/kaip-saugotis-nuo-sukciu-ir-dezinformacijos/" target='_blank' rel='noreferrer'>nuoroda</a>
                            </div>
                        </div>
                        <div className='text-primary text-uppercase fw-bold m-1 mobile-margin'>Puslapio kalbos</div>
                        <div className='m-1 mt-3 mb-4'>LT | UA </div>
                        <div className='text-primary text-uppercase fw-bold m-1'>Puslapio nuoroda</div>
                        <div>
                            <a className='btn py-0 btn-outline-primary my-3 me-3 d-flex align-items-center fit-content'
                               href="https://suukraina.lt/"
                               target='_blank' rel='noreferrer'>
                                Oficialus puslapis <FontAwesomeIcon icon={faAngleDoubleRight} className='fs-4 py-2 ps-3 pe-0'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default UsefulLinks;