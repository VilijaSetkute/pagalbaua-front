import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import FinancePage from "./pages/FinancePage";
import ItemPage from "./pages/ItemPage";
import MedicalPage from "./pages/MedicalPage";
import VolunteerPage from "./pages/VolunteerPage";
import MainPage from "./pages/MainPage";
import ItPage from "./pages/ItPage";
import OtherPages from "./pages/OtherPages";
import RefugeePages from "./pages/RefugeePages";
import Toolbar from "./components/toolbar/Toolbar";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import HelpUAPage from "./pages/HelpUAPage";
import HelpLtPage from "./pages/HelpLTPage";
import UsefulLinksPage from "./pages/UsefulLinksPage";
import AddOrganization from "./components/AddOrganisation/AddOrganization";

function App() {
  return (
      <div className="App view">
        <Router>
          <div>
            <Toolbar/>
            <div className='mainHeight'>
              <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/finansine' element={<FinancePage/>}/>
                <Route path='/daiktais' element={<ItemPage/>}/>
                <Route path='/medikamentais' element={<MedicalPage/>}/>
                <Route path='/it' element={<ItPage/>}/>
                <Route path='/savanoriavimas' element={<VolunteerPage/>}/>
                <Route path='/paramos-punktai-ukrainieciams' element={<RefugeePages/>}/>
                <Route path='/kita' element={<OtherPages/>}/>
                <Route path='/apie' element={<About/>}/>
                <Route path='/pagalba-Ukrainoje' element={<HelpUAPage/>}/>
                <Route path='/pagalba-Lietuvoje' element={<HelpLtPage/>}/>
                <Route path='/naudingos-nuorodos' element={<UsefulLinksPage/>}/>
                {/*<Route path='/addnew' element={<AddOrganization/>}/>*/}
              </Routes>
            </div>
            <Footer/>
          </div>
        </Router>
      </div>
  );
}

export default App;
