import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">📖</span>
          <span className="text-xl font-bold text-gray-900">GentleDental.ai</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">How it works</a>
          <a href="#" className="hover:text-gray-900">Features</a>
          <a href="#" className="hover:text-gray-900">For Patients</a>
          <a href="#" className="hover:text-gray-900">For Dentists</a>
          <a href="#" className="hover:text-gray-900">Security</a>
          <a href="#" className="hover:text-gray-900">Reviews</a>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-600 text-sm">Sign in</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600">
            Get started free
          </button>
        </div>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
          <nav className="flex flex-col gap-4 pt-4 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">How it works</a>
            <a href="#" className="hover:text-gray-900">Features</a>
            <a href="#" className="hover:text-gray-900">For Patients</a>
            <a href="#" className="hover:text-gray-900">For Dentists</a>
            <a href="#" className="hover:text-gray-900">Security</a>
            <a href="#" className="hover:text-gray-900">Reviews</a>
            <div className="flex flex-col gap-2 mt-4">
              <button className="text-gray-600 text-sm text-left">Sign in</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600">
                Get started free
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}