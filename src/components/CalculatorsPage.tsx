import React, { useState } from 'react'
import { ReceivingCostCalculator } from './ReceivingCostCalculator'
import { FreightCalculator } from './FreightCalculator'
import { TariffRefundCalculator } from './TariffRefundCalculator'
import {
  PackageIcon,
  TruckIcon,
  WarehouseIcon,
  RefreshCwIcon,
  CalculatorIcon,
  ShipIcon,
  DollarSignIcon,
  ChevronDownIcon,
  SearchIcon,
  CloudIcon,
  GlobeIcon,
  ClipboardCheckIcon,
  TrendingUpIcon,
} from 'lucide-react'
import {
  calculateFulfillmentEstimate,
  calculateStorageCost,
  calculateReturnsCost,
  FulfillmentEstimateInput,
} from '../utils/calculators'
type CalculatorType =
  | 'fulfillment'
  | 'receiving'
  | 'storage'
  | 'returns'
  | 'freight'
  | 'tariff'
interface CalculatorsPageProps {
  onNavigateToHome: () => void
  onGetStarted: () => void
  initialCalculator?: CalculatorType
}
export function CalculatorsPage({
  onNavigateToHome,
  onGetStarted,
  initialCalculator = 'fulfillment',
}: CalculatorsPageProps) {
  const [activeCalculator, setActiveCalculator] =
    useState<CalculatorType>(initialCalculator)
  const [whoWeServeDropdownOpen, setWhoWeServeDropdownOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false)
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false)
  const [mouseEnter, setMouseEnter] = useState<string | null>(null)
  const handleNavClick = (section: string) => {
    // Route to specific calculators based on section
    if (section === 'Freight Forwarding') {
      setActiveCalculator('freight')
      setServicesDropdownOpen(false)
    } else if (section === 'Ecommerce Fulfillment') {
      setActiveCalculator('fulfillment')
      setServicesDropdownOpen(false)
    } else {
      alert(`Navigating to ${section} (demo)`)
    }
  }
  const handleMouseEnter = (section: string) => {
    setMouseEnter(section)
  }
  const handleMouseLeave = (section: string) => {
    setMouseEnter(null)
  }
  const calculators = [
    // CALCULATORS
    {
      id: 'fulfillment' as CalculatorType,
      title: 'Fulfillment Cost Estimator',
      description: 'Estimate monthly fulfillment costs based on order volume',
      icon: PackageIcon,
      color: 'bg-blue-500',
      category: 'calculator',
    },
    {
      id: 'freight' as CalculatorType,
      title: 'Freight Quote Calculator',
      description: 'Get instant ocean and air freight quotes',
      icon: ShipIcon,
      color: 'bg-cyan-500',
      category: 'calculator',
    },
    {
      id: 'receiving' as CalculatorType,
      title: 'Receiving Cost Calculator',
      description: 'Calculate inbound receiving costs and compliance fees',
      icon: TruckIcon,
      color: 'bg-green-500',
      category: 'calculator',
    },
    {
      id: 'storage' as CalculatorType,
      title: 'Storage Cost Estimator',
      description: 'Estimate storage costs and long-term fees',
      icon: WarehouseIcon,
      color: 'bg-purple-500',
      category: 'calculator',
    },
    {
      id: 'returns' as CalculatorType,
      title: 'Returns Cost Calculator',
      description: 'Calculate returns processing and inspection costs',
      icon: RefreshCwIcon,
      color: 'bg-orange-500',
      category: 'calculator',
    },
    {
      id: 'tariff' as CalculatorType,
      title: 'Tariff Refund Calculator',
      description: 'Calculate potential IEEPA tariff refunds',
      icon: DollarSignIcon,
      color: 'bg-emerald-500',
      category: 'calculator',
    },
    // TOOLS
    {
      id: 'tariff-simulator' as any,
      title: 'Tariff Simulator',
      description: 'Simulate tariff scenarios and costs',
      icon: CalculatorIcon,
      color: 'bg-indigo-500',
      category: 'tool',
    },
    {
      id: 'rate-explorer' as any,
      title: 'Flexport Rate Explorer',
      description: 'Explore and compare shipping rates',
      icon: TrendingUpIcon,
      color: 'bg-blue-600',
      category: 'tool',
    },
    {
      id: 'hs-codes' as any,
      title: 'HS Codes',
      description: 'Look up harmonized system codes',
      icon: SearchIcon,
      color: 'bg-teal-500',
      category: 'tool',
    },
    {
      id: 'emissions' as any,
      title: 'Open Emissions Calculator',
      description: 'Calculate carbon emissions for shipments',
      icon: CloudIcon,
      color: 'bg-green-600',
      category: 'tool',
    },
    {
      id: 'atlas' as any,
      title: 'Flexport Atlas',
      description: 'Interactive global shipping map',
      icon: GlobeIcon,
      color: 'bg-purple-600',
      category: 'tool',
    },
    {
      id: 'broker-audit' as any,
      title: 'Audit Your Customs Broker',
      description: 'Evaluate your customs broker performance',
      icon: ClipboardCheckIcon,
      color: 'bg-amber-500',
      category: 'tool',
    },
  ]
  const calculatorItems = calculators.filter((c) => c.category === 'calculator')
  const toolItems = calculators.filter((c) => c.category === 'tool')
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-[#0C2340]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <div className="flex items-center justify-between h-20">
            <button onClick={onNavigateToHome} className="flex-shrink-0">
              <span className="text-white text-2xl font-bold">flexport</span>
            </button>
            <div className="hidden md:flex items-center gap-6">
              {/* Who We Serve Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('whoWeServe')}
                onMouseLeave={() => handleMouseLeave('whoWeServe')}
              >
                <button className="text-white/70 text-base font-medium hover:text-white transition-opacity flex items-center gap-1">
                  Who We Serve
                  <ChevronDownIcon className="w-4 h-4" />
                </button>

                {whoWeServeDropdownOpen && (
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
                        className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition-colors"
                      >
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
                        className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition-colors"
                      >
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
                        className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition-colors"
                      >
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
                            'Trade Compliance & Customs Specialists',
                          )
                        }
                        className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition-colors"
                      >
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
                        className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition-colors"
                      >
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
                )}
              </div>

              {/* Products Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={() => handleMouseLeave('services')}
              >
                <button className="text-white/70 text-base font-medium hover:text-white transition-opacity flex items-center gap-1">
                  Products
                  <ChevronDownIcon className="w-4 h-4" />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-[640px] bg-white rounded-lg shadow-xl border border-gray-200 py-6 z-50">
                    {/* CUSTOMS Section */}
                    <div className="px-6 mb-6">
                      <h3 className="text-xs font-bold text-[#0C2340] uppercase tracking-wider mb-4">
                        CUSTOMS
                      </h3>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                        <button
                          onClick={() => handleNavClick('Customs Brokerage')}
                          className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors"
                        >
                          <span className="text-2xl">🛃</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Customs Brokerage
                          </span>
                        </button>
                        <button
                          onClick={() => handleNavClick('Trade Advisory')}
                          className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors"
                        >
                          <span className="text-2xl">👥</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Trade Advisory
                          </span>
                        </button>
                        <button
                          onClick={() => {
                            setServicesDropdownOpen(false)
                            setActiveCalculator('tariff')
                          }}
                          className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors"
                        >
                          <span className="text-2xl">💵</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Tariff Simulator
                          </span>
                        </button>
                        <button
                          onClick={() => {
                            setServicesDropdownOpen(false)
                            setActiveCalculator('tariff')
                          }}
                          className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors"
                        >
                          <span className="text-2xl">🧾</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Tariff Refunds
                          </span>
                        </button>
                        <button
                          onClick={() => handleNavClick('Duty Drawback')}
                          className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors"
                        >
                          <span className="text-2xl">↩️</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Duty Drawback
                          </span>
                        </button>
                        <button
                          onClick={() => handleNavClick('Compliance Audit')}
                          className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors"
                        >
                          <span className="text-2xl">✅</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Compliance Audit
                          </span>
                        </button>
                        <button
                          onClick={() => handleNavClick('Classification')}
                          className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors"
                        >
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
                            setServicesDropdownOpen(false)
                            setActiveCalculator('freight')
                          }}
                          className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors"
                        >
                          <span className="text-2xl">🚢</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Ocean Freight
                          </span>
                        </button>
                        <button
                          onClick={() => {
                            setServicesDropdownOpen(false)
                            setActiveCalculator('freight')
                          }}
                          className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors"
                        >
                          <span className="text-2xl">✈️</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Air Freight
                          </span>
                        </button>
                        <button
                          onClick={() => handleNavClick('Trucking')}
                          className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors"
                        >
                          <span className="text-2xl">🚛</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Trucking
                          </span>
                        </button>
                        <button
                          onClick={() => handleNavClick('Order Management')}
                          className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors"
                        >
                          <span className="text-2xl">📊</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Order Management
                          </span>
                        </button>
                        <button
                          onClick={() => handleNavClick('Booking Management')}
                          className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors"
                        >
                          <span className="text-2xl">📋</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Booking Management
                          </span>
                        </button>
                        <button
                          onClick={() =>
                            handleNavClick("Buyer's Consolidation")
                          }
                          className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors"
                        >
                          <span className="text-2xl">📦</span>
                          <span className="font-medium text-sm text-[#0C2340]">
                            Buyer's Consolidation
                          </span>
                        </button>
                        <button
                          onClick={() => handleNavClick('Carbon Control')}
                          className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors"
                        >
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
                              setServicesDropdownOpen(false)
                              setActiveCalculator('fulfillment')
                            }}
                            className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors w-full"
                          >
                            <span className="text-2xl">🚚</span>
                            <span className="font-medium text-sm text-[#0C2340]">
                              eCommerce Fulfillment
                            </span>
                          </button>
                          <button
                            onClick={() => handleNavClick('B2B Fulfillment')}
                            className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors w-full"
                          >
                            <span className="text-2xl">🏪</span>
                            <span className="font-medium text-sm text-[#0C2340]">
                              B2B Fulfillment
                            </span>
                          </button>
                          <button
                            onClick={() => {
                              setServicesDropdownOpen(false)
                              setActiveCalculator('returns')
                            }}
                            className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors w-full"
                          >
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
                            className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors w-full"
                          >
                            <span className="text-2xl">💰</span>
                            <span className="font-medium text-sm text-[#0C2340]">
                              Trade Finance
                            </span>
                          </button>
                          <button
                            onClick={() => handleNavClick('Insurance')}
                            className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded transition-colors w-full"
                          >
                            <span className="text-2xl">☂️</span>
                            <span className="font-medium text-sm text-[#0C2340]">
                              Insurance
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={onNavigateToHome}
                className="text-white text-base font-medium hover:opacity-80 transition-opacity"
              >
                Tools & Calculators
              </button>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setResourcesDropdownOpen(true)}
                onMouseLeave={() => setResourcesDropdownOpen(false)}
              >
                <button className="text-white/70 text-base font-medium hover:text-white transition-opacity flex items-center gap-1">
                  Resources
                  <ChevronDownIcon className="w-4 h-4" />
                </button>

                {resourcesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-50">
                    {/* INSIGHTS Section */}
                    <div className="px-4 py-2">
                      <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-2">
                        INSIGHTS
                      </h3>
                      <div className="space-y-1">
                        <a
                          href="#"
                          className="flex items-center gap-3 px-2 py-2 text-[#0C2340] hover:bg-gray-50 rounded transition-colors"
                        >
                          <span className="text-2xl">🌍</span>
                          <span className="font-medium text-sm">
                            Global Logistics Update
                          </span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center gap-3 px-2 py-2 text-[#0C2340] hover:bg-gray-50 rounded transition-colors"
                        >
                          <span className="text-2xl">📰</span>
                          <span className="font-medium text-sm">Blog</span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center gap-3 px-2 py-2 text-[#0C2340] hover:bg-gray-50 rounded transition-colors"
                        >
                          <span className="text-2xl">🎥</span>
                          <span className="font-medium text-sm">Webinars</span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center gap-3 px-2 py-2 text-[#0C2340] hover:bg-gray-50 rounded transition-colors"
                        >
                          <span className="text-2xl">📚</span>
                          <span className="font-medium text-sm">E-Guides</span>
                        </a>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200 my-3"></div>

                    {/* RESOURCES Section */}
                    <div className="px-4 py-2">
                      <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-2">
                        RESOURCES
                      </h3>
                      <div className="space-y-1">
                        <a
                          href="#"
                          className="flex items-center gap-3 px-2 py-2 text-[#0C2340] hover:bg-gray-50 rounded transition-colors"
                        >
                          <span className="text-2xl">⭐</span>
                          <span className="font-medium text-sm">Customers</span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center gap-3 px-2 py-2 text-[#0C2340] hover:bg-gray-50 rounded transition-colors"
                        >
                          <span className="text-2xl">🎯</span>
                          <span className="font-medium text-sm">
                            RFP 2026 Hub
                          </span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center gap-3 px-2 py-2 text-[#0C2340] hover:bg-gray-50 rounded transition-colors"
                        >
                          <span className="text-2xl">❓</span>
                          <span className="font-medium text-sm">
                            Fulfillment Help Center
                          </span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center gap-3 px-2 py-2 text-[#0C2340] hover:bg-gray-50 rounded transition-colors"
                        >
                          <span className="text-2xl">▶️</span>
                          <span className="font-medium text-sm">
                            Video Tutorials
                          </span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center gap-3 px-2 py-2 text-[#0C2340] hover:bg-gray-50 rounded transition-colors"
                        >
                          <span className="text-2xl">📖</span>
                          <span className="font-medium text-sm">Glossary</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Company Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCompanyDropdownOpen(true)}
                onMouseLeave={() => setCompanyDropdownOpen(false)}
              >
                <button className="text-white/70 text-base font-medium hover:text-white transition-opacity flex items-center gap-1">
                  Company
                  <ChevronDownIcon className="w-4 h-4" />
                </button>

                {companyDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <a
                      href="#"
                      className="block px-4 py-3 text-[#0C2340] hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-semibold text-sm">About Us</div>
                      <div className="text-xs text-[#6B7280] mt-0.5">
                        Our mission and values
                      </div>
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-3 text-[#0C2340] hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-semibold text-sm">Careers</div>
                      <div className="text-xs text-[#6B7280] mt-0.5">
                        Join our team
                      </div>
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-3 text-[#0C2340] hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-semibold text-sm">
                        Technology & Product
                      </div>
                      <div className="text-xs text-[#6B7280] mt-0.5">
                        Latest releases and innovations
                      </div>
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-3 text-[#0C2340] hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-semibold text-sm">Newsroom</div>
                      <div className="text-xs text-[#6B7280] mt-0.5">
                        Press and announcements
                      </div>
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-3 text-[#0C2340] hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-semibold text-sm">Contact</div>
                      <div className="text-xs text-[#6B7280] mt-0.5">
                        Get in touch
                      </div>
                    </a>
                  </div>
                )}
              </div>

              <button
                onClick={() => alert('Sign In (demo)')}
                className="text-white/70 text-base font-medium hover:text-white transition-opacity"
              >
                Sign In
              </button>
              <button
                onClick={onGetStarted}
                className="bg-[#6366F1] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4F46E5] transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-indigo-500/30"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-20 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <CalculatorIcon className="w-10 h-10 text-[#6366F1]" />
            <h1 className="text-4xl font-bold text-[#0C2340]">
              Tools & Calculators
            </h1>
          </div>
          <p className="text-xl text-[#6B7280] max-w-3xl">
            Estimate your logistics costs and explore shipping tools before you
            commit. Get transparent pricing and insights.
          </p>
        </div>

        {/* TOOLS Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0C2340] mb-6">TOOLS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolItems.map((tool) => (
              <button
                key={tool.id}
                onClick={() =>
                  tool.category === 'tool'
                    ? alert(`Opening ${tool.title} (coming soon)`)
                    : setActiveCalculator(tool.id)
                }
                className={`p-6 rounded-xl border-2 text-left transition-all hover:shadow-lg ${
                  activeCalculator === tool.id
                    ? 'border-[#6366F1] bg-indigo-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div
                  className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0C2340] mb-2">
                  {tool.title}
                </h3>
                <p className="text-sm text-[#6B7280]">{tool.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* CALCULATORS Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0C2340] mb-6">
            CALCULATORS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calculatorItems.map((calc) => (
              <button
                key={calc.id}
                onClick={() => setActiveCalculator(calc.id)}
                className={`p-6 rounded-xl border-2 text-left transition-all hover:shadow-lg ${
                  activeCalculator === calc.id
                    ? 'border-[#6366F1] bg-indigo-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div
                  className={`w-12 h-12 ${calc.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <calc.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0C2340] mb-2">
                  {calc.title}
                </h3>
                <p className="text-sm text-[#6B7280]">{calc.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Active Calculator */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          {activeCalculator === 'fulfillment' && <FulfillmentCalculator />}
          {activeCalculator === 'freight' && <FreightCalculator />}
          {activeCalculator === 'receiving' && <ReceivingCostCalculator />}
          {activeCalculator === 'storage' && <StorageCalculator />}
          {activeCalculator === 'returns' && <ReturnsCalculator />}
          {activeCalculator === 'tariff' && <TariffRefundCalculator />}
        </div>

        {/* Info Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-bold text-[#0C2340] mb-2">
              Transparent Pricing
            </h3>
            <p className="text-sm text-[#6B7280]">
              All rates are clearly displayed. No hidden fees or surprise
              charges.
            </p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-bold text-[#0C2340] mb-2">Volume Discounts</h3>
            <p className="text-sm text-[#6B7280]">
              Higher volumes qualify for better rates. Talk to sales for custom
              pricing.
            </p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-bold text-[#0C2340] mb-2">No Commitment</h3>
            <p className="text-sm text-[#6B7280]">
              Use these calculators to estimate costs before signing up. No
              account required.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
// Fulfillment Calculator Component
function FulfillmentCalculator() {
  const [input, setInput] = useState({
    dailyOrders: '',
    skuCount: '',
    storageNeeds: 'medium' as 'small' | 'medium' | 'large' | 'enterprise',
    channels: [] as string[],
    inboundMethod: '',
  })
  const [result, setResult] = useState<any>(null)
  const handleCalculate = () => {
    const estimateInput: FulfillmentEstimateInput = {
      dailyOrders: parseInt(input.dailyOrders) || 0,
      skuCount: parseInt(input.skuCount) || 0,
      storageNeeds: input.storageNeeds,
      channels: input.channels,
      inboundMethod: input.inboundMethod,
      averageItemsPerOrder: 1.5,
    }
    const estimate = calculateFulfillmentEstimate(estimateInput)
    setResult(estimate)
  }
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#0C2340] mb-6">
        Fulfillment Cost Estimator
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Average Daily Orders
          </label>
          <input
            type="number"
            value={input.dailyOrders}
            onChange={(e) =>
              setInput({
                ...input,
                dailyOrders: e.target.value,
              })
            }
            placeholder="e.g., 50"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Active SKUs
          </label>
          <input
            type="number"
            value={input.skuCount}
            onChange={(e) =>
              setInput({
                ...input,
                skuCount: e.target.value,
              })
            }
            placeholder="e.g., 100"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Storage Needs
          </label>
          <select
            value={input.storageNeeds}
            onChange={(e) =>
              setInput({
                ...input,
                storageNeeds: e.target.value as any,
              })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none"
          >
            <option value="small">Small (1-5 pallets)</option>
            <option value="medium">Medium (6-20 pallets)</option>
            <option value="large">Large (21-50 pallets)</option>
            <option value="enterprise">Enterprise (50+ pallets)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Inbound Method
          </label>
          <select
            value={input.inboundMethod}
            onChange={(e) =>
              setInput({
                ...input,
                inboundMethod: e.target.value,
              })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none"
          >
            <option value="">Select method</option>
            <option value="Palletized (standard)">Palletized (standard)</option>
            <option value="Floor loaded">Floor loaded</option>
            <option value="Containerized">Containerized</option>
            <option value="Parcel/small shipments">
              Parcel/small shipments
            </option>
          </select>
        </div>
      </div>

      <button
        onClick={handleCalculate}
        disabled={!input.dailyOrders || !input.skuCount}
        className="bg-[#6366F1] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4F46E5] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Calculate Estimate
      </button>

      {result && (
        <div className="mt-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6 border border-indigo-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm font-semibold text-[#6366F1] uppercase tracking-wide mb-1">
                Estimated Monthly Cost
              </p>
              <p className="text-4xl font-bold text-[#0C2340]">
                ${result.estimatedMonthlySpend.toLocaleString()}
              </p>
            </div>
            <div
              className={`px-4 py-2 rounded-full text-sm font-semibold ${result.confidence === 'high' ? 'bg-green-100 text-green-700' : result.confidence === 'medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-orange-100 text-orange-700'}`}
            >
              {result.confidence.toUpperCase()} CONFIDENCE
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-[#6B7280] mb-1">Pick & Pack</p>
              <p className="text-2xl font-bold text-[#0C2340]">
                ${result.breakdown.pickAndPack.toLocaleString()}
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-[#6B7280] mb-1">Storage</p>
              <p className="text-2xl font-bold text-[#0C2340]">
                ${result.breakdown.storage.toLocaleString()}
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-[#6B7280] mb-1">Receiving</p>
              <p className="text-2xl font-bold text-[#0C2340]">
                ${result.breakdown.receiving.toLocaleString()}
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-[#6B7280] mb-1">Additional</p>
              <p className="text-2xl font-bold text-[#0C2340]">
                ${result.breakdown.additional.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="border-t border-indigo-200 pt-4">
            <p className="text-sm font-semibold text-[#0C2340] mb-2">
              Assumptions:
            </p>
            <ul className="text-sm text-[#6B7280] space-y-1">
              {result.assumptions.map((assumption: string, idx: number) => (
                <li key={idx}>• {assumption}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
// Storage Calculator Component
function StorageCalculator() {
  const [input, setInput] = useState({
    cubicFeet: '',
    daysInStorage: '',
  })
  const [result, setResult] = useState<any>(null)
  const handleCalculate = () => {
    const estimate = calculateStorageCost({
      cubicFeet: parseInt(input.cubicFeet) || 0,
      daysInStorage: parseInt(input.daysInStorage) || 0,
    })
    setResult(estimate)
  }
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#0C2340] mb-6">
        Storage Cost Estimator
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Storage Volume (cubic feet)
          </label>
          <input
            type="number"
            value={input.cubicFeet}
            onChange={(e) =>
              setInput({
                ...input,
                cubicFeet: e.target.value,
              })
            }
            placeholder="e.g., 200"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Days in Storage
          </label>
          <input
            type="number"
            value={input.daysInStorage}
            onChange={(e) =>
              setInput({
                ...input,
                daysInStorage: e.target.value,
              })
            }
            placeholder="e.g., 90"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none"
          />
        </div>
      </div>

      <button
        onClick={handleCalculate}
        disabled={!input.cubicFeet || !input.daysInStorage}
        className="bg-[#6366F1] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4F46E5] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Calculate Storage Cost
      </button>

      {result && (
        <div className="mt-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
              Total Storage Cost
            </span>
            <span className="text-3xl font-bold text-[#0C2340]">
              ${result.totalCost.toFixed(2)}
            </span>
          </div>

          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Monthly storage</span>
              <span className="font-semibold text-[#0C2340]">
                ${result.monthlyCost.toFixed(2)}
              </span>
            </div>
            {result.longTermSurcharge > 0 && (
              <div className="flex justify-between text-orange-600">
                <span>Long-term surcharge</span>
                <span className="font-semibold">
                  +${result.longTermSurcharge.toFixed(2)}
                </span>
              </div>
            )}
          </div>

          {result.warning && (
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-[#0C2340]">⚠️ {result.warning}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
// Returns Calculator Component
function ReturnsCalculator() {
  const [input, setInput] = useState({
    monthlyReturns: '',
    requiresInspection: false,
  })
  const [result, setResult] = useState<any>(null)
  const handleCalculate = () => {
    const estimate = calculateReturnsCost({
      monthlyReturns: parseInt(input.monthlyReturns) || 0,
      requiresInspection: input.requiresInspection,
    })
    setResult(estimate)
  }
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#0C2340] mb-6">
        Returns Cost Calculator
      </h2>

      <div className="space-y-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Monthly Returns Volume
          </label>
          <input
            type="number"
            value={input.monthlyReturns}
            onChange={(e) =>
              setInput({
                ...input,
                monthlyReturns: e.target.value,
              })
            }
            placeholder="e.g., 50"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none"
          />
        </div>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={input.requiresInspection}
            onChange={(e) =>
              setInput({
                ...input,
                requiresInspection: e.target.checked,
              })
            }
            className="w-5 h-5 text-[#6366F1] rounded focus:ring-2 focus:ring-[#6366F1]"
          />
          <span className="text-sm text-[#0C2340]">
            Returns require inspection and quality check
          </span>
        </label>
      </div>

      <button
        onClick={handleCalculate}
        disabled={!input.monthlyReturns}
        className="bg-[#6366F1] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4F46E5] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Calculate Returns Cost
      </button>

      {result && (
        <div className="mt-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">
              Total Returns Cost
            </span>
            <span className="text-3xl font-bold text-[#0C2340]">
              ${result.totalCost.toFixed(2)}
            </span>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Processing</span>
              <span className="font-semibold text-[#0C2340]">
                ${result.processingCost.toFixed(2)}
              </span>
            </div>
            {result.inspectionCost > 0 && (
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Inspection</span>
                <span className="font-semibold text-[#0C2340]">
                  ${result.inspectionCost.toFixed(2)}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
// Freight Calculator Component
function FreightCalculator() {
  const [input, setInput] = useState({
    weight: '',
    volume: '',
    origin: '',
    destination: '',
    freightType: 'ocean' as 'ocean' | 'air',
  })
  const [result, setResult] = useState<any>(null)
  const handleCalculate = () => {
    const estimate = calculateFreightCost({
      weight: parseInt(input.weight) || 0,
      volume: parseInt(input.volume) || 0,
      origin: input.origin,
      destination: input.destination,
      freightType: input.freightType,
    })
    setResult(estimate)
  }
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#0C2340] mb-6">
        Freight Quote Calculator
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Weight (lbs)
          </label>
          <input
            type="number"
            value={input.weight}
            onChange={(e) =>
              setInput({
                ...input,
                weight: e.target.value,
              })
            }
            placeholder="e.g., 5000"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Volume (ft³)
          </label>
          <input
            type="number"
            value={input.volume}
            onChange={(e) =>
              setInput({
                ...input,
                volume: e.target.value,
              })
            }
            placeholder="e.g., 100"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Origin
          </label>
          <input
            type="text"
            value={input.origin}
            onChange={(e) =>
              setInput({
                ...input,
                origin: e.target.value,
              })
            }
            placeholder="e.g., New York"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Destination
          </label>
          <input
            type="text"
            value={input.destination}
            onChange={(e) =>
              setInput({
                ...input,
                destination: e.target.value,
              })
            }
            placeholder="e.g., Los Angeles"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Freight Type
          </label>
          <select
            value={input.freightType}
            onChange={(e) =>
              setInput({
                ...input,
                freightType: e.target.value as any,
              })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none"
          >
            <option value="ocean">Ocean Freight</option>
            <option value="air">Air Freight</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleCalculate}
        disabled={
          !input.weight || !input.volume || !input.origin || !input.destination
        }
        className="bg-[#6366F1] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4F46E5] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Get Instant Quote
      </button>

      {result && (
        <div className="mt-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-6 border border-cyan-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wide">
              Estimated Freight Cost
            </span>
            <span className="text-3xl font-bold text-[#0C2340]">
              ${result.totalCost.toFixed(2)}
            </span>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Base Rate</span>
              <span className="font-semibold text-[#0C2340]">
                ${result.baseRate.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Surcharge</span>
              <span className="font-semibold text-[#0C2340]">
                ${result.surcharge.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Total</span>
              <span className="font-semibold text-[#0C2340]">
                ${result.totalCost.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
// Tariff Refund Calculator Component
function TariffRefundCalculator() {
  const [input, setInput] = useState({
    monthlyReturns: '',
    tariffRate: '',
  })
  const [result, setResult] = useState<any>(null)
  const handleCalculate = () => {
    const estimate = calculateTariffRefund({
      monthlyReturns: parseInt(input.monthlyReturns) || 0,
      tariffRate: parseFloat(input.tariffRate) || 0,
    })
    setResult(estimate)
  }
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#0C2340] mb-6">
        Tariff Refund Calculator
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Monthly Returns Volume
          </label>
          <input
            type="number"
            value={input.monthlyReturns}
            onChange={(e) =>
              setInput({
                ...input,
                monthlyReturns: e.target.value,
              })
            }
            placeholder="e.g., 50"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Tariff Rate (%)
          </label>
          <input
            type="number"
            value={input.tariffRate}
            onChange={(e) =>
              setInput({
                ...input,
                tariffRate: e.target.value,
              })
            }
            placeholder="e.g., 1.5"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none"
          />
        </div>
      </div>

      <button
        onClick={handleCalculate}
        disabled={!input.monthlyReturns || !input.tariffRate}
        className="bg-[#6366F1] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4F46E5] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Calculate Refund
      </button>

      {result && (
        <div className="mt-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-6 border border-emerald-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
              Potential Refund
            </span>
            <span className="text-3xl font-bold text-[#0C2340]">
              ${result.refundAmount.toFixed(2)}
            </span>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Monthly Returns</span>
              <span className="font-semibold text-[#0C2340]">
                {result.monthlyReturns} units
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Tariff Rate</span>
              <span className="font-semibold text-[#0C2340]">
                {result.tariffRate}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Refund Amount</span>
              <span className="font-semibold text-[#0C2340]">
                ${result.refundAmount.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
