import React from 'react';
import {
  PackageIcon,
  TrendingUpIcon,
  AlertCircleIcon,
  CheckCircleIcon,
  ClockIcon } from
'lucide-react';
export function Dashboard() {
  const stats = [
  {
    label: 'Estimated Monthly Spend',
    value: '$3,450',
    change: '+12% vs estimate',
    icon: TrendingUpIcon,
    color: 'text-green-600'
  },
  {
    label: 'Orders This Month',
    value: '1,247',
    change: '42 orders/day avg',
    icon: PackageIcon,
    color: 'text-blue-600'
  },
  {
    label: 'Active SKUs',
    value: '156',
    change: '12 added this month',
    icon: CheckCircleIcon,
    color: 'text-indigo-600'
  },
  {
    label: 'Inbound Shipments',
    value: '3',
    change: '1 arriving today',
    icon: ClockIcon,
    color: 'text-orange-600'
  }];

  const recentCosts = [
  {
    date: 'Dec 15',
    category: 'Pick & Pack',
    amount: 487.5,
    orders: 98
  },
  {
    date: 'Dec 14',
    category: 'Storage',
    amount: 125.0,
    orders: null
  },
  {
    date: 'Dec 13',
    category: 'Pick & Pack',
    amount: 512.0,
    orders: 102
  },
  {
    date: 'Dec 12',
    category: 'Receiving',
    amount: 75.0,
    orders: null
  }];

  const connectedChannels = [
  {
    name: 'Shopify',
    status: 'active',
    orders: 892
  },
  {
    name: 'Amazon',
    status: 'active',
    orders: 355
  }];

  const alerts = [
  {
    type: 'warning',
    message:
    '45 units of SKU-1234 approaching long-term storage threshold (150 days)',
    action: 'Review inventory'
  },
  {
    type: 'info',
    message:
    'Inbound shipment #INB-5678 scheduled for delivery tomorrow at 2:00 PM',
    action: 'View details'
  }];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-[#0C2340]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <span className="text-white text-2xl font-bold">flexport</span>
            </div>
            <div className="flex items-center gap-6">
              <button className="text-white text-base font-medium hover:opacity-80 transition-opacity">
                Dashboard
              </button>
              <button className="text-white/70 text-base font-medium hover:text-white transition-opacity">
                Orders
              </button>
              <button className="text-white/70 text-base font-medium hover:text-white transition-opacity">
                Inventory
              </button>
              <button className="text-white/70 text-base font-medium hover:text-white transition-opacity">
                Inbound
              </button>
              <button className="text-white/70 text-base font-medium hover:text-white transition-opacity">
                Billing
              </button>
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                JD
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-20 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0C2340] mb-2">
            Welcome back, John
          </h1>
          <p className="text-[#6B7280]">
            Here's what's happening with your fulfillment operations
          </p>
        </div>

        {/* Onboarding Status */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3">
            <CheckCircleIcon className="w-6 h-6 text-green-600" />
            <div className="flex-1">
              <h3 className="font-semibold text-[#0C2340] mb-1">
                Account fully activated
              </h3>
              <p className="text-sm text-[#6B7280]">
                Shopify and Amazon connected • Billing active • 2 inbound plans
                created
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) =>
          <div
            key={idx}
            className="bg-white rounded-lg border border-gray-200 p-6">
            
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <p className="text-sm text-[#6B7280] mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-[#0C2340] mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-[#6B7280]">{stat.change}</p>
            </div>
          )}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Costs */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#0C2340]">
                  Recent Costs
                </h2>
                <button className="text-[#6366F1] text-sm font-semibold hover:underline">
                  View all billing →
                </button>
              </div>
              <div className="space-y-4">
                {recentCosts.map((cost, idx) =>
                <div
                  key={idx}
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  
                    <div>
                      <p className="font-medium text-[#0C2340]">
                        {cost.category}
                      </p>
                      <p className="text-sm text-[#6B7280]">
                        {cost.date}
                        {cost.orders && ` • ${cost.orders} orders`}
                      </p>
                    </div>
                    <p className="font-semibold text-[#0C2340]">
                      ${cost.amount.toFixed(2)}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Alerts */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mt-6">
              <h2 className="text-xl font-bold text-[#0C2340] mb-6">
                Alerts & Notifications
              </h2>
              <div className="space-y-4">
                {alerts.map((alert, idx) =>
                <div
                  key={idx}
                  className={`p-4 rounded-lg border-2 ${alert.type === 'warning' ? 'bg-yellow-50 border-yellow-200' : 'bg-blue-50 border-blue-200'}`}>
                  
                    <div className="flex items-start gap-3">
                      <AlertCircleIcon
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${alert.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'}`} />
                    
                      <div className="flex-1">
                        <p className="text-sm text-[#0C2340] mb-2">
                          {alert.message}
                        </p>
                        <button
                        className={`text-sm font-semibold hover:underline ${alert.type === 'warning' ? 'text-yellow-700' : 'text-blue-700'}`}>
                        
                          {alert.action} →
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Connected Channels */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-[#0C2340] mb-4">
                Connected Channels
              </h3>
              <div className="space-y-3">
                {connectedChannels.map((channel, idx) =>
                <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                        {channel.name === 'Shopify' ? '🛍️' : '📦'}
                      </div>
                      <div>
                        <p className="font-medium text-[#0C2340]">
                          {channel.name}
                        </p>
                        <p className="text-xs text-[#6B7280]">
                          {channel.orders} orders
                        </p>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                )}
                <button className="w-full mt-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-sm font-semibold text-[#6B7280] hover:border-[#6366F1] hover:text-[#6366F1] transition-colors">
                  + Add Channel
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-[#0C2340] mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full py-3 bg-[#6366F1] text-white rounded-lg font-semibold hover:bg-[#4F46E5] transition-colors">
                  Create Inbound Plan
                </button>
                <button className="w-full py-3 border-2 border-gray-300 text-[#0C2340] rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  View Inventory
                </button>
                <button className="w-full py-3 border-2 border-gray-300 text-[#0C2340] rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Download Reports
                </button>
              </div>
            </div>

            {/* Support */}
            <div className="bg-indigo-50 rounded-lg border border-indigo-200 p-6">
              <h3 className="font-bold text-[#0C2340] mb-2">Need help?</h3>
              <p className="text-sm text-[#6B7280] mb-4">
                Our support team is available 24/7 to assist you.
              </p>
              <button className="text-[#6366F1] text-sm font-semibold hover:underline">
                Contact Support →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>);

}