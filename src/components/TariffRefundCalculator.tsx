import React, { useState } from 'react';
import { DollarSignIcon, AlertCircleIcon, CheckCircleIcon } from 'lucide-react';
interface RefundEstimate {
  eligibleAmount: number;
  refundPercentage: number;
  estimatedRefund: number;
  processingFee: number;
  netRefund: number;
  isEligible: boolean;
  reasons: string[];
}
export function TariffRefundCalculator() {
  const [input, setInput] = useState({
    importValue: '',
    tariffRate: '',
    importDate: '',
    productCategory: '',
    countryOfOrigin: ''
  });
  const [result, setResult] = useState<RefundEstimate | null>(null);
  const calculateRefund = () => {
    const importValue = parseFloat(input.importValue) || 0;
    const tariffRate = parseFloat(input.tariffRate) || 0;
    const importDate = new Date(input.importDate);
    const monthsAgo =
    (Date.now() - importDate.getTime()) / (1000 * 60 * 60 * 24 * 30);
    // Eligibility checks
    const isWithinTimeframe = monthsAgo <= 12; // Within 12 months
    const meetsMinimum = importValue >= 10000; // Minimum $10k import value
    const hasValidTariff = tariffRate > 0;
    const reasons: string[] = [];
    let isEligible = true;
    if (!isWithinTimeframe) {
      reasons.push('Import must be within the last 12 months');
      isEligible = false;
    }
    if (!meetsMinimum) {
      reasons.push('Import value must be at least $10,000');
      isEligible = false;
    }
    if (!hasValidTariff) {
      reasons.push('Valid tariff rate required');
      isEligible = false;
    }
    // Calculate refund
    const eligibleAmount = importValue * (tariffRate / 100);
    const refundPercentage = 75; // Assume 75% refund rate
    const estimatedRefund = eligibleAmount * (refundPercentage / 100);
    const processingFee = estimatedRefund * 0.15; // 15% processing fee
    const netRefund = estimatedRefund - processingFee;
    if (isEligible) {
      reasons.push('Qualifies for IEEPA tariff refund program');
      reasons.push('Estimated processing time: 45-60 days');
    }
    setResult({
      eligibleAmount,
      refundPercentage,
      estimatedRefund,
      processingFee,
      netRefund: Math.max(0, netRefund),
      isEligible,
      reasons
    });
  };
  const productCategories = [
  'Electronics',
  'Textiles & Apparel',
  'Machinery',
  'Automotive Parts',
  'Consumer Goods',
  'Industrial Equipment',
  'Other'];

  const countries = ['China', 'Vietnam', 'India', 'Mexico', 'Thailand', 'Other'];
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#0C2340] mb-6">
        IEEPA Tariff Refund Calculator
      </h2>
      <p className="text-sm text-[#6B7280] mb-6">
        Calculate potential refunds from IEEPA tariffs paid on eligible imports.
        See if you qualify in 5 minutes.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Total Import Value (USD)
          </label>
          <input
            type="number"
            value={input.importValue}
            onChange={(e) =>
            setInput({
              ...input,
              importValue: e.target.value
            })
            }
            placeholder="e.g., 50000"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none" />
          
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Tariff Rate Paid (%)
          </label>
          <input
            type="number"
            value={input.tariffRate}
            onChange={(e) =>
            setInput({
              ...input,
              tariffRate: e.target.value
            })
            }
            placeholder="e.g., 25"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none" />
          
          <p className="text-xs text-[#6B7280] mt-1">
            Check your customs documentation for the tariff rate
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Import Date
          </label>
          <input
            type="date"
            value={input.importDate}
            onChange={(e) =>
            setInput({
              ...input,
              importDate: e.target.value
            })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none" />
          
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Product Category
          </label>
          <select
            value={input.productCategory}
            onChange={(e) =>
            setInput({
              ...input,
              productCategory: e.target.value
            })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none">
            
            <option value="">Select category</option>
            {productCategories.map((cat) =>
            <option key={cat} value={cat}>
                {cat}
              </option>
            )}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Country of Origin
          </label>
          <select
            value={input.countryOfOrigin}
            onChange={(e) =>
            setInput({
              ...input,
              countryOfOrigin: e.target.value
            })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none">
            
            <option value="">Select country</option>
            {countries.map((country) =>
            <option key={country} value={country}>
                {country}
              </option>
            )}
          </select>
        </div>
      </div>

      <button
        onClick={calculateRefund}
        disabled={
        !input.importValue ||
        !input.tariffRate ||
        !input.importDate ||
        !input.productCategory ||
        !input.countryOfOrigin
        }
        className="bg-[#6366F1] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4F46E5] transition-all disabled:opacity-50 disabled:cursor-not-allowed">
        
        Calculate My Refund
      </button>

      {result &&
      <div className="mt-8">
          {result.isEligible ?
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 border border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircleIcon className="w-10 h-10 text-green-600" />
                <div>
                  <h3 className="text-2xl font-bold text-[#0C2340]">
                    You May Qualify for a Refund!
                  </h3>
                  <p className="text-sm text-[#6B7280]">
                    Based on your inputs, here's your estimated refund
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-[#6B7280] mb-1">Tariffs Paid</p>
                  <p className="text-2xl font-bold text-[#0C2340]">
                    ${result.eligibleAmount.toLocaleString()}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-[#6B7280] mb-1">
                    Estimated Refund
                  </p>
                  <p className="text-2xl font-bold text-green-600">
                    ${result.estimatedRefund.toLocaleString()}
                  </p>
                  <p className="text-xs text-[#6B7280] mt-1">
                    ({result.refundPercentage}% of tariffs paid)
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-[#6B7280] mb-1">Processing Fee</p>
                  <p className="text-2xl font-bold text-orange-600">
                    -${result.processingFee.toLocaleString()}
                  </p>
                  <p className="text-xs text-[#6B7280] mt-1">(15% of refund)</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <DollarSignIcon className="w-8 h-8 text-green-600" />
                    <span className="text-lg font-semibold text-[#0C2340]">
                      Your Net Refund
                    </span>
                  </div>
                  <span className="text-4xl font-bold text-green-600">
                    ${result.netRefund.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {result.reasons.map((reason, idx) =>
            <div key={idx} className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#0C2340]">{reason}</p>
                  </div>
            )}
              </div>

              <button className="w-full bg-[#6366F1] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#4F46E5] transition-all">
                Start Refund Application →
              </button>
            </div> :

        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-8 border border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircleIcon className="w-10 h-10 text-red-600" />
                <div>
                  <h3 className="text-2xl font-bold text-[#0C2340]">
                    Not Currently Eligible
                  </h3>
                  <p className="text-sm text-[#6B7280]">
                    Your import doesn't meet the eligibility criteria
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {result.reasons.map((reason, idx) =>
            <div key={idx} className="flex items-start gap-2">
                    <AlertCircleIcon className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#0C2340]">{reason}</p>
                  </div>
            )}
              </div>

              <button className="w-full border-2 border-[#6366F1] text-[#6366F1] px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-all">
                Talk to a Customs Expert →
              </button>
            </div>
        }
        </div>
      }

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex gap-3">
          <AlertCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-[#0C2340] font-semibold mb-1">
              About IEEPA Tariff Refunds
            </p>
            <p className="text-sm text-[#6B7280]">
              The International Emergency Economic Powers Act (IEEPA) allows
              eligible importers to recover tariffs paid on certain goods.
              Flexport's customs team can help you navigate the application
              process and maximize your refund.
            </p>
          </div>
        </div>
      </div>
    </div>);

}