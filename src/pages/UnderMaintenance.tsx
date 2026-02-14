
export const UnderMaintenance = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8 bg-background">
      <div className="text-6xl mb-4">🚧</div>
      <h1 className="text-2xl font-bold text-primary-500 font-sans mb-2">
        Under Maintenance
      </h1>
      <p className="text-dark-500 font-sans">
        This page is currently under construction. Please check back later!
      </p>
    </div>
  );
};
