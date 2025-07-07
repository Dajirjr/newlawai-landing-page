import { Menu, X, Search, Bot, FileText, Shield, Play, Check, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    document.title = 'NewLawAI - AI-Powered Legal Assistant'
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'demo', 'pricing', 'testimonials', 'faq']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const fadeElements = document.querySelectorAll('.fade-in')
    fadeElements.forEach(el => observer.observe(el))

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0C0C0D] text-[#F8F9FA] font-['Inter'] selection:bg-[#00C2FF]/20">
      {/* Header */}
      <header className="bg-[#1A1A1C] border-b border-[#3A3A3C] sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-[#00C2FF] to-[#6536FF] p-2 rounded-lg">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-[#F8F9FA]">NewLawAI</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className={`transition-all duration-300 relative ${
                  activeSection === 'features' 
                    ? 'text-[#00C2FF]' 
                    : 'text-[#B1B1B3] hover:text-[#00C2FF]'
                }`}
              >
                Features
                {activeSection === 'features' && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00C2FF] rounded-full"></div>
                )}
              </button>
              <button 
                onClick={() => scrollToSection('demo')}
                className={`transition-all duration-300 relative ${
                  activeSection === 'demo' 
                    ? 'text-[#00C2FF]' 
                    : 'text-[#B1B1B3] hover:text-[#00C2FF]'
                }`}
              >
                Demo
                {activeSection === 'demo' && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00C2FF] rounded-full"></div>
                )}
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className={`transition-all duration-300 relative ${
                  activeSection === 'pricing' 
                    ? 'text-[#00C2FF]' 
                    : 'text-[#B1B1B3] hover:text-[#00C2FF]'
                }`}
              >
                Pricing
                {activeSection === 'pricing' && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00C2FF] rounded-full"></div>
                )}
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className={`transition-all duration-300 relative ${
                  activeSection === 'testimonials' 
                    ? 'text-[#00C2FF]' 
                    : 'text-[#B1B1B3] hover:text-[#00C2FF]'
                }`}
              >
                Testimonials
                {activeSection === 'testimonials' && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00C2FF] rounded-full"></div>
                )}
              </button>
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
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-2 text-[#B1B1B3] hover:text-[#00C2FF] rounded-lg hover:bg-[#2C2C2E] transition-all duration-150">Features</button>
              <button onClick={() => scrollToSection('demo')} className="block w-full text-left px-3 py-2 text-[#B1B1B3] hover:text-[#00C2FF] rounded-lg hover:bg-[#2C2C2E] transition-all duration-150">Demo</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-3 py-2 text-[#B1B1B3] hover:text-[#00C2FF] rounded-lg hover:bg-[#2C2C2E] transition-all duration-150">Pricing</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-3 py-2 text-[#B1B1B3] hover:text-[#00C2FF] rounded-lg hover:bg-[#2C2C2E] transition-all duration-150">Testimonials</button>
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

      {/* Hero Section */}
      <section id="hero" className="min-h-screen bg-gradient-to-br from-[#0C0C0D] via-[#112031] to-[#361B3A] text-white flex flex-col items-center justify-center text-center gap-6 pt-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6536FF]/10 to-[#00C2FF]/10 opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00C2FF] to-[#6536FF] flex items-center justify-center mb-8 animate-hero-glow drop-shadow-2xl ring-4 ring-[#00C2FF] ring-opacity-30">
            <Bot className="text-white w-12 h-12" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F8F9FA] to-[#B1B1B3] bg-clip-text text-transparent leading-tight">
            AI-Powered Legal Assistant
          </h1>
          <p className="text-xl text-[#B1B1B3] max-w-3xl mx-auto mb-8 leading-relaxed px-6">
            Transform your legal practice with intelligent document analysis, instant research, and expert recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-6">
            <button className="btn-primary bg-[#00C2FF] hover:bg-[#00A8E6] text-white px-8 py-4 rounded-[16px] font-semibold">
              Start Free Trial
            </button>
            <button className="btn-secondary bg-transparent border-2 border-[#00C2FF] text-[#00C2FF] hover:bg-[#00C2FF] hover:text-white px-8 py-4 rounded-[16px] font-semibold transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-[#1A1A1C] fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#F8F9FA]">Powerful AI Features for Legal Professionals</h2>
            <p className="text-xl text-[#B1B1B3] max-w-3xl mx-auto">
              Discover how NewLawAI transforms every aspect of your legal practice with cutting-edge artificial intelligence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#2C2C2E] rounded-[24px] p-8 border border-[#3A3A3C] hover:border-[#00C2FF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,194,255,0.1)]">
              <div className="bg-gradient-to-br from-[#00C2FF] to-[#6536FF] rounded-[16px] p-3 w-fit mb-6">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#F8F9FA]">Intelligent Research</h3>
              <p className="text-[#B1B1B3] mb-6 leading-relaxed">
                AI-powered legal research that understands context and delivers precise, relevant case law and statutes in seconds.
              </p>
              <ul className="space-y-2 text-[#B1B1B3]">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-[#00C2FF] mr-2" />
                  <span>Case law analysis</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-[#00C2FF] mr-2" />
                  <span>Statute interpretation</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-[#00C2FF] mr-2" />
                  <span>Legal precedent tracking</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#2C2C2E] rounded-[24px] p-8 border border-[#3A3A3C] hover:border-[#00C2FF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,194,255,0.1)]">
              <div className="bg-gradient-to-br from-[#00C2FF] to-[#6536FF] rounded-[16px] p-3 w-fit mb-6">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#F8F9FA]">Document Analysis</h3>
              <p className="text-[#B1B1B3] mb-6 leading-relaxed">
                Automated contract review and document analysis with intelligent risk identification and recommendations.
              </p>
              <ul className="space-y-2 text-[#B1B1B3]">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-[#00C2FF] mr-2" />
                  <span>Contract review</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-[#00C2FF] mr-2" />
                  <span>Risk assessment</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-[#00C2FF] mr-2" />
                  <span>Clause recommendations</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#2C2C2E] rounded-[24px] p-8 border border-[#3A3A3C] hover:border-[#00C2FF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,194,255,0.1)]">
              <div className="bg-gradient-to-br from-[#00C2FF] to-[#6536FF] rounded-[16px] p-3 w-fit mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#F8F9FA]">Compliance Monitoring</h3>
              <p className="text-[#B1B1B3] mb-6 leading-relaxed">
                Stay ahead of regulatory changes with intelligent compliance monitoring and automatic alerts for your practice area.
              </p>
              <ul className="space-y-2 text-[#B1B1B3]">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-[#00C2FF] mr-2" />
                  <span>Regulatory updates</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-[#00C2FF] mr-2" />
                  <span>Compliance alerts</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-[#00C2FF] mr-2" />
                  <span>Risk mitigation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-6 bg-[#0C0C0D] fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#F8F9FA]">See NewLawAI in Action</h2>
            <p className="text-xl text-[#B1B1B3] max-w-3xl mx-auto">
              Watch how our AI assistant transforms legal research and document analysis in real-time.
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1A1A1C] to-[#2C2C2E] rounded-[24px] border border-[#3A3A3C] overflow-hidden">
              <div className="aspect-video bg-[#0C0C0D] flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6536FF]/20 to-[#00C2FF]/20"></div>
                <div className="relative z-10 text-center">
                  <div className="bg-[#00C2FF] hover:bg-[#00A8E6] rounded-full p-6 inline-flex items-center justify-center mb-6 transition-all duration-300 hover:scale-110 cursor-pointer">
                    <Play className="h-12 w-12 text-white ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#F8F9FA]">Interactive Demo</h3>
                  <p className="text-[#B1B1B3] max-w-md mx-auto">
                    Experience how NewLawAI analyzes complex legal documents and provides actionable insights in seconds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-[#1A1A1C] fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#F8F9FA]">Choose Your Plan</h2>
            <p className="text-xl text-[#B1B1B3] max-w-3xl mx-auto">
              Flexible pricing options designed for legal professionals and firms of all sizes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-[#2C2C2E] rounded-[24px] p-8 border border-[#3A3A3C] hover:border-[#00C2FF]/50 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-[#F8F9FA]">Free Trial</h3>
                <div className="text-4xl font-bold text-[#F8F9FA] mb-2">€0</div>
                <div className="text-[#B1B1B3]">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#00C2FF] mr-3" />
                  <span className="text-[#F8F9FA]">5 document analyses</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#00C2FF] mr-3" />
                  <span className="text-[#F8F9FA]">Basic legal research</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#00C2FF] mr-3" />
                  <span className="text-[#F8F9FA]">Email support</span>
                </li>
                <li className="flex items-center">
                  <X className="h-5 w-5 text-[#B1B1B3] mr-3" />
                  <span className="text-[#B1B1B3]">AI-powered insights</span>
                </li>
              </ul>
              <button className="w-full bg-[#3A3A3C] hover:bg-[#00C2FF] text-[#F8F9FA] py-4 rounded-[16px] font-semibold transition-all duration-300">
                Start Free Trial
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-[#2C2C2E] rounded-[24px] p-8 border-2 border-[#00C2FF] relative hover:shadow-[0_0_50px_rgba(0,194,255,0.2)] transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-[#00C2FF] text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-[#F8F9FA]">Professional</h3>
                <div className="text-4xl font-bold text-[#F8F9FA] mb-2">€19</div>
                <div className="text-[#B1B1B3]">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#00C2FF] mr-3" />
                  <span className="text-[#F8F9FA]">Unlimited document analyses</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#00C2FF] mr-3" />
                  <span className="text-[#F8F9FA]">AI-generated legal letters</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#00C2FF] mr-3" />
                  <span className="text-[#F8F9FA]">Priority support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#00C2FF] mr-3" />
                  <span className="text-[#F8F9FA]">Advanced insights</span>
                </li>
              </ul>
              <button className="w-full bg-[#00C2FF] hover:bg-[#00A8E6] text-white py-4 rounded-[16px] font-semibold transition-all duration-300 hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-[#2C2C2E] rounded-[24px] p-8 border border-[#3A3A3C] hover:border-[#00C2FF]/50 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-[#F8F9FA]">Enterprise</h3>
                <div className="text-4xl font-bold text-[#F8F9FA] mb-2">€29</div>
                <div className="text-[#B1B1B3]">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#00C2FF] mr-3" />
                  <span className="text-[#F8F9FA]">Everything in Professional</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#00C2FF] mr-3" />
                  <span className="text-[#F8F9FA]">Expert lawyer review</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#00C2FF] mr-3" />
                  <span className="text-[#F8F9FA]">Custom legal strategies</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#00C2FF] mr-3" />
                  <span className="text-[#F8F9FA]">24/7 premium support</span>
                </li>
              </ul>
              <button className="w-full bg-[#3A3A3C] hover:bg-[#00C2FF] text-[#F8F9FA] py-4 rounded-[16px] font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#0C0C0D] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2">Trusted by Legal Professionals</h2>
          <p className="text-gray-400 mb-10">See what attorneys and legal teams are saying about NewLawAI.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-[#1A1A1C] p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face&auto=format" 
                  alt="Sarah Chen" 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#00C2FF]/30 flex-shrink-0" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face&auto=format";
                  }}
                />
                <div className="text-left">
                  <p className="font-semibold text-white">Sarah Chen</p>
                  <p className="text-sm text-gray-400">Senior Partner, Chen & Associates</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-3 text-lg">★★★★★</div>
              <p className="text-gray-300 text-sm leading-relaxed">"NewLawAI has revolutionized how we handle document review. What used to take hours now takes minutes."</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#1A1A1C] p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                  alt="Michael Rodriguez" 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#00C2FF]/30" 
                />
                <div className="text-left">
                  <p className="font-semibold text-white">Michael Rodriguez</p>
                  <p className="text-sm text-gray-400">Corporate Counsel, TechCorp</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-3 text-lg">★★★★★</div>
              <p className="text-gray-300 text-sm leading-relaxed">"The compliance monitoring feature is a game-changer. We're always ahead of regulatory changes."</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#1A1A1C] p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" 
                  alt="Dr. Emily Watson" 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#00C2FF]/30" 
                />
                <div className="text-left">
                  <p className="font-semibold text-white">Dr. Emily Watson</p>
                  <p className="text-sm text-gray-400">Legal Director, HealthCare Alliance</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-3 text-lg">★★★★★</div>
              <p className="text-gray-300 text-sm leading-relaxed">"The AI research capabilities are unmatched. It understands legal nuance better than I expected."</p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-[#1A1A1C] p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                  alt="James Thompson" 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#00C2FF]/30" 
                />
                <div className="text-left">
                  <p className="font-semibold text-white">James Thompson</p>
                  <p className="text-sm text-gray-400">Managing Partner, Thompson Legal</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-3 text-lg">★★★★★</div>
              <p className="text-gray-300 text-sm leading-relaxed">"Our team's productivity has increased dramatically. The document analysis is thorough and saves us countless hours."</p>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-[#1A1A1C] p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face" 
                  alt="Lisa Park" 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#00C2FF]/30" 
                />
                <div className="text-left">
                  <p className="font-semibold text-white">Lisa Park</p>
                  <p className="text-sm text-gray-400">IP Attorney, Innovation Law Firm</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-3 text-lg">★★★★★</div>
              <p className="text-gray-300 text-sm leading-relaxed">"The patent research capabilities are outstanding. It finds relevant prior art that ensures our applications are bulletproof."</p>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-[#1A1A1C] p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face" 
                  alt="Robert Kim" 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#00C2FF]/30" 
                />
                <div className="text-left">
                  <p className="font-semibold text-white">Robert Kim</p>
                  <p className="text-sm text-gray-400">Solo Practitioner, Kim Law Office</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-3 text-lg">★★★★★</div>
              <p className="text-gray-300 text-sm leading-relaxed">"As a solo practitioner, NewLawAI gives me capabilities of a large firm. The ROI has been tremendous."</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-[#1A1A1C] fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#F8F9FA]">Frequently Asked Questions</h2>
            <p className="text-xl text-[#B1B1B3]">
              Get answers to common questions about NewLawAI.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "How accurate is the AI legal research?",
                answer: "Our AI achieves 95% accuracy in legal research and document analysis, continuously improving through machine learning and regular updates with the latest legal developments."
              },
              {
                question: "Is my data secure and confidential?",
                answer: "Yes, we use enterprise-grade encryption and follow strict security protocols. Your data is never shared with third parties, and we comply with all relevant privacy regulations including GDPR."
              },
              {
                question: "Can I integrate NewLawAI with my existing tools?",
                answer: "Absolutely! NewLawAI offers API access and integrations with popular legal software platforms. Our Professional and Enterprise plans include priority support for custom integrations."
              },
              {
                question: "What types of legal documents can be analyzed?",
                answer: "NewLawAI can analyze contracts, agreements, legal briefs, regulatory documents, and more. Our AI understands context across various practice areas including corporate law, litigation, and compliance."
              },
              {
                question: "Do you offer training and support?",
                answer: "Yes! We provide comprehensive onboarding, training materials, and ongoing support. Professional and Enterprise plans include priority support with dedicated account management."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#2C2C2E] rounded-[16px] border border-[#3A3A3C] overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#3A3A3C] transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-[#F8F9FA]">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-[#B1B1B3] transition-transform duration-200 ${
                    openFaq === index ? 'transform rotate-180' : ''
                  }`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-[#B1B1B3] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0C0C0D] via-[#1A1A1C] to-[#2C2C2E] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6536FF]/10 to-[#00C2FF]/10 opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-[#F8F9FA]">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-[#B1B1B3] mb-8 leading-relaxed">
            Join thousands of legal professionals who trust NewLawAI to enhance their practice with intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#00C2FF] hover:bg-[#00A8E6] text-white px-8 py-4 rounded-[16px] font-semibold transition-all duration-150 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,194,255,0.3)]">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-[#00C2FF] text-[#00C2FF] hover:bg-[#00C2FF] hover:text-white px-8 py-4 rounded-[16px] font-semibold transition-all duration-150">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

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
                <li><a href="#features" className="hover:text-[#00C2FF] transition-colors duration-300">Features</a></li>
                <li><a href="#pricing" className="hover:text-[#00C2FF] transition-colors duration-300">Pricing</a></li>
                <li><a href="#demo" className="hover:text-[#00C2FF] transition-colors duration-300">Demo</a></li>
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
            <div className="bg-[#2C2C2E] rounded-lg p-4 border border-[#3A3A3C] hover:border-[#00C2FF]/30 transition-all duration-300">
              <h4 className="text-[#FFB400] font-semibold mb-2 text-sm flex items-center">
                ⚖️ Professional Legal Disclaimer
              </h4>
              <p className="text-xs text-[#B1B1B3] leading-relaxed">
                NewLawAI provides AI-powered research and document analysis tools for legal professionals. 
                Our platform does not provide legal advice and should not be used as a substitute for consultation 
                with qualified legal counsel. Users are responsible for verifying all outputs and ensuring compliance 
                with professional standards and applicable laws. Always consult with qualified attorneys for legal decisions.
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

export default LandingPage