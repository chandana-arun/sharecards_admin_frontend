import Sidebar from "../../components/layout/Sidebar";

export default function Cards() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">
          Business Cards
        </h1>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">
            Business cards will be displayed here.
          </p>
        </div>
      </div>
    </div>
  );
}