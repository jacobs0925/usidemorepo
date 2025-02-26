import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/Homepage';
import Location from './Components/LocationPage';
// import Ammunition from './Components/Ammunition';
// import Membership from './Components/Membership';
// import Calendar from './Components/Calendar';
// import Instructors from './Components/Instructors';
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
                    {/* <Route path="/ammunition" element={<Ammunition />} />
                    <Route path="/membership" element={<Membership />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/instructors" element={<Instructors />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/waiver" element={<Waiver />} />
                    <Route path="/contact" element={<Contact />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;