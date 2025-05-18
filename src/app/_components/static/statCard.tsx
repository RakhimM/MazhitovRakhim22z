export function StatCard({ label, value }: { label: string; value: string | number }) {
    return (
      <div className="p-4 bg-white rounded-xl shadow-md text-center">
        <div className="text-sm text-gray-600">{label}</div>
        <div className="text-2xl font-bold mt-2">{value}</div>
      </div>
    );
  }
  