import React, { useEffect, useState } from 'react';
import {
  ArrowRightIcon,
  AlertCircleIcon,
  TrendingUpIcon,
  CheckCircleIcon } from
'lucide-react';
import {
  calculateFulfillmentEstimate,
  FulfillmentEstimateInput } from
'../utils/calculators';
interface EstimatorData {
  dailyOrders: string;
  skuCount: string;
  storageNeeds: string;
  channels: string[];
  inboundMethod: string;
}
interface EstimatorResult {
  estimatedMonthlySpend: number;
  confidence: 'high' | 'medium' | 'low';
  meetsMinimum: boolean;
  minimumSpend: number;
}
interface FulfillmentEstimatorProps {
  onComplete: (data: EstimatorData, result: EstimatorResult) => void;
  onBack: () => void;
}
export function FulfillmentEstimator({
  onComplete,
  onBack
}: FulfillmentEstimatorProps) {
  const [formData, setFormData] = useState<EstimatorData>({
    dailyOrders: '',
    skuCount: '',
    storageNeeds: '',
    channels: [],
    inboundMethod: ''
  });
  const [result, setResult] = useState<EstimatorResult | null>(null);
  const [showResults, setShowResults] = useState(false);
  const channels = [
  'Shopify',
  'Amazon',
  'Walmart Marketplace',
  'TikTok Shop',
  'WooCommerce',
  'BigCommerce',
  'Other'];

  const inboundMethods = [
  'Palletized (standard)',
  'Floor loaded',
  'Containerized',
  'Parcel/small shipments'];

  const handleChannelToggle = (channel: string) => {
    setFormData((prev) => ({
      ...prev,
      channels: prev.channels.includes(channel) ?
      prev.channels.filter((c) => c !== channel) :
      [...prev.channels, channel]
    }));
  };
  const calculateEstimate = () => {
    const estimateInput: FulfillmentEstimateInput = {
      dailyOrders: parseInt(formData.dailyOrders) || 0,
      skuCount: parseInt(formData.skuCount) || 0,
      storageNeeds: formData.storageNeeds as any || 'medium',
      channels: formData.channels,
      inboundMethod: formData.inboundMethod,
      averageItemsPerOrder: 1.5,
      hasFragileItems: false // Could add this as a form field
    };
    return calculateFulfillmentEstimate(estimateInput);
  };
  const handleCalculate = () => {
    const estimate = calculateEstimate();
    setResult(estimate);
    setShowResults(true);
  };
  const handleContinue = () => {
    if (result) {
      onComplete(formData, result);
    }
  };
  const isFormValid =
  formData.dailyOrders && formData.skuCount && formData.storageNeeds;
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-block bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            STEP 2 OF 4
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0C2340] mb-4">
            Tell us about your fulfillment needs
          </h1>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            We'll use this information to estimate your monthly costs and ensure
            you meet our minimum volume requirements.
          </p>
        </div>

        {!showResults ?
        <div className="space-y-8">
            <div>
              <label className="block text-sm font-semibold text-[#0C2340] mb-2">
                Average daily orders <span className="text-red-500">*</span>
              </label>
              <input
              type="number"
              value={formData.dailyOrders}
              onChange={(e) =>
              setFormData({
                ...formData,
                dailyOrders: e.target.value
              })
              }
              placeholder="e.g., 50"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none" />
            
              <p className="text-sm text-[#6B7280] mt-1">
                How many orders do you typically ship per day?
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0C2340] mb-2">
                Active SKUs (Stock Keeping Units){' '}
                <span className="text-red-500">*</span>
              </label>
              <input
              type="number"
              value={formData.skuCount}
              onChange={(e) =>
              setFormData({
                ...formData,
                skuCount: e.target.value
              })
              }
              placeholder="e.g., 100"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none" />
            
              <p className="text-sm text-[#6B7280] mt-1">
                How many unique products do you sell?
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0C2340] mb-2">
                Storage needs <span className="text-red-500">*</span>
              </label>
              <select
              value={formData.storageNeeds}
              onChange={(e) =>
              setFormData({
                ...formData,
                storageNeeds: e.target.value
              })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none">
              
                <option value="">Select storage needs</option>
                <option value="small">Small (1-5 pallets)</option>
                <option value="medium">Medium (6-20 pallets)</option>
                <option value="large">Large (21-50 pallets)</option>
                <option value="enterprise">Enterprise (50+ pallets)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0C2340] mb-2">
                Sales channels
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {channels.map((channel) =>
              <button
                key={channel}
                onClick={() => handleChannelToggle(channel)}
                className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${formData.channels.includes(channel) ? 'border-[#6366F1] bg-indigo-50 text-[#6366F1]' : 'border-gray-200 text-[#6B7280] hover:border-gray-300'}`}>
                
                    {channel}
                  </button>
              )}
              </div>
              <p className="text-sm text-[#6B7280] mt-2">
                Select all platforms where you sell (helps improve estimate
                accuracy)
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0C2340] mb-2">
                Inbound shipping method
              </label>
              <select
              value={formData.inboundMethod}
              onChange={(e) =>
              setFormData({
                ...formData,
                inboundMethod: e.target.value
              })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none">
              
                <option value="">Select inbound method</option>
                {inboundMethods.map((method) =>
              <option key={method} value={method}>
                    {method}
                  </option>
              )}
              </select>
            </div>

            <div className="flex gap-4">
              <button
              onClick={onBack}
              className="px-6 py-3 border-2 border-gray-300 text-[#0C2340] rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              
                Back
              </button>
              <button
              onClick={handleCalculate}
              disabled={!isFormValid}
              className="flex-1 bg-[#6366F1] text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#4F46E5] transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-indigo-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2">
              
                Calculate Estimate
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div> :

        <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 border border-indigo-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm font-semibold text-[#6366F1] uppercase tracking-wide mb-1">
                    Estimated Monthly Spend
                  </p>
                  <p className="text-5xl font-bold text-[#0C2340]">
                    ${result?.estimatedMonthlySpend.toLocaleString()}
                  </p>
                </div>
                <div
                className={`px-4 py-2 rounded-full text-sm font-semibold ${result?.confidence === 'high' ? 'bg-green-100 text-green-700' : result?.confidence === 'medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-orange-100 text-orange-700'}`}>
                
                  {result?.confidence.toUpperCase()} CONFIDENCE
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-[#6B7280] mb-1">Daily Orders</p>
                  <p className="font-semibold text-[#0C2340]">
                    {formData.dailyOrders}
                  </p>
                </div>
                <div>
                  <p className="text-[#6B7280] mb-1">Active SKUs</p>
                  <p className="font-semibold text-[#0C2340]">
                    {formData.skuCount}
                  </p>
                </div>
                <div>
                  <p className="text-[#6B7280] mb-1">Channels</p>
                  <p className="font-semibold text-[#0C2340]">
                    {formData.channels.length || 'None selected'}
                  </p>
                </div>
              </div>
            </div>

            {result?.meetsMinimum ?
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#0C2340] mb-2">
                      You're qualified for Flexport Fulfillment!
                    </h3>
                    <p className="text-sm text-[#6B7280] mb-4">
                      Your estimated monthly spend of $
                      {result.estimatedMonthlySpend.toLocaleString()} meets our
                      minimum requirement of $
                      {result.minimumSpend.toLocaleString()}/month. You can
                      proceed to create your account and connect your sales
                      channels.
                    </p>
                    <button
                  onClick={handleContinue}
                  className="bg-[#6366F1] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#4F46E5] transition-all duration-200 flex items-center gap-2">
                  
                      Continue to Account Setup
                      <ArrowRightIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div> :

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex gap-3">
                  <AlertCircleIcon className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#0C2340] mb-2">
                      Below minimum volume threshold
                    </h3>
                    <p className="text-sm text-[#6B7280] mb-4">
                      Your estimated monthly spend of $
                      {result?.estimatedMonthlySpend.toLocaleString()} is below
                      our standard minimum of $
                      {result?.minimumSpend.toLocaleString()}/month. You have
                      three options:
                    </p>
                    <div className="space-y-3">
                      <button
                    onClick={handleContinue}
                    className="w-full bg-white border-2 border-[#6366F1] text-[#6366F1] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-indigo-50 transition-all text-left">
                    
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold mb-1">
                              Accept ${result?.minimumSpend.toLocaleString()}
                              /month minimum
                            </p>
                            <p className="text-xs text-[#6B7280]">
                              You'll be billed for the minimum even if your
                              actual usage is lower
                            </p>
                          </div>
                          <ArrowRightIcon className="w-5 h-5" />
                        </div>
                      </button>
                      <button className="w-full bg-white border-2 border-gray-300 text-[#0C2340] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-all text-left">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold mb-1">
                              Request manual review
                            </p>
                            <p className="text-xs text-[#6B7280]">
                              Share growth plans or strategic context for
                              consideration
                            </p>
                          </div>
                          <ArrowRightIcon className="w-5 h-5" />
                        </div>
                      </button>
                      <button className="w-full bg-white border-2 border-gray-300 text-[#0C2340] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-all text-left">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold mb-1">
                              View alternative solutions
                            </p>
                            <p className="text-xs text-[#6B7280]">
                              Explore partner fulfillment options or
                              software-only tools
                            </p>
                          </div>
                          <ArrowRightIcon className="w-5 h-5" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          }

            <button
            onClick={() => setShowResults(false)}
            className="text-[#6366F1] font-semibold hover:underline">
            
              ← Edit my information
            </button>
          </div>
        }
      </div>
    </div>);

}