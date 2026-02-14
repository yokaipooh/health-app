import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { ColumnPage } from './pages/ColumnPage';
import { Dashboard } from './pages/Dashboard';
import { MyRecord } from './pages/MyRecord';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="column-list" element={<ColumnPage />} />
          <Route path="my-record" element={<MyRecord />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
