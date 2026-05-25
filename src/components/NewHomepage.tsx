import React from 'react';
import { ArrowRightIcon, CheckCircleIcon } from 'lucide-react';
interface NewHomepageProps {
  onGetStarted: () => void;
  onNavigateToCalculators?: () => void;
}
export function NewHomepage({
  onGetStarted,
  onNavigateToCalculators
}: NewHomepageProps) {
  const personas = [
  {
    title: 'Ecommerce & Omnichannel Brands',
    description:
    'Fulfillment, inventory management, and multi-channel order routing',
    icon: '🛍️',
    cta: 'Explore Fulfillment'
  },
  {
    title: 'Enterprise Supply Chain',
    description:
    'End-to-end visibility, procurement, and global logistics management',
    icon: '🏢',
    cta: 'Talk to Enterprise Team'
  },
  {
    title: 'Freight Shippers',
    description:
    'Ocean, air, and ground freight forwarding with real-time tracking',
    icon: '🚢',
    cta: 'Get Freight Quote'
  },
  {
    title: 'Customs Brokerage',
    description: 'Fast, compliant customs clearance for imports and exports',
    icon: '📋',
    cta: 'Start Customs Onboarding'
  },
  {
    title: 'Developers',
    description: 'APIs and integrations for logistics automation',
    icon: '⚙️',
    cta: 'View API Docs'
  },
  {
    title: 'Carriers & Partners',
    description: 'Join our network of logistics service providers',
    icon: '🤝',
    cta: 'Become a Partner'
  }];

  const benefits = [
  'AI-powered logistics optimization',
  'Real-time visibility across your supply chain',
  'Transparent pricing with no hidden fees',
  'Dedicated support team'];

  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Bar */}
      <div className="bg-[#475569] text-white text-sm font-medium py-3 px-6 text-center">
        <span>
          New: Transparent qualification and onboarding.{' '}
          <button
            onClick={onGetStarted}
            className="underline hover:no-underline font-semibold">
            
            Get started in minutes →
          </button>
        </span>
      </div>

      {/* Navigation */}
      <nav className="bg-[#0C2340] sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <span className="text-white text-2xl font-bold">flexport</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                Solutions
              </button>
              <button
                onClick={onNavigateToCalculators}
                className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                
                Calculators
              </button>
              <button className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                Resources
              </button>
              <button className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                Company
              </button>
              <button className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                Sign In
              </button>
              <button
                onClick={onGetStarted}
                className="bg-[#6366F1] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4F46E5] transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-indigo-500/30">
                
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-[#0C2340] py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <div className="max-w-3xl">
            <div className="inline-block bg-teal-500/20 text-teal-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              TRANSPARENT QUALIFICATION
            </div>
            <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6">
              Know if you qualify before you sign up
            </h1>
            <p className="text-white/90 text-xl leading-relaxed mb-8 max-w-2xl">
              Clear eligibility requirements, transparent pricing, and no
              surprises. Get qualified for freight, customs, or fulfillment in
              minutes.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={onGetStarted}
                className="bg-[#6366F1] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#4F46E5] transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-indigo-500/30 flex items-center gap-2">
                
                Start Qualification
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all">
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) =>
            <div key={idx} className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-1" />
                <p className="text-[#0C2340] font-medium">{benefit}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C2340] mb-4">
              Find your solution
            </h2>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
              Choose the path that fits your business. We'll guide you through
              qualification and setup.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personas.map((persona, idx) =>
            <div
              key={idx}
              className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#6366F1] hover:shadow-xl transition-all duration-200 group">
              
                <div className="text-5xl mb-4">{persona.icon}</div>
                <h3 className="text-2xl font-bold text-[#0C2340] mb-3">
                  {persona.title}
                </h3>
                <p className="text-[#6B7280] mb-6 leading-relaxed">
                  {persona.description}
                </p>
                <button
                onClick={onGetStarted}
                className="text-[#6366F1] font-semibold hover:underline flex items-center gap-2 group-hover:gap-3 transition-all">
                
                  {persona.cta}
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C2340] mb-4">
              How qualification works
            </h2>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
              A transparent process designed to set clear expectations before
              you commit.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
            {
              step: '1',
              title: 'Select your need',
              description:
              'Tell us whether you need freight, customs, fulfillment, or guidance'
            },
            {
              step: '2',
              title: 'Share your details',
              description:
              'Provide volume estimates, channels, and operational requirements'
            },
            {
              step: '3',
              title: 'Get qualified',
              description:
              'See if you meet minimums or request manual review'
            },
            {
              step: '4',
              title: 'Activate & connect',
              description:
              'Review billing terms, connect channels, and start shipping'
            }].
            map((item, idx) =>
            <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-[#6366F1] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#0C2340] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#6B7280]">{item.description}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0C2340]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            See if you qualify in just a few minutes. No account required to
            start.
          </p>
          <button
            onClick={onGetStarted}
            className="bg-[#6366F1] text-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-[#4F46E5] transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-indigo-500/30 inline-flex items-center gap-2">
            
            Start Qualification Now
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        </div>
      </section>
    </div>);

}