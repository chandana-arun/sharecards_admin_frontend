// import {
//   Users,
//   CreditCard,
//   Share2,
//   IndianRupee,
//   Menu,
// } from "lucide-react";

// export default function Dashboard() {
//   const transactions = [
//     {
//       id: "TXN001",
//       user: "Rahul",
//       amount: "₹299",
//       status: "Success",
//     },
//     {
//       id: "TXN002",
//       user: "Anjali",
//       amount: "₹499",
//       status: "Success",
//     },
//     {
//       id: "TXN003",
//       user: "Kiran",
//       amount: "₹199",
//       status: "Pending",
//     },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-900 text-white">
//         <div className="p-5 border-b border-gray-700">
//           <h1 className="text-2xl font-bold">
//             ShareCards Admin
//           </h1>
//         </div>

//         <nav className="p-4 space-y-2">
//           <button className="w-full text-left p-3 rounded-lg hover:bg-gray-800">
//             Dashboard
//           </button>

//           <button className="w-full text-left p-3 rounded-lg hover:bg-gray-800">
//             Users
//           </button>

//           <button className="w-full text-left p-3 rounded-lg hover:bg-gray-800">
//             Cards
//           </button>

//           <button className="w-full text-left p-3 rounded-lg hover:bg-gray-800">
//             Shares
//           </button>

//           <button className="w-full text-left p-3 rounded-lg hover:bg-gray-800">
//             Transactions
//           </button>

//           <button className="w-full text-left p-3 rounded-lg hover:bg-gray-800">
//             Reports
//           </button>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1">
//         {/* Header */}
//         <header className="bg-white shadow p-5 flex justify-between">
//           <div className="flex items-center gap-3">
//             <Menu size={24} />
//             <h2 className="text-2xl font-bold">
//               Dashboard
//             </h2>
//           </div>

//           <div>
//             <span className="font-medium">
//               Admin
//             </span>
//           </div>
//         </header>

//         {/* Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
//           <div className="bg-white p-6 rounded-xl shadow">
//             <Users className="mb-3" />
//             <p>Total Users</p>
//             <h3 className="text-3xl font-bold">
//               1,245
//             </h3>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <CreditCard className="mb-3" />
//             <p>Cards Created</p>
//             <h3 className="text-3xl font-bold">
//               5,230
//             </h3>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <Share2 className="mb-3" />
//             <p>Total Shares</p>
//             <h3 className="text-3xl font-bold">
//               18,420
//             </h3>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <IndianRupee className="mb-3" />
//             <p>Revenue</p>
//             <h3 className="text-3xl font-bold">
//               ₹2.5L
//             </h3>
//           </div>
//         </div>

//         {/* Transactions */}
//         <div className="px-6 pb-6">
//           <div className="bg-white rounded-xl shadow p-5">
//             <h3 className="text-xl font-bold mb-4">
//               Recent Transactions
//             </h3>

//             <table className="w-full">
//               <thead>
//                 <tr className="border-b">
//                   <th className="text-left py-3">
//                     Transaction ID
//                   </th>
//                   <th className="text-left py-3">
//                     User
//                   </th>
//                   <th className="text-left py-3">
//                     Amount
//                   </th>
//                   <th className="text-left py-3">
//                     Status
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {transactions.map((txn) => (
//                   <tr
//                     key={txn.id}
//                     className="border-b"
//                   >
//                     <td className="py-3">
//                       {txn.id}
//                     </td>
//                     <td>{txn.user}</td>
//                     <td>{txn.amount}</td>
//                     <td>
//                       <span
//                         className={`px-3 py-1 rounded-full text-sm ${
//                           txn.status === "Success"
//                             ? "bg-green-100 text-green-600"
//                             : "bg-yellow-100 text-yellow-600"
//                         }`}
//                       >
//                         {txn.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

/////////////

import { useEffect, useState } from "react";
import { getDashboardData } from "../../services/adminService";
import { Menu } from "lucide-react";
import Sidebar from "../../components/layout/Sidebar";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    totalCards: 0,
    totalDraftCards: 0,
    totalActiveCards: 0,
    totalInactiveCards: 0,
    totalSharedCards: 0,
    totalUsers: 0,
    totalUniqueReceivers: 0,
  });


  const transactions = [
    {
      id: "TXN001",
      user: "Rahul",
      amount: "₹299",
      status: "Success",
    },
    {
      id: "TXN002",
      user: "Anjali",
      amount: "₹499",
      status: "Success",
    },
    {
      id: "TXN003",
      user: "Kiran",
      amount: "₹199",
      status: "Pending",
    },
  ];

  const loadDashboard = async () => {
    try {
      const response = await getDashboardData();
      console.log("Dashboard Data:", response.data);

      setDashboardData(response.data);
    } catch (error) {
      console.error("Dashboard API Error:", error);
    } 
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow p-5 flex justify-between">
          <div className="flex items-center gap-3">
            <Menu size={24} />
            <h2 className="text-2xl font-bold">Dashboard</h2>
          </div>

          <div>
            <span className="font-medium">Admin</span>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Total Users</p>
            <h3 className="text-3xl font-bold">{dashboardData.totalUsers}</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Total Cards</p>
            <h3 className="text-3xl font-bold">{dashboardData.totalCards}</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Active Cards</p>
            <h3 className="text-3xl font-bold text-green-600">
              {dashboardData.totalActiveCards}
            </h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Shared Cards</p>
            <h3 className="text-3xl font-bold text-blue-600">
              {dashboardData.totalSharedCards}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Draft Cards</p>
            <h3 className="text-3xl font-bold text-yellow-500">
              {dashboardData.totalDraftCards}
            </h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Inactive Cards</p>
            <h3 className="text-3xl font-bold text-red-500">
              {dashboardData.totalInactiveCards}
            </h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Unique Receivers</p>
            <h3 className="text-3xl font-bold">
              {dashboardData.totalUniqueReceivers}
            </h3>
          </div>
        </div>

        {/* Transactions */}
        <div className="px-6 pb-6">
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-xl font-bold mb-4">Recent Transactions</h3>

            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">Transaction ID</th>
                  <th className="text-left py-3">User</th>
                  <th className="text-left py-3">Amount</th>
                  <th className="text-left py-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((txn) => (
                  <tr key={txn.id} className="border-b">
                    <td className="py-3">{txn.id}</td>
                    <td>{txn.user}</td>
                    <td>{txn.amount}</td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          txn.status === "Success"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        {txn.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
