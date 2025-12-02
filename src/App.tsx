import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home as HomeIcon, Info, BarChart3 } from 'lucide-react'
import Home from './pages/Home'
import About from './pages/About'
import Charts from './pages/Charts'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md p-4">
          <div className="flex gap-4 justify-center">
            <Link to="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
              <HomeIcon size={18} />
              Home
            </Link>
            <Link to="/about" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
              <Info size={18} />
              About
            </Link>
            <Link to="/charts" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
              <BarChart3 size={18} />
              Charts
            </Link>
          </div>
        </nav>
        
        <div className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/charts" element={<Charts />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App