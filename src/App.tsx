import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DoctorsPage from './pages/DoctorsPage';
import PharmacyPage from './pages/PharmacyPage';
import EmergencyPage from './pages/EmergencyPage';
import HealthRecordsPage from './pages/HealthRecordsPage';
import CommunityPage from './pages/CommunityPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/pharmacy" element={<PharmacyPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="/records" element={<HealthRecordsPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;