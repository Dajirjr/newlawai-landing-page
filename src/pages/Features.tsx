import { Bot, Search, FileText, Shield, Zap, Brain, Users, Clock, CheckCircle } from 'lucide-react'
import Layout from '../components/Layout'
import { useEffect } from 'react'

export default function Features() {
  useEffect(() => {
    document.title = 'Features - NewLawAI | AI-Powered Legal Assistant'
  }, [])

  const features = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Intelligent Legal Research",
      description: "AI-powered search through case law, statutes, and legal precedents with instant results.",
      benefits: ["Case law analysis", "Statute interpretation", "Legal precedent tracking", "Citation verification"]
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Document Analysis",
      description: "Automated contract review with risk identification and clause recommendations.",
      benefits: ["Contract review", "Risk assessment", "Clause analysis", "Compliance checking"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Compliance Monitoring",
      description: "Track regulatory changes and ensure your practice stays compliant with evolving laws.",
      benefits: ["Regulatory updates", "Compliance alerts", "Policy tracking", "Risk mitigation"]
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Insights",
      description: "Generate intelligent legal strategies and recommendations based on comprehensive analysis.",
      benefits: ["Strategic insights", "Legal recommendations", "Case predictions", "Outcome analysis"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description: "Seamless collaboration tools for legal teams with secure document sharing.",
      benefits: ["Team workspaces", "Document sharing", "Real-time collaboration", "Version control"]
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Time-Saving Automation",
      description: "Automate routine legal tasks to focus on high-value client work.",
      benefits: ["Document automation", "Template generation", "Workflow optimization", "Task scheduling"]
    }
  ]

  const capabilities = [
    {
      title: "Advanced Natural Language Processing",
      description: "Our AI understands legal terminology and context with 95% accuracy",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Secure Cloud Infrastructure",
      description: "Enterprise-grade security with end-to-end encryption and compliance",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Continuous Learning",
      description: "AI models updated with latest legal developments and jurisprudence",
      icon: <Brain className="h-6 w-6" />
    }
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-[#0C0C0D] text-[#F8F9FA]">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-br from-[#00C2FF] to-[#6536FF] p-3 rounded-xl inline-block mb-6">
              <Bot className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#F8F9FA] to-[#B1B1B3] bg-clip-text text-transparent">
              Powerful AI Features
            </h1>
            <p className="text-xl text-[#B1B1B3] max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover how NewLawAI transforms legal practice with cutting-edge artificial intelligence, 
              designed specifically for legal professionals who demand precision and efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-[#1A1A1C] rounded-lg px-4 py-2 border border-[#3A3A3C]">
                <span className="text-[#00C2FF] font-semibold">95% Accuracy</span>
              </div>
              <div className="bg-[#1A1A1C] rounded-lg px-4 py-2 border border-[#3A3A3C]">
                <span className="text-[#00C2FF] font-semibold">50% Time Savings</span>
              </div>
              <div className="bg-[#1A1A1C] rounded-lg px-4 py-2 border border-[#3A3A3C]">
                <span className="text-[#00C2FF] font-semibold">24/7 Available</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6 bg-[#1A1A1C]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-[#F8F9FA]">
              Complete Legal AI Suite
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-[#2C2C2E] rounded-2xl p-8 border border-[#3A3A3C] hover:border-[#00C2FF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,194,255,0.1)]">
                  <div className="bg-gradient-to-br from-[#00C2FF] to-[#6536FF] rounded-xl p-3 w-fit mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#F8F9FA]">{feature.title}</h3>
                  <p className="text-[#B1B1B3] mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-[#B1B1B3]">
                        <CheckCircle className="h-4 w-4 text-[#00C2FF] mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-[#F8F9FA]">
                Advanced AI Capabilities
              </h2>
              <p className="text-xl text-[#B1B1B3] max-w-3xl mx-auto">
                Built on state-of-the-art machine learning models specifically trained for legal applications
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-[#1A1A1C] rounded-2xl p-8 border border-[#3A3A3C] text-center hover:border-[#00C2FF]/50 transition-all duration-300">
                  <div className="bg-gradient-to-br from-[#00C2FF] to-[#6536FF] rounded-full p-4 w-fit mx-auto mb-6">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#F8F9FA]">{capability.title}</h3>
                  <p className="text-[#B1B1B3] leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-[#1A1A1C] to-[#2C2C2E]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-[#F8F9FA]">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-[#B1B1B3] mb-8 leading-relaxed">
              Join thousands of legal professionals who trust NewLawAI to enhance their practice with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#00C2FF] hover:bg-[#00A8E6] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-150 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,194,255,0.3)]">
                Start Free Trial
              </button>
              <button className="bg-transparent border-2 border-[#00C2FF] text-[#00C2FF] hover:bg-[#00C2FF] hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-150">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}