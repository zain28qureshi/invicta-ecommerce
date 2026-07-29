export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h2 className="text-gray-500 text-sm">{title}</h2>
      <h1 className="text-2xl md:text-4xl font-bold mt-2">{value}</h1>
    </div>
  );
}