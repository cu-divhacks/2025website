import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Map from './pages/Map';
import Schedule from './pages/Schedule';
import Resources from './pages/Resources';
import Sponsorship from './pages/Sponsorship';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/map" element={<Map />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
        </Routes>
      </div>
    </Router>
  );
}