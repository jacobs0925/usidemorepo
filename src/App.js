import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/Homepage';
import Location from './Components/LocationPage';
import Ammunition from './Components/AmmunitionPage';
// import Ammunition from './Components/Ammunition';
import Membership from './Components/MembershipPage';
import Calendar from './Components/CalendarPage';
import Instructors from './Components/InstructorsPage';
// import News from './Components/News';
// import Waiver from './Components/Waiver';
// import Contact from './Components/Contact';

function App()
{
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/usidemorepo/" element={<HomePage />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="/ammunition" element={<Ammunition />} />
                    <Route path="/membership" element={<Membership />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/instructors" element={<Instructors />} />
                    <Route path="/news" element={<Membership />} />
                    <Route path="/waiver" element={<Membership />} />
                    <Route path="/contact" element={<Membership />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;