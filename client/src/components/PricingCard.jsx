import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

export default function PricingCard({ title, price, description, features, best, icon, originalPrice }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative bg-white rounded-2xl shadow-lg p-8 flex flex-col w-full max-w-sm mx-auto ${
        best ? 'ring-2 ring-indigo-400 shadow-2xl' : ''
      }`}
    >
      {best && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-1 rounded-full text-xs font-bold shadow-md z-10">
          ⭐ Best Value
        </div>
      )}

      {icon && <div className="text-5xl mb-4 text-center">{icon}</div>}

      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold mb-1 text-gray-900">
          {title}
        </h3>
        <p className="text-sm text-gray-500">
          {description}
        </p>
      </div>

      <div className="text-center mb-6">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-extrabold text-indigo-600">
            ₹{price}
          </span>
          <span className="text-base text-gray-500">/mo</span>
        </div>
        {originalPrice && (
          <p className="text-sm line-through text-gray-400 mt-1">₹{originalPrice}/mo</p>
        )}
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-indigo-100 mt-0.5">
              <Check className="h-3 w-3 text-indigo-600" />
            </div>
            <span className="text-sm text-gray-700">{f}</span>
          </li>
        ))}
      </ul>

      <button className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg">
        Choose Plan
      </button>
    </motion.div>
  );
}
