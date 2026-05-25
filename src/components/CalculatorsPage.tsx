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
export function CalculatorsPage() {
  const [activeCalculator, setActiveCalculator] =
    useState<CalculatorType>('fulfillment')
  const calculators = [
    {
      id: 'fulfillment' as CalculatorType,
      title: 'Fulfillment Cost Estimator',
      description: 'Estimate monthly fulfillment costs based on order volume',
      icon: PackageIcon,
      color: 'bg-blue-500',
    },
    {
      id: 'freight' as CalculatorType,
      title: 'Freight Quote Calculator',
      description: 'Get instant ocean and air freight quotes',
      icon: ShipIcon,
      color: 'bg-cyan-500',
    },
    {
      id: 'receiving' as CalculatorType,
      title: 'Receiving Cost Calculator',
      description: 'Calculate inbound receiving costs and compliance fees',
      icon: TruckIcon,
      color: 'bg-green-500',
    },
    {
      id: 'storage' as CalculatorType,
      title: 'Storage Cost Estimator',
      description: 'Estimate storage costs and long-term fees',
      icon: WarehouseIcon,
      color: 'bg-purple-500',
    },
    {
      id: 'returns' as CalculatorType,
      title: 'Returns Cost Calculator',
      description: 'Calculate returns processing and inspection costs',
      icon: RefreshCwIcon,
      color: 'bg-orange-500',
    },
    {
      id: 'tariff' as CalculatorType,
      title: 'Tariff Refund Calculator',
      description: 'Calculate potential IEEPA tariff refunds',
      icon: DollarSignIcon,
      color: 'bg-emerald-500',
    },
  ]
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-[#0C2340]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <span className="text-white text-2xl font-bold">flexport</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#"
                className="text-white/70 text-base font-medium hover:text-white transition-opacity"
              >
                Solutions
              </a>
              <a
                href="#"
                className="text-white text-base font-medium hover:opacity-80 transition-opacity"
              >
                Calculators
              </a>
              <a
                href="#"
                className="text-white/70 text-base font-medium hover:text-white transition-opacity"
              >
                Resources
              </a>
              <a
                href="#"
                className="text-white/70 text-base font-medium hover:text-white transition-opacity"
              >
                Company
              </a>
              <button className="text-white/70 text-base font-medium hover:text-white transition-opacity">
                Sign In
              </button>
              <button className="bg-[#6366F1] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4F46E5] transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-indigo-500/30">
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
              Cost Calculators
            </h1>
          </div>
          <p className="text-xl text-[#6B7280] max-w-3xl">
            Estimate your logistics costs before you commit. Get transparent
            pricing for fulfillment, receiving, storage, and returns.
          </p>
        </div>

        {/* Calculator Selection Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {calculators.map((calc) => (
            <button
              key={calc.id}
              onClick={() => setActiveCalculator(calc.id)}
              className={`p-6 rounded-xl border-2 text-left transition-all hover:shadow-lg ${activeCalculator === calc.id ? 'border-[#6366F1] bg-indigo-50 shadow-lg' : 'border-gray-200 bg-white hover:border-gray-300'}`}
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
