import { motion } from "framer-motion";
import { BarChart, Server, Users, Activity } from "lucide-react";

const stats = [
  { title: "Total Users", value: "12,450", icon: <Users />, color: "from-indigo-500 to-indigo-700" },
  { title: "Active Servers", value: "128", icon: <Server />, color: "from-emerald-500 to-emerald-700" },
  { title: "Monthly Revenue", value: "$9,240", icon: <BarChart />, color: "from-pink-500 to-pink-700" },
  { title: "Live Traffic", value: "1,340", icon: <Activity />, color: "from-orange-500 to-orange-700" },
];

const recentOrders = [
  { id: "#1023", user: "Aman", plan: "Premium", amount: "$99", status: "Active" },
  { id: "#1024", user: "Neha", plan: "Starter", amount: "$69", status: "Pending" },
  { id: "#1025", user: "Rahul", plan: "Max", amount: "$169", status: "Active" },
  { id: "#1026", user: "Priya", plan: "Premium", amount: "$99", status: "Cancelled" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white p-6">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-gray-400 mt-1">Welcome back, Himanshu 👋</p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-2xl bg-gradient-to-r ${s.color} shadow-xl`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/80">{s.title}</p>
                <h2 className="text-3xl font-bold mt-1">{s.value}</h2>
              </div>
              <div className="text-white/80 text-4xl">{s.icon}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Table + Activity */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
        >
          <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 border-b border-white/10">
                  <th className="py-2">Order</th>
                  <th>User</th>
                  <th>Plan</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((o, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition">
                    <td className="py-3">{o.id}</td>
                    <td>{o.user}</td>
                    <td>{o.plan}</td>
                    <td>{o.amount}</td>
                    <td>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold 
                        ${o.status === "Active" ? "bg-emerald-500/20 text-emerald-400" :
                        o.status === "Pending" ? "bg-yellow-500/20 text-yellow-400" :
                        "bg-red-500/20 text-red-400"}`}
                      >
                        {o.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Activity Panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
        >
          <h3 className="text-xl font-semibold mb-4">System Activity</h3>

          <ul className="space-y-4 text-gray-300">
            <li>🟢 Server #12 deployed successfully</li>
            <li>🔵 New user registered: Aman</li>
            <li>🟣 Backup completed (2:45 AM)</li>
            <li>🟡 High traffic detected</li>
            <li>🟢 SSL auto-renewed</li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
}
