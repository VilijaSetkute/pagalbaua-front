import React from 'react';
import './about.css'

const About = () => {
    return (
        <div className='my-container-child'>
            <div className='about my-container d-flex flex-column'>
                <div style={{height: '200px'}}>&nbsp;</div>
                <div>
                    <div className='moto'>Слава Україні! <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Lesser_Coat_of_Arms_of_Ukraine.svg/800px-Lesser_Coat_of_Arms_of_Ukraine.svg.png"
                        alt=""/>Героям слава!
                    </div>
                    <div className='text'>Šis puslapis yra individualaus žmogaus iniciatyva. Kai informacija pateikiamas vienoje vietoje yra
                        gerokai efektyviau suteikti pagalbą. Dėl informacijos gausos, neturėkite lūkesčio viską surasti
                        šiame puslapyje. Iniciatyva ar netgi informacija pateikta šiame puslapyje gali dubliuotis.</div><br/>
                    <div className='text'>Informacija yra sugrupuota pagal jos pobūdį. Informacija yra parinkta individualiu vertinimu ir stebint
                        iniciatyvas aplinkoje. Jei turite pastabų dėl turinio, klaidų, norit įdėti papildomos informacijos,
                        rašykite laišką adresu:</div>
                    <a href="mailto:info@pagalbaukrainai.lt">info@pagalbaukrainai.lt</a><br/>
                    <div><br/>
                        <div>Jei čia nerandi informacijos kur nukreipti savo energiją, gali kreiptis į savo
                            savivaldybę, vietines pagalbos organizacijas ar tavo mieste veikiančias FB grupes. <br/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;