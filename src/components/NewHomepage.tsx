import React, { useState } from 'react';
import { ArrowRightIcon, CheckCircleIcon, ChevronDownIcon } from 'lucide-react';
interface NewHomepageProps {
  onGetStarted: () => void;
  onNavigateToCalculators?: (
  calculatorType?:
  'fulfillment' |
  'receiving' |
  'storage' |
  'returns' |
  'freight' |
  'tariff')
  => void;
}
export function NewHomepage({
  onGetStarted,
  onNavigateToCalculators
}: NewHomepageProps) {
  const [whoWeServeDropdownOpen, setWhoWeServeDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  let closeTimeout: NodeJS.Timeout | null = null;
  const handleNavClick = (section: string) => {
    // Close all dropdowns
    setWhoWeServeDropdownOpen(false);
    setServicesDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setCompanyDropdownOpen(false);
    // Route to specific pages
    if (section === 'Freight Forwarding' && onNavigateToCalculators) {
      onNavigateToCalculators('freight');
    } else if (section === 'Ecommerce Fulfillment' && onNavigateToCalculators) {
      onNavigateToCalculators('fulfillment');
    } else {
      alert(`Navigating to ${section} (demo)`);
    }
  };
  const handleMouseLeave = (
  dropdown: 'whoWeServe' | 'services' | 'resources' | 'company') =>
  {
    closeTimeout = setTimeout(() => {
      if (dropdown === 'whoWeServe') setWhoWeServeDropdownOpen(false);
      if (dropdown === 'services') setServicesDropdownOpen(false);
      if (dropdown === 'resources') setResourcesDropdownOpen(false);
      if (dropdown === 'company') setCompanyDropdownOpen(false);
    }, 200);
  };
  const handleMouseEnter = (
  dropdown: 'whoWeServe' | 'services' | 'resources' | 'company') =>
  {
    if (closeTimeout) clearTimeout(closeTimeout);
    if (dropdown === 'whoWeServe') setWhoWeServeDropdownOpen(true);
    if (dropdown === 'services') setServicesDropdownOpen(true);
    if (dropdown === 'resources') setResourcesDropdownOpen(true);
    if (dropdown === 'company') setCompanyDropdownOpen(true);
  };
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
            <button
              onClick={() => window.location.reload()}
              className="flex-shrink-0">
              
              <span className="text-white text-2xl font-bold">flexport</span>
            </button>
            <div className="hidden md:flex items-center gap-6">
              {/* Who We Serve Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('whoWeServe')}
                onMouseLeave={() => handleMouseLeave('whoWeServe')}>
                
                <button className="text-white text-base font-medium hover:opacity-80 transition-opacity flex items-center gap-1">
                  Who We Serve
                  <ChevronDownIcon className="w-4 h-4" />
                </button>

                {whoWeServeDropdownOpen &&
                <div className="absolute top-full left-0 mt-2 w-[420px] bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                    <div className="px-4 mb-3">
                      <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                        SOLUTIONS BY ROLE
                      </h3>
                    </div>

                    <div className="space-y-1 px-2">
                      <button
                      onClick={() =>
                      handleNavClick('Supply Chain & Operations Leaders')
                      }
                      className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition-colors">
                      
                        <div className="flex items-start gap-3">
                          <span className="text-3xl">📊</span>
                          <div className="flex-1">
                            <h4 className="font-bold text-[#0C2340] mb-1">
                              Supply Chain & Operations Leaders
                            </h4>
                            <p className="text-sm text-[#6B7280]">
                              Take control of your entire supply chain from a
                              single pane of glass.
                            </p>
                          </div>
                        </div>
                      </button>

                      <button
                      onClick={() =>
                      handleNavClick('Logistics & Transportation Managers')
                      }
                      className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition-colors">
                      
                        <div className="flex items-start gap-3">
                          <span className="text-3xl">🚛</span>
                          <div className="flex-1">
                            <h4 className="font-bold text-[#0C2340] mb-1">
                              Logistics & Transportation Managers
                            </h4>
                            <p className="text-sm text-[#6B7280]">
                              Execute shipments flawlessly without the
                              spreadsheet chaos.
                            </p>
                          </div>
                        </div>
                      </button>

                      <button
                      onClick={() =>
                      handleNavClick('E-commerce & Brand Growth Leaders')
                      }
                      className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition-colors">
                      
                        <div className="flex items-start gap-3">
                          <span className="text-3xl">🛍️</span>
                          <div className="flex-1">
                            <h4 className="font-bold text-[#0C2340] mb-1">
                              E-commerce & Brand Growth Leaders
                            </h4>
                            <p className="text-sm text-[#6B7280]">
                              Scale your brand with fast, unified fulfillment
                              across every channel.
                            </p>
                          </div>
                        </div>
                      </button>

                      <button
                      onClick={() =>
                      handleNavClick(
                        'Trade Compliance & Customs Specialists'
                      )
                      }
                      className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition-colors">
                      
                        <div className="flex items-start gap-3">
                          <span className="text-3xl">🛃</span>
                          <div className="flex-1">
                            <h4 className="font-bold text-[#0C2340] mb-1">
                              Trade Compliance & Customs Specialists
                            </h4>
                            <p className="text-sm text-[#6B7280]">
                              De-risk your imports with AI-powered customs
                              clearance.
                            </p>
                          </div>
                        </div>
                      </button>

                      <button
                      onClick={() =>
                      handleNavClick('Finance & Treasury Executives')
                      }
                      className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition-colors">
                      
                        <div className="flex items-start gap-3">
                          <span className="text-3xl">💰</span>
                          <div className="flex-1">
                            <h4 className="font-bold text-[#0C2340] mb-1">
                              Finance & Treasury Executives
                            </h4>
                            <p className="text-sm text-[#6B7280]">
                              Unlock working capital trapped in your supply
                              chain.
                            </p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                }
              </div>

              {/* Products Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={() => handleMouseLeave('services')}>
                
                <button className="text-white text-base font-medium hover:opacity-80 transition-opacity flex items-center gap-1">
                  Products
                  <ChevronDownIcon className="w-4 h-4" />
                </button>

                {servicesDropdownOpen &&
                <div className="absolute top-full left-0 mt-2 w-[640px] bg-white rounded-lg shadow-xl border border-gray-200 py-6 z-50">
                    {/* CUSTOMS Section */}
                    <div className="px-6 mb-6">
                      <h3 className="text-xs font-bold text-[#0C2340] uppercase tracking-wider mb-4">
                        CUSTOMS
                      </h3>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                        <button
                        onClick={() => handleNavClick('Customs Brokerage')}
                        className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors">
                        
                          <span className="text-2xl">🛃</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Customs Brokerage
                          </span>
                        </button>
                        <button
                        onClick={() => handleNavClick('Trade Advisory')}
                        className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors">
                        
                          <span className="text-2xl">👥</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Trade Advisory
                          </span>
                        </button>
                        <button
                        onClick={() => {
                          setServicesDropdownOpen(false);
                          onNavigateToCalculators?.('tariff');
                        }}
                        className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors">
                        
                          <span className="text-2xl">💵</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Tariff Simulator
                          </span>
                        </button>
                        <button
                        onClick={() => {
                          setServicesDropdownOpen(false);
                          onNavigateToCalculators?.('tariff');
                        }}
                        className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors">
                        
                          <span className="text-2xl">🧾</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Tariff Refunds
                          </span>
                        </button>
                        <button
                        onClick={() => handleNavClick('Duty Drawback')}
                        className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors">
                        
                          <span className="text-2xl">↩️</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Duty Drawback
                          </span>
                        </button>
                        <button
                        onClick={() => handleNavClick('Compliance Audit')}
                        className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors">
                        
                          <span className="text-2xl">✅</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Compliance Audit
                          </span>
                        </button>
                        <button
                        onClick={() => handleNavClick('Classification')}
                        className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors">
                        
                          <span className="text-2xl">🏷️</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Classification
                          </span>
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 my-4"></div>

                    {/* FREIGHT FORWARDING CONTROL TOWER Section */}
                    <div className="px-6 mb-6">
                      <h3 className="text-xs font-bold text-[#0C2340] uppercase tracking-wider mb-4">
                        FREIGHT FORWARDING CONTROL TOWER
                      </h3>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                        <button
                        onClick={() => {
                          setServicesDropdownOpen(false);
                          onNavigateToCalculators?.('freight');
                        }}
                        className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors">
                        
                          <span className="text-2xl">🚢</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Ocean Freight
                          </span>
                        </button>
                        <button
                        onClick={() => {
                          setServicesDropdownOpen(false);
                          onNavigateToCalculators?.('freight');
                        }}
                        className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors">
                        
                          <span className="text-2xl">✈️</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Air Freight
                          </span>
                        </button>
                        <button
                        onClick={() => handleNavClick('Trucking')}
                        className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors">
                        
                          <span className="text-2xl">🚛</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Trucking
                          </span>
                        </button>
                        <button
                        onClick={() => handleNavClick('Order Management')}
                        className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors">
                        
                          <span className="text-2xl">📊</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Order Management
                          </span>
                        </button>
                        <button
                        onClick={() => handleNavClick('Booking Management')}
                        className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors">
                        
                          <span className="text-2xl">📋</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Booking Management
                          </span>
                        </button>
                        <button
                        onClick={() =>
                        handleNavClick("Buyer's Consolidation")
                        }
                        className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors">
                        
                          <span className="text-2xl">📦</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Buyer's Consolidation
                          </span>
                        </button>
                        <button
                        onClick={() => handleNavClick('Carbon Control')}
                        className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors">
                        
                          <span className="text-2xl">🌱</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Carbon Control
                          </span>
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 my-4"></div>

                    {/* FULFILLMENT and FINANCIAL SERVICES in 2 columns */}
                    <div className="px-6 grid grid-cols-2 gap-x-8">
                      {/* FULFILLMENT Section */}
                      <div>
                        <h3 className="text-xs font-bold text-[#0C2340] uppercase tracking-wider mb-4">
                          FULFILLMENT
                        </h3>
                        <div className="space-y-3">
                          <button
                          onClick={() => {
                            setServicesDropdownOpen(false);
                            onNavigateToCalculators?.('fulfillment');
                          }}
                          className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors w-full">
                          
                            <span className="text-2xl">🚚</span>
                            <span className="font-medium text-sm text-[#0C2340]">
                              eCommerce Fulfillment
                            </span>
                          </button>
                          <button
                          onClick={() => handleNavClick('B2B Fulfillment')}
                          className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors w-full">
                          
                            <span className="text-2xl">🏪</span>
                            <span className="font-medium text-sm text-[#0C2340]">
                              B2B Fulfillment
                            </span>
                          </button>
                          <button
                          onClick={() => {
                            setServicesDropdownOpen(false);
                            onNavigateToCalculators?.('returns');
                          }}
                          className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors w-full">
                          
                            <span className="text-2xl">🔄</span>
                            <span className="font-medium text-sm text-[#0C2340]">
                              Returns
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* FINANCIAL SERVICES Section */}
                      <div>
                        <h3 className="text-xs font-bold text-[#0C2340] uppercase tracking-wider mb-4">
                          FINANCIAL SERVICES
                        </h3>
                        <div className="space-y-3">
                          <button
                          onClick={() => handleNavClick('Trade Finance')}
                          className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors w-full">
                          
                            <span className="text-2xl">💰</span>
                            <span className="font-medium text-sm text-[#0C2340]">
                              Trade Finance
                            </span>
                          </button>
                          <button
                          onClick={() => handleNavClick('Insurance')}
                          className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors w-full">
                          
                            <span className="text-2xl">☂️</span>
                            <span className="font-medium text-sm text-[#0C2340]">
                              Insurance
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>

              <button
                onClick={() => onNavigateToCalculators?.()}
                className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                
                Tools & Calculators
              </button>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={() => handleMouseLeave('resources')}>
                
                <button className="text-white text-base font-medium hover:opacity-80 transition-opacity flex items-center gap-1">
                  Resources
                  <ChevronDownIcon className="w-4 h-4" />
                </button>

                {resourcesDropdownOpen &&
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-50">
                    <div className="px-4 py-2">
                      <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-2">
                        INSIGHTS
                      </h3>
                      <div className="space-y-1">
                        <button
                        onClick={() =>
                        handleNavClick('Global Logistics Update')
                        }
                        className="w-full flex items-center gap-3 px-2 py-2 text-[#0C2340] hover:bg-gray-50 rounded transition-colors">
                        
                          <span className="text-2xl">🌍</span>
                          <span className="font-medium text-sm">
                            Global Logistics Update
                          </span>
                        </button>
                        <button
                        onClick={() => handleNavClick('Blog')}
                        className="w-full flex items-center gap-3 px-2 py-2 text-[#0C2340] hover:bg-gray-50 rounded transition-colors">
                        
                          <span className="text-2xl">📰</span>
                          <span className="font-medium text-sm">Blog</span>
                        </button>
                        <button
                        onClick={() => handleNavClick('Webinars')}
                        className="w-full flex items-center gap-3 px-2 py-2 text-[#0C2340] hover:bg-gray-50 rounded transition-colors">
                        
                          <span className="text-2xl">🎥</span>
                          <span className="font-medium text-sm">Webinars</span>
                        </button>
                        <button
                        onClick={() => handleNavClick('E-Guides')}
                        className="w-full flex items-center gap-3 px-2 py-2 text-[#0C2340] hover:bg-gray-50 rounded transition-colors">
                        
                          <span className="text-2xl">📚</span>
                          <span className="font-medium text-sm">E-Guides</span>
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 my-3"></div>

                    <div className="px-4 py-2">
                      <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-2">
                        RESOURCES
                      </h3>
                      <div className="space-y-1">
                        <button
                        onClick={() => handleNavClick('Customers')}
                        className="w-full flex items-center gap-3 px-2 py-2 text-[#0C2340] hover:bg-gray-50 rounded transition-colors">
                        
                          <span className="text-2xl">⭐</span>
                          <span className="font-medium text-sm">Customers</span>
                        </button>
                        <button
                        onClick={() => {
                          setResourcesDropdownOpen(false);
                          onNavigateToCalculators?.('tariff');
                        }}
                        className="w-full flex items-center gap-3 px-2 py-2 text-[#0C2340] hover:bg-gray-50 rounded transition-colors">
                        
                          <span className="text-2xl">🎯</span>
                          <span className="font-medium text-sm">
                            RFP 2026 Hub
                          </span>
                        </button>
                        <button
                        onClick={() =>
                        handleNavClick('Fulfillment Help Center')
                        }
                        className="w-full flex items-center gap-3 px-2 py-2 text-[#0C2340] hover:bg-gray-50 rounded transition-colors">
                        
                          <span className="text-2xl">❓</span>
                          <span className="font-medium text-sm">
                            Fulfillment Help Center
                          </span>
                        </button>
                        <button
                        onClick={() => handleNavClick('Video Tutorials')}
                        className="w-full flex items-center gap-3 px-2 py-2 text-[#0C2340] hover:bg-gray-50 rounded transition-colors">
                        
                          <span className="text-2xl">▶️</span>
                          <span className="font-medium text-sm">
                            Video Tutorials
                          </span>
                        </button>
                        <button
                        onClick={() => handleNavClick('Glossary')}
                        className="w-full flex items-center gap-3 px-2 py-2 text-[#0C2340] hover:bg-gray-50 rounded transition-colors">
                        
                          <span className="text-2xl">📖</span>
                          <span className="font-medium text-sm">Glossary</span>
                        </button>
                      </div>
                    </div>
                  </div>
                }
              </div>

              {/* Company Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('company')}
                onMouseLeave={() => handleMouseLeave('company')}>
                
                <button className="text-white text-base font-medium hover:opacity-80 transition-opacity flex items-center gap-1">
                  Company
                  <ChevronDownIcon className="w-4 h-4" />
                </button>

                {companyDropdownOpen &&
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <button
                    onClick={() => handleNavClick('About Us')}
                    className="w-full text-left block px-4 py-3 text-[#0C2340] hover:bg-gray-50 transition-colors">
                    
                      <div className="font-semibold text-sm">About Us</div>
                      <div className="text-xs text-[#6B7280] mt-0.5">
                        Our mission and values
                      </div>
                    </button>
                    <button
                    onClick={() => handleNavClick('Careers')}
                    className="w-full text-left block px-4 py-3 text-[#0C2340] hover:bg-gray-50 transition-colors">
                    
                      <div className="font-semibold text-sm">Careers</div>
                      <div className="text-xs text-[#6B7280] mt-0.5">
                        Join our team
                      </div>
                    </button>
                    <button
                    onClick={() => handleNavClick('Technology & Product')}
                    className="w-full text-left block px-4 py-3 text-[#0C2340] hover:bg-gray-50 transition-colors">
                    
                      <div className="font-semibold text-sm">
                        Technology & Product
                      </div>
                      <div className="text-xs text-[#6B7280] mt-0.5">
                        Latest releases and innovations
                      </div>
                    </button>
                    <button
                    onClick={() => handleNavClick('Newsroom')}
                    className="w-full text-left block px-4 py-3 text-[#0C2340] hover:bg-gray-50 transition-colors">
                    
                      <div className="font-semibold text-sm">Newsroom</div>
                      <div className="text-xs text-[#6B7280] mt-0.5">
                        Press and announcements
                      </div>
                    </button>
                    <button
                    onClick={() => handleNavClick('Contact')}
                    className="w-full text-left block px-4 py-3 text-[#0C2340] hover:bg-gray-50 transition-colors">
                    
                      <div className="font-semibold text-sm">Contact</div>
                      <div className="text-xs text-[#6B7280] mt-0.5">
                        Get in touch
                      </div>
                    </button>
                  </div>
                }
              </div>

              <button
                onClick={() => alert('Sign In (demo)')}
                className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                
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