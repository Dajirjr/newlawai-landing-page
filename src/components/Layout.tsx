import { Menu, X, Bot } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen bg-[#0C0C0D] text-[#F8F9FA] font-['Inter'] selection:bg-[#00C2FF]/20">
      {/* Header */}
      <header className="bg-[#1A1A1C] border-b border-[#3A3A3C] sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <div className="bg-gradient-to-br from-[#00C2FF] to-[#6536FF] p-2 rounded-lg">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-[#F8F9FA]">NewLawAI</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/features"
                className={`transition-all duration-300 relative ${
                  isActive('/features') 
                    ? 'text-[#00C2FF]' 
                    : 'text-[#B1B1B3] hover:text-[#00C2FF]'
                }`}
              >
                Features
                {isActive('/features') && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00C2FF] rounded-full"></div>
                )}
              </Link>
              <Link 
                to="/pricing"
                className={`transition-all duration-300 relative ${
                  isActive('/pricing') 
                    ? 'text-[#00C2FF]' 
                    : 'text-[#B1B1B3] hover:text-[#00C2FF]'
                }`}
              >
                Pricing
                {isActive('/pricing') && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00C2FF] rounded-full"></div>
                )}
              </Link>
              <Link 
                to="/testimonials"
                className={`transition-all duration-300 relative ${
                  isActive('/testimonials') 
                    ? 'text-[#00C2FF]' 
                    : 'text-[#B1B1B3] hover:text-[#00C2FF]'
                }`}
              >
                Testimonials
                {isActive('/testimonials') && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00C2FF] rounded-full"></div>
                )}
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-[#B1B1B3] hover:text-[#00C2FF] transition-all duration-300 font-medium">Sign In</button>
              <button className="bg-[#00C2FF] hover:bg-[#00A8E6] text-white px-6 py-3 rounded-[12px] transition-all duration-150 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,194,255,0.3)] font-medium">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-[#B1B1B3] hover:text-[#00C2FF] hover:bg-[#2C2C2E] transition-all duration-150"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1A1A1C] border-t border-[#3A3A3C]">
            <div className="px-6 pt-2 pb-3 space-y-1">
              <Link to="/features" className="block px-3 py-2 text-[#B1B1B3] hover:text-[#00C2FF] rounded-lg hover:bg-[#2C2C2E] transition-all duration-150">Features</Link>
              <Link to="/pricing" className="block px-3 py-2 text-[#B1B1B3] hover:text-[#00C2FF] rounded-lg hover:bg-[#2C2C2E] transition-all duration-150">Pricing</Link>
              <Link to="/testimonials" className="block px-3 py-2 text-[#B1B1B3] hover:text-[#00C2FF] rounded-lg hover:bg-[#2C2C2E] transition-all duration-150">Testimonials</Link>
              <div className="pt-4 border-t border-[#3A3A3C]">
                <button className="block w-full text-left px-3 py-2 text-[#B1B1B3] hover:text-[#00C2FF] rounded-lg hover:bg-[#2C2C2E] transition-all duration-150 font-medium">Sign In</button>
                <button className="mt-2 w-full bg-[#00C2FF] hover:bg-[#00A8E6] text-white px-6 py-3 rounded-[12px] transition-all duration-150 hover:scale-105 font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1A1C] border-t border-[#3A3A3C] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-[#00C2FF] to-[#6536FF] p-2 rounded-lg mr-3">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-[#F8F9FA]">NewLawAI</span>
              </div>
              <p className="text-[#B1B1B3] leading-relaxed mb-4">
                Transforming legal practice with intelligent AI solutions.
              </p>
              <p className="text-xs text-[#B1B1B3] leading-relaxed">
                Professional AI assistant for legal research and document analysis.
              </p>
            </div>
            
            {/* Product Column */}
            <div>
              <h3 className="font-semibold mb-4 text-[#F8F9FA]">Product</h3>
              <ul className="space-y-2 text-[#B1B1B3] text-sm">
                <li><Link to="/features" className="hover:text-[#00C2FF] transition-colors duration-300">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-[#00C2FF] transition-colors duration-300">Pricing</Link></li>
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors duration-300">Demo</a></li>
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors duration-300">API Documentation</a></li>
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors duration-300">Integrations</a></li>
              </ul>
            </div>
            
            {/* Company Column */}
            <div>
              <h3 className="font-semibold mb-4 text-[#F8F9FA]">Company</h3>
              <ul className="space-y-2 text-[#B1B1B3] text-sm">
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors duration-300">Contact</a></li>
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors duration-300">Press Kit</a></li>
              </ul>
            </div>
            
            {/* Legal & Contact Column */}
            <div>
              <h3 className="font-semibold mb-4 text-[#F8F9FA]">Legal & Support</h3>
              <ul className="space-y-2 text-[#B1B1B3] text-sm">
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors duration-300">Help Center</a></li>
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors duration-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors duration-300">Professional Disclaimer</a></li>
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors duration-300">Security</a></li>
              </ul>
            </div>
          </div>
          
          {/* Legal Disclaimer */}
          <div className="border-t border-[#3A3A3C] pt-6 mb-6">
            <div className="bg-[#2C2C2E] rounded-lg p-4 border border-[#3A3A3C]">
              <h4 className="text-[#FFB400] font-semibold mb-2 text-sm">⚖️ Professional Legal Disclaimer</h4>
              <p className="text-xs text-[#B1B1B3] leading-relaxed">
                NewLawAI provides AI-powered research and document analysis tools for legal professionals. 
                Our platform does not provide legal advice and should not be used as a substitute for consultation 
                with qualified legal counsel. Users are responsible for verifying all outputs and ensuring compliance 
                with professional standards and applicable laws.
              </p>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-[#3A3A3C] pt-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div>
              <p className="text-[#B1B1B3] text-sm">
                © 2024 NewLawAI. All rights reserved.
              </p>
              <p className="text-xs text-[#B1B1B3] mt-1">
                Built with security and compliance in mind for legal professionals.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <a href="#" className="text-[#B1B1B3] hover:text-[#00C2FF] transition-colors duration-300 text-sm">Privacy</a>
              <a href="#" className="text-[#B1B1B3] hover:text-[#00C2FF] transition-colors duration-300 text-sm">Terms</a>
              <a href="#" className="text-[#B1B1B3] hover:text-[#00C2FF] transition-colors duration-300 text-sm">Security</a>
              <a href="#" className="text-[#B1B1B3] hover:text-[#00C2FF] transition-colors duration-300 text-sm">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}