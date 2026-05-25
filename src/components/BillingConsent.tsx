import React, { useState } from 'react';
import { ArrowRightIcon, AlertCircleIcon, CheckCircleIcon } from 'lucide-react';
interface BillingConsentProps {
  estimatedSpend: number;
  minimumSpend: number;
  onComplete: () => void;
  onBack: () => void;
}
export function BillingConsent({
  estimatedSpend,
  minimumSpend,
  onComplete,
  onBack
}: BillingConsentProps) {
  const [consents, setConsents] = useState({
    minimumSpend: false,
    billingTerms: false,
    paymentAuthorization: false,
    receivingFees: false
  });
  const [paymentMethod, setPaymentMethod] = useState<'ach' | 'card' | null>(
    null
  );
  const handleConsentChange = (key: keyof typeof consents) => {
    setConsents({
      ...consents,
      [key]: !consents[key]
    });
  };
  const allConsentsGiven =
  Object.values(consents).every((v) => v) && paymentMethod;
  const billingItems = [
  {
    category: 'Fulfillment Services',
    items: [
    {
      name: 'Pick & Pack',
      rate: '$3.50 - $5.00 per order',
      notes: 'Based on complexity'
    },
    {
      name: 'Storage',
      rate: '$0.75 per cubic foot/month',
      notes: 'First 30 days included'
    },
    {
      name: 'Receiving',
      rate: '$25 - $75 per pallet',
      notes: 'Depends on method'
    }]

  },
  {
    category: 'Minimum Commitments',
    items: [
    {
      name: 'Monthly Minimum',
      rate: `$${minimumSpend.toLocaleString()}`,
      notes: 'Billed if usage is lower'
    }]

  },
  {
    category: 'Additional Fees',
    items: [
    {
      name: 'Long-term storage',
      rate: '$15/cubic ft after 180 days',
      notes: 'Applies to slow-moving inventory'
    },
    {
      name: 'Returns processing',
      rate: '$2.50 per unit',
      notes: 'Inspection and restocking'
    },
    {
      name: 'Special handling',
      rate: 'Variable',
      notes: 'Oversized, fragile, or hazmat items'
    }]

  }];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-block bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            STEP 4 OF 4
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0C2340] mb-4">
            Review billing terms
          </h1>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Review your estimated costs and confirm billing authorization before
            activating your account.
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 border border-indigo-200 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm font-semibold text-[#6366F1] uppercase tracking-wide mb-1">
                Your Estimated Monthly Cost
              </p>
              <p className="text-5xl font-bold text-[#0C2340]">
                ${estimatedSpend.toLocaleString()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-[#6B7280] mb-1">Minimum Commitment</p>
              <p className="text-2xl font-bold text-[#0C2340]">
                ${minimumSpend.toLocaleString()}/mo
              </p>
            </div>
          </div>
          <p className="text-sm text-[#6B7280]">
            This estimate is based on your projected order volume and SKU count.
            Actual costs may vary based on usage.
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-[#0C2340]">Billing Summary</h2>

          {billingItems.map((section) =>
          <div
            key={section.category}
            className="border border-gray-200 rounded-lg overflow-hidden">
            
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <h3 className="font-semibold text-[#0C2340]">
                  {section.category}
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                {section.items.map((item, idx) =>
              <div
                key={idx}
                className="px-6 py-4 flex justify-between items-start">
                
                    <div className="flex-1">
                      <p className="font-medium text-[#0C2340]">{item.name}</p>
                      <p className="text-sm text-[#6B7280] mt-1">
                        {item.notes}
                      </p>
                    </div>
                    <p className="font-semibold text-[#0C2340] ml-4">
                      {item.rate}
                    </p>
                  </div>
              )}
              </div>
            </div>
          )}
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <div className="flex gap-3">
            <AlertCircleIcon className="w-6 h-6 text-yellow-600 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-[#0C2340] mb-2">
                Important: Receiving Requirements
              </h4>
              <ul className="text-sm text-[#6B7280] space-y-1">
                <li>
                  • All inbound shipments must have Flexport-compliant labels
                </li>
                <li>
                  • Carrier appointments must be scheduled 48 hours in advance
                </li>
                <li>
                  • Unlabeled or unscheduled shipments incur additional fees
                  ($50-$150)
                </li>
                <li>
                  • Floor-loaded containers require advance notice and may have
                  surcharges
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-bold text-[#0C2340]">Payment Method</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={() => setPaymentMethod('ach')}
              className={`p-6 rounded-lg border-2 text-left transition-all ${paymentMethod === 'ach' ? 'border-[#6366F1] bg-indigo-50' : 'border-gray-200 hover:border-gray-300'}`}>
              
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-[#0C2340]">
                  ACH / Bank Transfer
                </h4>
                {paymentMethod === 'ach' &&
                <CheckCircleIcon className="w-6 h-6 text-[#6366F1]" />
                }
              </div>
              <p className="text-sm text-[#6B7280]">
                Direct bank transfer (recommended for lower fees)
              </p>
            </button>
            <button
              onClick={() => setPaymentMethod('card')}
              className={`p-6 rounded-lg border-2 text-left transition-all ${paymentMethod === 'card' ? 'border-[#6366F1] bg-indigo-50' : 'border-gray-200 hover:border-gray-300'}`}>
              
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-[#0C2340]">Corporate Card</h4>
                {paymentMethod === 'card' &&
                <CheckCircleIcon className="w-6 h-6 text-[#6366F1]" />
                }
              </div>
              <p className="text-sm text-[#6B7280]">
                Credit or debit card (2.9% processing fee applies)
              </p>
            </button>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-bold text-[#0C2340]">
            Required Consents
          </h3>

          <label className="flex items-start gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <input
              type="checkbox"
              checked={consents.minimumSpend}
              onChange={() => handleConsentChange('minimumSpend')}
              className="mt-1 w-5 h-5 text-[#6366F1] rounded focus:ring-2 focus:ring-[#6366F1]" />
            
            <div className="flex-1">
              <p className="font-medium text-[#0C2340] mb-1">
                I understand and accept the ${minimumSpend.toLocaleString()}
                /month minimum spend requirement
              </p>
              <p className="text-sm text-[#6B7280]">
                If my monthly usage is below this amount, I will be billed for
                the minimum.
              </p>
            </div>
          </label>

          <label className="flex items-start gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <input
              type="checkbox"
              checked={consents.billingTerms}
              onChange={() => handleConsentChange('billingTerms')}
              className="mt-1 w-5 h-5 text-[#6366F1] rounded focus:ring-2 focus:ring-[#6366F1]" />
            
            <div className="flex-1">
              <p className="font-medium text-[#0C2340] mb-1">
                I agree to Flexport's billing terms and service agreement
              </p>
              <p className="text-sm text-[#6B7280]">
                <a href="#" className="text-[#6366F1] hover:underline">
                  View full terms
                </a>
              </p>
            </div>
          </label>

          <label className="flex items-start gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <input
              type="checkbox"
              checked={consents.paymentAuthorization}
              onChange={() => handleConsentChange('paymentAuthorization')}
              className="mt-1 w-5 h-5 text-[#6366F1] rounded focus:ring-2 focus:ring-[#6366F1]" />
            
            <div className="flex-1">
              <p className="font-medium text-[#0C2340] mb-1">
                I authorize Flexport to charge my selected payment method
              </p>
              <p className="text-sm text-[#6B7280]">
                For fulfillment services, storage, and applicable fees as
                outlined above.
              </p>
            </div>
          </label>

          <label className="flex items-start gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <input
              type="checkbox"
              checked={consents.receivingFees}
              onChange={() => handleConsentChange('receivingFees')}
              className="mt-1 w-5 h-5 text-[#6366F1] rounded focus:ring-2 focus:ring-[#6366F1]" />
            
            <div className="flex-1">
              <p className="font-medium text-[#0C2340] mb-1">
                I understand receiving requirements and associated fees
              </p>
              <p className="text-sm text-[#6B7280]">
                Including labeling, appointment scheduling, and handling
                surcharges for non-compliance.
              </p>
            </div>
          </label>
        </div>

        <div className="flex gap-4">
          <button
            onClick={onBack}
            className="px-6 py-3 border-2 border-gray-300 text-[#0C2340] rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            
            Back
          </button>
          <button
            onClick={onComplete}
            disabled={!allConsentsGiven}
            className="flex-1 bg-[#6366F1] text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#4F46E5] transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-indigo-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2">
            
            Activate Account
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>);

}