import { Star, Quote, ChevronLeft, ChevronRight, Award, Users, TrendingUp } from 'lucide-react'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react'

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    document.title = 'Testimonials - NewLawAI | AI-Powered Legal Assistant'
  }, [])

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Partner",
      company: "Chen & Associates",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b494?w=150&h=150&fit=crop&crop=face",
      quote: "NewLawAI has revolutionized how we handle document review. What used to take hours now takes minutes, and the accuracy is incredible. Our clients are impressed with the speed and quality of our work.",
      metrics: "50% faster document review"
    },
    {
      name: "Michael Rodriguez",
      role: "Corporate Counsel",
      company: "TechCorp Industries",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "The compliance monitoring feature is a game-changer. We're always ahead of regulatory changes, and the AI insights help us make better strategic decisions. Highly recommended for any legal team.",
      metrics: "100% compliance rate"
    },
    {
      name: "Dr. Emily Watson",
      role: "Legal Director",
      company: "Healthcare Alliance",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "As someone who deals with complex healthcare regulations, NewLawAI's research capabilities are unmatched. The AI understands legal nuances better than I expected.",
      metrics: "75% reduction in research time"
    },
    {
      name: "James Thompson",
      role: "Managing Partner",
      company: "Thompson Legal Group",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "We've seen a significant improvement in our team's productivity since implementing NewLawAI. The document analysis is thorough and the insights are actionable.",
      metrics: "40% increase in billable hours"
    },
    {
      name: "Lisa Park",
      role: "IP Attorney",
      company: "Innovation Law Firm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      quote: "The AI-powered patent research is outstanding. It finds relevant prior art that I might have missed, ensuring our applications are bulletproof.",
      metrics: "30% higher success rate"
    },
    {
      name: "Robert Kim",
      role: "Solo Practitioner",
      company: "Kim Law Office",
      rating: 5,
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face",
      quote: "As a solo practitioner, NewLawAI gives me the capabilities of a large firm. The cost savings and efficiency gains have been tremendous for my practice.",
      metrics: "200% ROI in first year"
    }
  ]

  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "10,000+",
      label: "Legal Professionals",
      description: "Trust NewLawAI daily"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "4.9/5",
      label: "Average Rating",
      description: "From verified users"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "300%",
      label: "Productivity Increase",
      description: "Average across all users"
    }
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <Layout>
      <div className="min-h-screen bg-[#0C0C0D] text-[#F8F9FA]">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-br from-[#00C2FF] to-[#6536FF] p-3 rounded-xl inline-block mb-6">
              <Quote className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#F8F9FA] to-[#B1B1B3] bg-clip-text text-transparent">
              Trusted by Legal Professionals
            </h1>
            <p className="text-xl text-[#B1B1B3] max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover how NewLawAI is transforming legal practices worldwide. Read real stories from attorneys, 
              legal teams, and firms who've experienced the power of AI-driven legal assistance.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 bg-[#1A1A1C]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-[#00C2FF] to-[#6536FF] rounded-xl p-4 w-fit mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-[#F8F9FA] mb-2">{stat.number}</div>
                  <div className="text-xl font-semibold text-[#00C2FF] mb-2">{stat.label}</div>
                  <div className="text-[#B1B1B3]">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Testimonial */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-[#1A1A1C] to-[#2C2C2E] rounded-3xl p-12 border border-[#3A3A3C] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#00C2FF]/20 to-[#6536FF]/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-[#F8F9FA]">Featured Story</h2>
                  <div className="flex gap-2">
                    <button 
                      onClick={prevTestimonial}
                      className="p-2 bg-[#2C2C2E] rounded-full border border-[#3A3A3C] hover:border-[#00C2FF] transition-all duration-200"
                    >
                      <ChevronLeft className="h-5 w-5 text-[#B1B1B3]" />
                    </button>
                    <button 
                      onClick={nextTestimonial}
                      className="p-2 bg-[#2C2C2E] rounded-full border border-[#3A3A3C] hover:border-[#00C2FF] transition-all duration-200"
                    >
                      <ChevronRight className="h-5 w-5 text-[#B1B1B3]" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonials[activeTestimonial].image} 
                        alt={testimonials[activeTestimonial].name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-[#F8F9FA]">{testimonials[activeTestimonial].name}</h3>
                        <p className="text-[#B1B1B3]">{testimonials[activeTestimonial].role}</p>
                        <p className="text-[#00C2FF] font-medium">{testimonials[activeTestimonial].company}</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-6">
                      {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-[#FFB400] fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-xl text-[#F8F9FA] leading-relaxed mb-6">
                      "{testimonials[activeTestimonial].quote}"
                    </blockquote>
                    <div className="bg-[#00C2FF]/20 rounded-lg p-4 border border-[#00C2FF]/30">
                      <p className="text-[#00C2FF] font-semibold">{testimonials[activeTestimonial].metrics}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-[#0C0C0D] rounded-2xl p-8 border border-[#3A3A3C]">
                      <Quote className="h-12 w-12 text-[#00C2FF] mb-4" />
                      <h4 className="text-2xl font-bold text-[#F8F9FA] mb-4">Impact Story</h4>
                      <p className="text-[#B1B1B3] leading-relaxed mb-6">
                        {testimonials[activeTestimonial].company} has been using NewLawAI for over a year, 
                        transforming their legal operations and achieving remarkable results in efficiency and accuracy.
                      </p>
                      <div className="flex items-center">
                        <div className="bg-[#00C2FF]/20 rounded-full p-2 mr-3">
                          <TrendingUp className="h-4 w-4 text-[#00C2FF]" />
                        </div>
                        <span className="text-[#F8F9FA] font-medium">Verified Success Story</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Testimonials Grid */}
        <section className="py-20 px-6 bg-[#1A1A1C]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-[#F8F9FA]">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-[#2C2C2E] rounded-2xl p-6 border border-[#3A3A3C] hover:border-[#00C2FF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,194,255,0.1)]">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-3"
                    />
                    <div>
                      <h3 className="font-semibold text-[#F8F9FA]">{testimonial.name}</h3>
                      <p className="text-sm text-[#B1B1B3]">{testimonial.role}</p>
                      <p className="text-sm text-[#00C2FF]">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[#FFB400] fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-[#F8F9FA] leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="bg-[#00C2FF]/20 rounded-lg p-3 border border-[#00C2FF]/30">
                    <p className="text-[#00C2FF] font-medium text-sm">{testimonial.metrics}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-[#F8F9FA]">
              Success Stories by Practice Area
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Corporate Law",
                  description: "Major law firm reduces contract review time by 60% using NewLawAI's document analysis",
                  metrics: ["60% faster reviews", "99.8% accuracy rate", "€2M+ saved annually"]
                },
                {
                  title: "Intellectual Property",
                  description: "IP boutique firm increases patent application success rate with AI-powered prior art research",
                  metrics: ["35% higher success rate", "50% faster research", "300+ patents filed"]
                },
                {
                  title: "Healthcare Law",
                  description: "Healthcare legal team maintains 100% compliance with evolving regulations",
                  metrics: ["100% compliance rate", "Real-time monitoring", "Zero violations"]
                },
                {
                  title: "Criminal Defense",
                  description: "Public defender's office improves case preparation efficiency with AI research tools",
                  metrics: ["75% time savings", "Better case outcomes", "Serves 2x more clients"]
                }
              ].map((study, index) => (
                <div key={index} className="bg-[#1A1A1C] rounded-2xl p-8 border border-[#3A3A3C] hover:border-[#00C2FF]/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-[#F8F9FA] mb-4">{study.title}</h3>
                  <p className="text-[#B1B1B3] mb-6 leading-relaxed">{study.description}</p>
                  <div className="space-y-2">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-[#00C2FF] rounded-full mr-3"></div>
                        <span className="text-[#F8F9FA] font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-[#1A1A1C] to-[#2C2C2E]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-[#F8F9FA]">
              Join Thousands of Satisfied Legal Professionals
            </h2>
            <p className="text-xl text-[#B1B1B3] mb-8 leading-relaxed">
              Experience the same transformation in your legal practice. Start your free trial today and see why so many legal professionals trust NewLawAI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#00C2FF] hover:bg-[#00A8E6] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-150 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,194,255,0.3)]">
                Start Free Trial
              </button>
              <button className="bg-transparent border-2 border-[#00C2FF] text-[#00C2FF] hover:bg-[#00C2FF] hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-150">
                View All Reviews
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}