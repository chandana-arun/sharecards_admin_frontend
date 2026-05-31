import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white">
      <div className="p-5 border-b border-gray-700">
        <h1 className="text-2xl font-bold">
          ShareCards Admin
        </h1>
      </div>

      <nav className="p-4 space-y-2">
        <Link
          to="/"
          className="block p-3 rounded-lg hover:bg-gray-800"
        >
          Dashboard
        </Link>

        <Link
          to="/users"
          className="block p-3 rounded-lg hover:bg-gray-800"
        >
          Users
        </Link>

        <Link
          to="/cards"
          className="block p-3 rounded-lg hover:bg-gray-800"
        >
          Business Cards
        </Link>

        <Link
          to="/shares"
          className="block p-3 rounded-lg hover:bg-gray-800"
        >
          Shared Cards
        </Link>

        <Link
          to="/reports"
          className="block p-3 rounded-lg hover:bg-gray-800"
        >
          Reports
        </Link>

        <Link
          to="/settings"
          className="block p-3 rounded-lg hover:bg-gray-800"
        >
          Settings
        </Link>
      </nav>
    </aside>
  );
}