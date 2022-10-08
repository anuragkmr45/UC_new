import './App.css';
import Navbar from './components/navbar/Navbar.js'

import Home from './components/Home'

// college finder imports
import CllgFinder from './components/CllgFinder'
import SouthSpCllg from './components/SouthSpCllg'
import NorthSpCllg from './components/NorthSpCllg'
import OffSpCllg from './components/OffSpCllg'
import CllgSpecific from './components/CllgSpecific'

// campus explorer imports 
import CampExp from './components/CampExp';
import CampexpSpecific from './components/CampexpSpecific';
import CampexpCafe from './components/CampexpCafe';

// events imports 
import Events from './components/Events'
import EventSpecific from './components/EventSpecific'

// accommodation imports 
import Accommodation from './components/Accommodation'
import AccomodSpecific from './components/AccomodSpecific'

// academics import 
import Academics from './components/Academics'

// about page import
import About from './components/about/About';

// Footer import
// import Error from './components/Error'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />

          {/* college finder start */}
          <Route path='/collegefinder' element={<CllgFinder />} />
          <Route path='/CampusSpecificColleges/south' element={<SouthSpCllg />} />
          <Route path='/CampusSpecificColleges/north' element={<NorthSpCllg />} />
          <Route path='/CampusSpecificColleges/off' element={<OffSpCllg />} />
          <Route path='/collegeSpecific/:id' element={<CllgSpecific />} />
          

          {/* campus explorer start */}
          <Route path='/campusexplorer' element={<CampExp />} />
          <Route path='/campusexplorerspecific/:collegeName' element={<CampexpSpecific />} />
          <Route path='/cafesnearcollege/:id' element={<CampexpCafe />} />
          
          {/* events start */}
          <Route path='/events' element={<Events />} />
          <Route path='/eventspecific' element={<EventSpecific />} />
          
          {/* accommodation start */}
          <Route path='/accommodation' element={<Accommodation />} />
          <Route path='/accomodationnearme/:id' element={<AccomodSpecific />} />

          {/* academics start */}
          <Route path='/academics' element={<Academics />} />

          {/* about */}
          <Route path='/about' element={<About />} />
          
          {/* Error page */}
          <Route path='*' element={<Home />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
