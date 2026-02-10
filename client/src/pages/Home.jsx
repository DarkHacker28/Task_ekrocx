import { motion } from "framer-motion";
import { useState } from "react";
import PricingCard from "../components/PricingCard";
import { Footer } from "../components/Footer";
import { Server, Cloud, Globe, ChevronDown } from "lucide-react";

// Pricing data for different hosting types and durations
const pricingData = {
  "Web Hosting": {
    "6 months": [
      {
        title: "Starter",
        price: 399,
        originalPrice: 699,
        description: "Perfect for beginners",
        features: ["1 Website", "20GB SSD Storage", "Free SSL", "Daily Backups", "Email Support"],
        best: false
      },
      {
        title: "Professional",
        price: 799,
        originalPrice: 1299,
        description: "Best for growing sites",
        features: ["5 Websites", "100GB SSD Storage", "Free SSL & CDN", "Priority Support", "Free Domain"],
        best: true
      },
      {
        title: "Enterprise",
        price: 1599,
        originalPrice: 2499,
        description: "For large businesses",
        features: ["Unlimited Sites", "500GB SSD", "Advanced Security", "24/7 Support", "Free Migration"],
        best: false
      },
    ],
    "12 months": [
      {
        title: "Starter",
        price: 299,
        originalPrice: 599,
        description: "Perfect for beginners",
        features: ["1 Website", "20GB SSD Storage", "Free SSL", "Daily Backups", "Email Support"],
        best: false
      },
      {
        title: "Professional",
        price: 599,
        originalPrice: 1199,
        description: "Best for growing sites",
        features: ["5 Websites", "100GB SSD Storage", "Free SSL & CDN", "Priority Support", "Free Domain"],
        best: true
      },
      {
        title: "Enterprise",
        price: 1299,
        originalPrice: 2499,
        description: "For large businesses",
        features: ["Unlimited Sites", "500GB SSD", "Advanced Security", "24/7 Support", "Free Migration"],
        best: false
      },
    ],
  },
  "VPS Hosting": {
    "6 months": [
      {
        title: "VPS Basic",
        price: 899,
        originalPrice: 1499,
        description: "Entry-level VPS",
        features: ["2 CPU Cores", "4GB RAM", "80GB SSD", "2TB Bandwidth", "Root Access"],
        best: false
      },
      {
        title: "VPS Pro",
        price: 1699,
        originalPrice: 2699,
        description: "High-performance VPS",
        features: ["4 CPU Cores", "8GB RAM", "160GB SSD", "4TB Bandwidth", "Free cPanel"],
        best: true
      },
      {
        title: "VPS Elite",
        price: 2999,
        originalPrice: 4499,
        description: "Maximum power",
        features: ["8 CPU Cores", "16GB RAM", "320GB SSD", "8TB Bandwidth", "Managed Support"],
        best: false
      },
    ],
    "12 months": [
      {
        title: "VPS Basic",
        price: 699,
        originalPrice: 1299,
        description: "Entry-level VPS",
        features: ["2 CPU Cores", "4GB RAM", "80GB SSD", "2TB Bandwidth", "Root Access"],
        best: false
      },
      {
        title: "VPS Pro",
        price: 1399,
        originalPrice: 2399,
        description: "High-performance VPS",
        features: ["4 CPU Cores", "8GB RAM", "160GB SSD", "4TB Bandwidth", "Free cPanel"],
        best: true
      },
      {
        title: "VPS Elite",
        price: 2599,
        originalPrice: 3999,
        description: "Maximum power",
        features: ["8 CPU Cores", "16GB RAM", "320GB SSD", "8TB Bandwidth", "Managed Support"],
        best: false
      },
    ],
  },
  "Cloud Hosting": {
    "6 months": [
      {
        title: "Cloud Starter",
        price: 599,
        originalPrice: 999,
        description: "Scalable cloud",
        features: ["Auto-scaling", "50GB Storage", "99.9% Uptime", "CDN Included", "SSL Certificate"],
        best: false
      },
      {
        title: "Cloud Business",
        price: 1199,
        originalPrice: 1899,
        description: "For growing apps",
        features: ["Advanced Scaling", "200GB Storage", "99.99% Uptime", "Global CDN", "Priority Support"],
        best: true
      },
      {
        title: "Cloud Enterprise",
        price: 2499,
        originalPrice: 3999,
        description: "Enterprise-grade",
        features: ["Unlimited Scaling", "1TB Storage", "99.999% Uptime", "Dedicated Resources", "24/7 Expert Support"],
        best: false
      },
    ],
    "12 months": [
      {
        title: "Cloud Starter",
        price: 499,
        originalPrice: 899,
        description: "Scalable cloud",
        features: ["Auto-scaling", "50GB Storage", "99.9% Uptime", "CDN Included", "SSL Certificate"],
        best: false,
      },
      {
        title: "Cloud Business",
        price: 999,
        originalPrice: 1699,
        description: "For growing apps",
        features: ["Advanced Scaling", "200GB Storage", "99.99% Uptime", "Global CDN", "Priority Support"],
        best: true
      },
      {
        title: "Cloud Enterprise",
        price: 2099,
        originalPrice: 3599,
        description: "Enterprise-grade",
        features: ["Unlimited Scaling", "1TB Storage", "99.999% Uptime", "Dedicated Resources", "24/7 Expert Support"],
        best: false
      },
    ],
  },
};

