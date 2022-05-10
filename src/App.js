import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import MainPage from "./pages/MainPage";
import RefugeePages from "./pages/RefugeePages";
import Toolbar from "./components/toolbar/Toolbar";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import HelpUAPage from "./pages/HelpUAPage";
import HelpLtPage from "./pages/HelpLTPage";
import UsefulLinksPage from "./pages/UsefulLinksPage";

function App() {
  return (
      <div className="App view">
        <Router>
          <div>
            <Toolbar/>
            <div className='mainHeight'>
              <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/pagalba-Ukrainoje' element={<HelpUAPage/>}/>
                <Route path='/pagalba-Lietuvoje' element={<HelpLtPage/>}/>
                <Route path='/paramos-punktai-ukrainieciams' element={<RefugeePages/>}/>
                <Route path='/naudingos-nuorodos' element={<UsefulLinksPage/>}/>
                <Route path='/apie' element={<About/>}/>
              </Routes>
            </div>
            <Footer/>
          </div>
        </Router>
      </div>
  );
}

export default App;
