import React, { useState } from 'react';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  UploadIcon,
  AlertCircleIcon } from
'lucide-react';
interface MarketplaceIntegrationProps {
  selectedChannels: string[];
  onComplete: (connectedChannels: string[]) => void;
  onBack: () => void;
}
export function MarketplaceIntegration({
  selectedChannels,
  onComplete,
  onBack
}: MarketplaceIntegrationProps) {
  const [connectedChannels, setConnectedChannels] = useState<string[]>([]);
  const [uploadedCSV, setUploadedCSV] = useState(false);
  const handleConnect = (channel: string) => {
    // Simulate OAuth flow
    setConnectedChannels([...connectedChannels, channel]);
  };
  const handleSkip = () => {
    onComplete(connectedChannels);
  };
  const handleContinue = () => {
    onComplete(connectedChannels);
  };
  const channelLogos: Record<string, string> = {
    Shopify: '🛍️',
    Amazon: '📦',
    'Walmart Marketplace': '🏪',
    'TikTok Shop': '🎵',
    WooCommerce: '🛒',
    BigCommerce: '💼'
  };
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-block bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            STEP 3 OF 4
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0C2340] mb-4">
            Connect your sales channels
          </h1>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Connecting your channels improves estimate accuracy and enables
            automatic order syncing once you're activated.
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {selectedChannels.map((channel) => {
            const isConnected = connectedChannels.includes(channel);
            return (
              <div
                key={channel}
                className={`p-6 rounded-xl border-2 transition-all ${isConnected ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">
                      {channelLogos[channel] || '🔗'}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#0C2340] mb-1">
                        {channel}
                      </h3>
                      {isConnected ?
                      <p className="text-sm text-green-600 font-medium flex items-center gap-1">
                          <CheckCircleIcon className="w-4 h-4" />
                          Connected successfully
                        </p> :

                      <p className="text-sm text-[#6B7280]">
                          Securely connect via OAuth
                        </p>
                      }
                    </div>
                  </div>
                  {!isConnected &&
                  <button
                    onClick={() => handleConnect(channel)}
                    className="bg-[#6366F1] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#4F46E5] transition-all">
                    
                      Connect
                    </button>
                  }
                  {isConnected &&
                  <CheckCircleIcon className="w-8 h-8 text-green-600" />
                  }
                </div>
              </div>);

          })}
        </div>

        <div className="border-t-2 border-gray-200 pt-8 mb-8">
          <h3 className="text-lg font-semibold text-[#0C2340] mb-4">
            Alternative: Upload product data
          </h3>
          <p className="text-sm text-[#6B7280] mb-4">
            If you can't connect your channels right now, you can upload a CSV
            with your product catalog and order history.
          </p>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#6366F1] hover:bg-indigo-50 transition-all cursor-pointer">
            <UploadIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="font-semibold text-[#0C2340] mb-2">
              {uploadedCSV ?
              'product_data.csv uploaded' :
              'Click to upload CSV'}
            </p>
            <p className="text-sm text-[#6B7280]">
              Include SKU, dimensions, weight, and order volume
            </p>
            {!uploadedCSV &&
            <button
              onClick={() => setUploadedCSV(true)}
              className="mt-4 text-[#6366F1] font-semibold hover:underline">
              
                Download CSV template
              </button>
            }
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex gap-3">
            <AlertCircleIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-[#0C2340] mb-1">
                Why connect channels?
              </h4>
              <p className="text-sm text-[#6B7280]">
                Connected channels provide accurate product dimensions, order
                volumes, and SKU counts, which improve cost estimates and enable
                automatic order routing once you're activated. Your data is
                encrypted and never shared without permission.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={onBack}
            className="px-6 py-3 border-2 border-gray-300 text-[#0C2340] rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            
            Back
          </button>
          <button
            onClick={handleSkip}
            className="px-6 py-3 text-[#6B7280] font-semibold hover:text-[#0C2340] transition-colors">
            
            Skip for now
          </button>
          <button
            onClick={handleContinue}
            disabled={connectedChannels.length === 0 && !uploadedCSV}
            className="flex-1 bg-[#6366F1] text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#4F46E5] transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-indigo-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2">
            
            Continue
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>);

}