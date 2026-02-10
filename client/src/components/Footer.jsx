import { motion } from "framer-motion";
import { Zap, Mail, Phone, MapPin, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-gray-300 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-8 w-8 text-indigo-400" />
              <h3 className="text-2xl font-bold text-white">HostifyX</h3>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering businesses with lightning-fast, secure, and scalable cloud hosting solutions.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              {['Web Hosting', 'Cloud Hosting', 'VPS Hosting', 'Dedicated Servers', 'Domain Names'].map((item, i) => (
                <motion.li key={i} whileHover={{ x: 5 }} className="cursor-pointer hover:text-indigo-400 transition-colors">
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              {['About Us', 'Careers', 'Blog', 'Privacy Policy', 'Terms of Service'].map((item, i) => (
                <motion.li key={i} whileHover={{ x: 5 }} className="cursor-pointer hover:text-indigo-400 transition-colors">
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-indigo-400" />
                <span>hello@hostifyx.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-indigo-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-indigo-400 mt-1" />
                <span>123 Cloud Street,<br />Tech Valley, CA 94000</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-white/10 mt-12 pt-8 text-center text-sm"
        >
          <p>© {new Date().getFullYear()} <span className="text-indigo-400 font-semibold">HostifyX</span>. All rights reserved. Crafted with <span className="animate-pulse">❤️</span> for creators.</p>
        </motion.div>
      </div>
    </footer>
  );
}