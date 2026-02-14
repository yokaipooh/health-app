import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          {/* Add other routes here as we build them */}
          <Route path="patients" element={<div className="text-xl font-bold p-8">Patients Page (Coming Soon)</div>} />
          <Route path="appointments" element={<div className="text-xl font-bold p-8">Appointments Page (Coming Soon)</div>} />
          <Route path="vitals" element={<div className="text-xl font-bold p-8">Vitals Page (Coming Soon)</div>} />
          <Route path="settings" element={<div className="text-xl font-bold p-8">Settings Page (Coming Soon)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
