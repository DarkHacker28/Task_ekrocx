import { Zap, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">HostifyX</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Hosting</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Domains</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">VPS</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Pricing</a>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium">
              Log In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            <a href="#" className="block text-gray-700 hover:text-indigo-600 font-medium py-2">Hosting</a>
            <a href="#" className="block text-gray-700 hover:text-indigo-600 font-medium py-2">Domains</a>
            <a href="#" className="block text-gray-700 hover:text-indigo-600 font-medium py-2">VPS</a>
            <a href="#" className="block text-gray-700 hover:text-indigo-600 font-medium py-2">Pricing</a>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium mt-2">
              Log In
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}