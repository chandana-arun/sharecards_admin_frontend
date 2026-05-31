import Sidebar from "../../components/layout/Sidebar";

export default function Users() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">
          Users Management
        </h1>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">
            Users list will be displayed here.
          </p>
        </div>
      </div>
    </div>
  );
}