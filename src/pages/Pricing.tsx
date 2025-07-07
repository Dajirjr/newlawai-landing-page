import { Check, X, Star, Zap, Crown, Users, Shield } from 'lucide-react'
import Layout from '../components/Layout'
import { useEffect } from 'react'

export default function Pricing() {
  useEffect(() => {
    document.title = 'Pricing - NewLawAI | AI-Powered Legal Assistant'
  }, [])

  const plans = [
    {
      name: "Free Trial",
      price: "€0",
      period: "per month",
      description: "Perfect for trying out NewLawAI's capabilities",
      icon: <Star className="h-6 w-6" />,
      popular: false,
      features: [
        { name: "5 document analyses", included: true },
        { name: "Basic legal research", included: true },
        { name: "Email support", included: true },
        { name: "Standard templates", included: true },
        { name: "AI-powered insights", included: false },
        { name: "Priority support", included: false },
        { name: "Advanced analytics", included: false },
        { name: "Team collaboration", included: false },
        { name: "Custom integrations", included: false }
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "€19",
      period: "per month",
      description: "Everything you need for professional legal practice",
      icon: <Zap className="h-6 w-6" />,
      popular: true,
      features: [
        { name: "Unlimited document analyses", included: true },
        { name: "Advanced legal research", included: true },
        { name: "Priority support", included: true },
        { name: "AI-generated legal letters", included: true },
        { name: "Advanced templates", included: true },
        { name: "Analytics dashboard", included: true },
        { name: "API access", included: true },
        { name: "Team collaboration", included: false },
        { name: "Custom integrations", included: false }
      ],
      cta: "Get Started"
    },
    {
      name: "Enterprise",
      price: "€29",
      period: "per month",
      description: "Complete solution with expert human review",
      icon: <Crown className="h-6 w-6" />,
      popular: false,
      features: [
        { name: "Everything in Professional", included: true },
        { name: "Expert lawyer review", included: true },
        { name: "Custom legal strategies", included: true },
        { name: "24/7 premium support", included: true },
        { name: "Team collaboration", included: true },
        { name: "Custom integrations", included: true },
        { name: "Advanced security", included: true },
        { name: "Compliance monitoring", included: true },
        { name: "Dedicated account manager", included: true }
      ],
      cta: "Contact Sales"
    }
  ]

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Is there a long-term contract?",
      answer: "No, all plans are month-to-month with no long-term commitments. You can cancel anytime."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee for all paid plans if you're not satisfied."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade encryption and comply with all major data protection regulations including GDPR."
    }
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-[#0C0C0D] text-[#F8F9FA]">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#F8F9FA] to-[#B1B1B3] bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-[#B1B1B3] max-w-3xl mx-auto mb-8 leading-relaxed">
              Choose the perfect plan for your legal practice. All plans include core AI features with transparent pricing and no hidden fees.
            </p>
            <div className="flex justify-center items-center gap-4 mb-12">
              <span className="text-[#B1B1B3]">Monthly</span>
              <div className="bg-[#1A1A1C] rounded-full p-1 border border-[#3A3A3C]">
                <div className="bg-[#00C2FF] text-white px-4 py-2 rounded-full text-sm font-medium">
                  Save 20% annually
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-[#00C2FF] bg-[#1A1A1C] shadow-[0_0_50px_rgba(0,194,255,0.2)]' 
                    : 'border-[#3A3A3C] bg-[#1A1A1C] hover:border-[#00C2FF]/50'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-[#00C2FF] text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`inline-flex p-3 rounded-xl mb-4 ${
                      plan.popular 
                        ? 'bg-gradient-to-br from-[#00C2FF] to-[#6536FF]' 
                        : 'bg-[#2C2C2E] text-[#00C2FF]'
                    }`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-[#F8F9FA]">{plan.name}</h3>
                    <p className="text-[#B1B1B3] mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-[#F8F9FA]">{plan.price}</span>
                      <span className="text-[#B1B1B3] ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-[#00C2FF] mr-3 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-[#B1B1B3] mr-3 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-[#F8F9FA]' : 'text-[#B1B1B3]'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-150 ${
                    plan.popular
                      ? 'bg-[#00C2FF] hover:bg-[#00A8E6] text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(0,194,255,0.3)]'
                      : 'bg-[#2C2C2E] hover:bg-[#3A3A3C] text-[#F8F9FA] border border-[#3A3A3C] hover:border-[#00C2FF]/50'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Section */}
        <section className="py-20 px-6 bg-[#1A1A1C]">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-[#2C2C2E] to-[#1A1A1C] rounded-3xl p-12 border border-[#3A3A3C]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-gradient-to-br from-[#00C2FF] to-[#6536FF] rounded-xl p-3 w-fit mb-6">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold mb-6 text-[#F8F9FA]">
                    Need a Custom Solution?
                  </h2>
                  <p className="text-xl text-[#B1B1B3] mb-8 leading-relaxed">
                    For large law firms and enterprises, we offer custom pricing and tailored solutions to meet your specific needs.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Custom integrations with your existing systems",
                      "Dedicated account management and support",
                      "Advanced security and compliance features",
                      "On-premises deployment options",
                      "Volume discounts for multiple users"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center text-[#B1B1B3]">
                        <Check className="h-5 w-5 text-[#00C2FF] mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-[#00C2FF] hover:bg-[#00A8E6] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-150 hover:scale-105">
                    Contact Sales Team
                  </button>
                </div>
                <div className="bg-[#0C0C0D] rounded-2xl p-8 border border-[#3A3A3C]">
                  <h3 className="text-2xl font-bold mb-6 text-[#F8F9FA]">Enterprise Benefits</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-[#00C2FF]/20 rounded-lg p-2 mr-4">
                        <Shield className="h-5 w-5 text-[#00C2FF]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#F8F9FA] mb-2">Advanced Security</h4>
                        <p className="text-[#B1B1B3] text-sm">SOC 2 compliance, SSO, and audit trails</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#00C2FF]/20 rounded-lg p-2 mr-4">
                        <Zap className="h-5 w-5 text-[#00C2FF]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#F8F9FA] mb-2">Priority Support</h4>
                        <p className="text-[#B1B1B3] text-sm">24/7 dedicated support with SLA guarantees</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#00C2FF]/20 rounded-lg p-2 mr-4">
                        <Users className="h-5 w-5 text-[#00C2FF]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#F8F9FA] mb-2">Team Management</h4>
                        <p className="text-[#B1B1B3] text-sm">Advanced user roles and permissions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-[#F8F9FA]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#1A1A1C] rounded-2xl p-6 border border-[#3A3A3C]">
                  <h3 className="text-xl font-semibold mb-4 text-[#F8F9FA]">{faq.question}</h3>
                  <p className="text-[#B1B1B3] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 bg-gradient-to-r from-[#1A1A1C] to-[#2C2C2E]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-[#F8F9FA]">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-[#B1B1B3] mb-8 leading-relaxed">
              Join thousands of legal professionals who trust NewLawAI to streamline their practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#00C2FF] hover:bg-[#00A8E6] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-150 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,194,255,0.3)]">
                Start Free Trial
              </button>
              <button className="bg-transparent border-2 border-[#00C2FF] text-[#00C2FF] hover:bg-[#00C2FF] hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-150">
                Talk to Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}