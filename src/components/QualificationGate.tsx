import React, { useState } from 'react';
import { ArrowRightIcon, CheckCircleIcon, AlertCircleIcon } from 'lucide-react';
type Intent = 'freight' | 'customs' | 'fulfillment' | 'unsure' | null;
interface QualificationGateProps {
  onComplete: (intent: Intent, data: any) => void;
}
export function QualificationGate({ onComplete }: QualificationGateProps) {
  const [selectedIntent, setSelectedIntent] = useState<Intent>(null);
  const intents = [
  {
    id: 'freight' as Intent,
    title: 'International Freight',
    description: 'Ship goods internationally via ocean, air, or ground',
    icon: '🚢'
  },
  {
    id: 'customs' as Intent,
    title: 'Customs Brokerage',
    description: 'Clear imports through customs efficiently',
    icon: '📋'
  },
  {
    id: 'fulfillment' as Intent,
    title: 'Ecommerce Fulfillment',
    description: 'Store, pack, and ship orders to your customers',
    icon: '📦'
  },
  {
    id: 'unsure' as Intent,
    title: 'Unsure / Need Guidance',
    description: 'Help me find the right solution',
    icon: '💡'
  }];

  const handleSelect = (intent: Intent) => {
    setSelectedIntent(intent);
  };
  const handleContinue = () => {
    if (selectedIntent) {
      onComplete(selectedIntent, {});
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-block bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            STEP 1 OF 4
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0C2340] mb-4">
            What brings you to Flexport?
          </h1>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Help us understand your needs so we can route you to the right
            solution and ensure you meet any volume or operational requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {intents.map((intent) =>
          <button
            key={intent.id}
            onClick={() => handleSelect(intent.id)}
            className={`p-6 rounded-xl border-2 text-left transition-all duration-200 hover:shadow-lg ${selectedIntent === intent.id ? 'border-[#6366F1] bg-indigo-50 shadow-lg' : 'border-gray-200 hover:border-gray-300'}`}>
            
              <div className="flex items-start gap-4">
                <div className="text-4xl">{intent.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-[#0C2340]">
                      {intent.title}
                    </h3>
                    {selectedIntent === intent.id &&
                  <CheckCircleIcon className="w-6 h-6 text-[#6366F1]" />
                  }
                  </div>
                  <p className="text-[#6B7280]">{intent.description}</p>
                </div>
              </div>
            </button>
          )}
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleContinue}
            disabled={!selectedIntent}
            className="bg-[#6366F1] text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#4F46E5] transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-indigo-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2">
            
            Continue
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex gap-3">
            <AlertCircleIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-[#0C2340] mb-1">
                Why we ask this
              </h4>
              <p className="text-sm text-[#6B7280]">
                Different Flexport services have different volume minimums,
                operational requirements, and compliance needs. By understanding
                your intent upfront, we can ensure you're routed to the right
                path and avoid surprises later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>);

}