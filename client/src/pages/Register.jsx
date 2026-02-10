import { motion } from "framer-motion";
import { useState } from "react";

export function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl shadow-xl w-full max-w-md text-white"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>
        <p className="text-center text-gray-400 mb-8">Join us and start hosting today</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 font-semibold"
          >
            Register
          </motion.button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-400 hover:underline">
            Login
          </a>
        </p>
      </motion.div>
    </div>
  );
}

export default Register;
