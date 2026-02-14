import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { AuthProvider, useAuth } from './contexts/AuthContext';
import { DashboardLayout } from './layouts/DashboardLayout';
import { ColumnPage } from './pages/ColumnPage';
import { Dashboard } from './pages/Dashboard';
import { LoginPage } from './pages/Login';
import { MyRecord } from './pages/MyRecord';
import { UnderMaintenance } from './pages/UnderMaintenance';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/column-list" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route element={<DashboardLayout />}>
            {/* Public Route */}
            <Route path="column-list" element={<ColumnPage />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="my-record" element={<MyRecord />} />

              {/* Maintenance Pages */}
              <Route path="weight-graph" element={<UnderMaintenance />} />
              <Route path="goal" element={<UnderMaintenance />} />
              <Route path="selected-course" element={<UnderMaintenance />} />
              <Route path="settings" element={<UnderMaintenance />} />
              <Route path="challenge" element={<UnderMaintenance />} />
              <Route path="notice" element={<UnderMaintenance />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
