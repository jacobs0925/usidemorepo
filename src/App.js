import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/Homepage';
import Location from './Components/LocationPage';
import Ammunition from './Components/AmmunitionPage';
import Membership from './Components/MembershipPage';
import Calendar from './Components/CalendarPage';
import Instructors from './Components/InstructorsPage';
import About from './Components/AboutPage';
import Waiver from './Components/WaiverPage';
import Contact from './Components/ContactPage';

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
                    <Route path="/about" element={<About />} />
                    <Route path="/waiver" element={<Waiver />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;