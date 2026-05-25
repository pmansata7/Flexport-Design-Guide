import React, { useState } from 'react';
import { AlertCircleIcon, ShipIcon } from 'lucide-react';
interface FreightEstimate {
  oceanCost: number;
  airCost: number;
  customsDuties: number;
  insuranceCost: number;
  totalOcean: number;
  totalAir: number;
  transitDays: {
    ocean: string;
    air: string;
  };
}
export function FreightCalculator() {
  const [input, setInput] = useState({
    origin: '',
    destination: '',
    weight: '',
    volume: '',
    commodityValue: '',
    hsCode: ''
  });
  const [result, setResult] = useState<FreightEstimate | null>(null);
  const calculateFreight = () => {
    const weight = parseFloat(input.weight) || 0;
    const volume = parseFloat(input.volume) || 0;
    const value = parseFloat(input.commodityValue) || 0;
    // Simplified freight calculation (would use actual rate tables in production)
    const oceanRatePerCBM = 150;
    const airRatePerKG = 4.5;
    const customsDutyRate = 0.05; // 5% of commodity value
    const insuranceRate = 0.01; // 1% of commodity value
    const oceanCost = volume * oceanRatePerCBM;
    const airCost = weight * airRatePerKG;
    const customsDuties = value * customsDutyRate;
    const insuranceCost = value * insuranceRate;
    setResult({
      oceanCost,
      airCost,
      customsDuties,
      insuranceCost,
      totalOcean: oceanCost + customsDuties + insuranceCost,
      totalAir: airCost + customsDuties + insuranceCost,
      transitDays: {
        ocean: '25-35 days',
        air: '3-7 days'
      }
    });
  };
  const origins = [
  'Shanghai, China',
  'Shenzhen, China',
  'Hong Kong',
  'Mumbai, India',
  'Ho Chi Minh City, Vietnam'];

  const destinations = [
  'Los Angeles, CA',
  'New York, NY',
  'Chicago, IL',
  'Houston, TX',
  'Seattle, WA'];

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#0C2340] mb-6">
        International Freight Quote Calculator
      </h2>
      <p className="text-sm text-[#6B7280] mb-6">
        Get instant estimates for ocean and air freight from major trade lanes.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Origin Port
          </label>
          <select
            value={input.origin}
            onChange={(e) =>
            setInput({
              ...input,
              origin: e.target.value
            })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none">
            
            <option value="">Select origin</option>
            {origins.map((port) =>
            <option key={port} value={port}>
                {port}
              </option>
            )}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Destination Port
          </label>
          <select
            value={input.destination}
            onChange={(e) =>
            setInput({
              ...input,
              destination: e.target.value
            })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none">
            
            <option value="">Select destination</option>
            {destinations.map((port) =>
            <option key={port} value={port}>
                {port}
              </option>
            )}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Weight (kg)
          </label>
          <input
            type="number"
            value={input.weight}
            onChange={(e) =>
            setInput({
              ...input,
              weight: e.target.value
            })
            }
            placeholder="e.g., 1000"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none" />
          
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Volume (CBM)
          </label>
          <input
            type="number"
            value={input.volume}
            onChange={(e) =>
            setInput({
              ...input,
              volume: e.target.value
            })
            }
            placeholder="e.g., 10"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none" />
          
          <p className="text-xs text-[#6B7280] mt-1">
            CBM = Cubic Meters (Length × Width × Height in meters)
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Commodity Value (USD)
          </label>
          <input
            type="number"
            value={input.commodityValue}
            onChange={(e) =>
            setInput({
              ...input,
              commodityValue: e.target.value
            })
            }
            placeholder="e.g., 50000"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none" />
          
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            HS Code (Optional)
          </label>
          <input
            type="text"
            value={input.hsCode}
            onChange={(e) =>
            setInput({
              ...input,
              hsCode: e.target.value
            })
            }
            placeholder="e.g., 8471.30"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none" />
          
          <p className="text-xs text-[#6B7280] mt-1">
            Harmonized System code for accurate duty calculation
          </p>
        </div>
      </div>

      <button
        onClick={calculateFreight}
        disabled={
        !input.origin ||
        !input.destination ||
        !input.weight ||
        !input.volume ||
        !input.commodityValue
        }
        className="bg-[#6366F1] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4F46E5] transition-all disabled:opacity-50 disabled:cursor-not-allowed">
        
        Get Freight Quote
      </button>

      {result &&
      <div className="mt-8 grid md:grid-cols-2 gap-6">
          {/* Ocean Freight */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <ShipIcon className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-bold text-[#0C2340]">Ocean Freight</h3>
                <p className="text-sm text-[#6B7280]">
                  {result.transitDays.ocean}
                </p>
              </div>
            </div>

            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Ocean freight</span>
                <span className="font-semibold text-[#0C2340]">
                  ${result.oceanCost.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Customs duties (est.)</span>
                <span className="font-semibold text-[#0C2340]">
                  ${result.customsDuties.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Insurance</span>
                <span className="font-semibold text-[#0C2340]">
                  ${result.insuranceCost.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-blue-200">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-[#0C2340]">
                  Total Estimate
                </span>
                <span className="text-2xl font-bold text-[#0C2340]">
                  ${result.totalOcean.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Air Freight */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">✈️</div>
              <div>
                <h3 className="font-bold text-[#0C2340]">Air Freight</h3>
                <p className="text-sm text-[#6B7280]">
                  {result.transitDays.air}
                </p>
              </div>
            </div>

            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Air freight</span>
                <span className="font-semibold text-[#0C2340]">
                  ${result.airCost.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Customs duties (est.)</span>
                <span className="font-semibold text-[#0C2340]">
                  ${result.customsDuties.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Insurance</span>
                <span className="font-semibold text-[#0C2340]">
                  ${result.insuranceCost.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-purple-200">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-[#0C2340]">
                  Total Estimate
                </span>
                <span className="text-2xl font-bold text-[#0C2340]">
                  ${result.totalAir.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      }

      {result &&
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex gap-3">
            <AlertCircleIcon className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-[#0C2340] font-semibold mb-1">
                Important Notes
              </p>
              <ul className="text-sm text-[#6B7280] space-y-1">
                <li>• Estimates are based on standard rates and may vary</li>
                <li>
                  • Customs duties depend on HS code and country of origin
                </li>
                <li>
                  • Additional fees may apply for hazmat, oversized, or special
                  handling
                </li>
                <li>• Contact sales for volume discounts and contract rates</li>
              </ul>
            </div>
          </div>
        </div>
      }
    </div>);

}