export default function Home() {
  const [selectedHosting, setSelectedHosting] = useState("Web Hosting");
  const [selectedDuration, setSelectedDuration] = useState("12 months");

  const hostingTypes = [
    { name: "Web Hosting", icon: Globe },
    { name: "Cloud Hosting", icon: Cloud },
    { name: "VPS Hosting", icon: Server },
  ];

  const currentPlans = pricingData[selectedHosting]?.[selectedDuration] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
      
      {/* Hero Section */}
      <div className="relative text-center py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-gray-900">
            Next-Gen Cloud Hosting
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
            Experience blazing-fast performance with enterprise-grade security. Start your digital journey today! 
          </p>

          <p className="text-sm text-gray-500">No credit card required • 30-day money-back guarantee</p>
        </motion.div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Choose your hosting pricing plan
          </h2>
          <p className="text-gray-600 text-lg">All plans include a 30-day risk-free trial</p>
        </motion.div>

        {/* Hosting Type Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {hostingTypes.map((type) => (
            <button
              key={type.name}
              onClick={() => setSelectedHosting(type.name)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all border ${
                selectedHosting === type.name
                  ? 'bg-indigo-50 text-indigo-700 border-indigo-200 shadow-sm'
                  : 'bg-slate-100 text-slate-700 border-transparent hover:bg-slate-200'
              }`}
            >
              <type.icon className="h-4 w-4" />
              {type.name}
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex flex-wrap items-end justify-center gap-6">
            <div className="w-full sm:w-[360px]">
              <label className="block text-xs font-semibold text-slate-500 mb-2">Type of Hosting</label>
              <div className="relative">
                <select
                  value={selectedHosting}
                  onChange={(e) => setSelectedHosting(e.target.value)}
                  className="appearance-none w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-slate-900 shadow-sm hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
                >
                  <option value="Web Hosting">Web Hosting</option>
                  <option value="VPS Hosting">VPS Hosting</option>
                  <option value="Cloud Hosting">Cloud Hosting</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
              </div>
            </div>

            <div className="w-full sm:w-[360px]">
              <label className="block text-xs font-semibold text-slate-500 mb-2">Plan Duration</label>
              <div className="relative">
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="appearance-none w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-slate-900 shadow-sm hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
                >
                  <option value="6 months">6 months</option>
                  <option value="12 months">12 months</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center items-stretch gap-8">
          {currentPlans.map((plan, i) => (
            <motion.div
              key={`${plan.title}-${i}`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0"
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
