export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-text-primary">Dashboard</h1>
        <p className="text-text-secondary">Welcome back to HealthApp.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Placeholder Stats Cards */}
        {['Patients', 'Appointments', 'Todays Vitals'].map((title) => (
          <div key={title} className="bg-surface p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-text-muted mb-2">{title}</h3>
            <div className="text-3xl font-bold text-text-primary">0</div>
          </div>
        ))}
      </div>
    </div>
  );
};
