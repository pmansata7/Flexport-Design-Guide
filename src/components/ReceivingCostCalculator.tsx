import React, { useState } from 'react';
import { AlertCircleIcon, InfoIcon } from 'lucide-react';
import {
  calculateReceivingCost,
  ReceivingEstimateInput } from
'../utils/calculators';
export function ReceivingCostCalculator() {
  const [input, setInput] = useState<ReceivingEstimateInput>({
    method: 'palletized',
    quantity: 1,
    hasLabels: true,
    hasAppointment: true,
    isOversized: false
  });
  const result = calculateReceivingCost(input);
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-[#0C2340] mb-4">
        Receiving Cost Estimator
      </h3>
      <p className="text-sm text-[#6B7280] mb-6">
        Calculate your inbound receiving costs based on shipment method and
        compliance.
      </p>

      <div className="space-y-4 mb-6">
        {/* Method Selection */}
        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Receiving Method
          </label>
          <select
            value={input.method}
            onChange={(e) =>
            setInput({
              ...input,
              method: e.target.value as any
            })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none">
            
            <option value="palletized">Palletized (Standard)</option>
            <option value="floor-loaded">Floor Loaded</option>
            <option value="containerized">Containerized</option>
            <option value="parcel">Parcel / Small Shipments</option>
          </select>
        </div>

        {/* Container Size (if containerized) */}
        {input.method === 'containerized' &&
        <div>
            <label className="block text-sm font-semibold text-[#0C2340] mb-2">
              Container Size
            </label>
            <select
            value={input.containerSize || '20ft'}
            onChange={(e) =>
            setInput({
              ...input,
              containerSize: e.target.value as any
            })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none">
            
              <option value="20ft">20ft Container</option>
              <option value="40ft">40ft Container</option>
            </select>
          </div>
        }

        {/* Quantity */}
        <div>
          <label className="block text-sm font-semibold text-[#0C2340] mb-2">
            Quantity (
            {input.method === 'parcel' ?
            'units' :
            input.method === 'containerized' ?
            'containers' :
            'pallets'}
            )
          </label>
          <input
            type="number"
            min="1"
            value={input.quantity}
            onChange={(e) =>
            setInput({
              ...input,
              quantity: parseInt(e.target.value) || 1
            })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none" />
          
        </div>

        {/* Compliance Checkboxes */}
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={input.hasLabels}
              onChange={(e) =>
              setInput({
                ...input,
                hasLabels: e.target.checked
              })
              }
              className="w-5 h-5 text-[#6366F1] rounded focus:ring-2 focus:ring-[#6366F1]" />
            
            <span className="text-sm text-[#0C2340]">
              Shipment has Flexport-compliant labels
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={input.hasAppointment}
              onChange={(e) =>
              setInput({
                ...input,
                hasAppointment: e.target.checked
              })
              }
              className="w-5 h-5 text-[#6366F1] rounded focus:ring-2 focus:ring-[#6366F1]" />
            
            <span className="text-sm text-[#0C2340]">
              Carrier appointment scheduled (48hr advance)
            </span>
          </label>

          {input.method === 'palletized' &&
          <label className="flex items-center gap-3 cursor-pointer">
              <input
              type="checkbox"
              checked={input.isOversized || false}
              onChange={(e) =>
              setInput({
                ...input,
                isOversized: e.target.checked
              })
              }
              className="w-5 h-5 text-[#6366F1] rounded focus:ring-2 focus:ring-[#6366F1]" />
            
              <span className="text-sm text-[#0C2340]">
                Oversized or non-standard pallets
              </span>
            </label>
          }
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6 border border-indigo-200 mb-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-[#6366F1] uppercase tracking-wide">
            Total Receiving Cost
          </span>
          <span className="text-3xl font-bold text-[#0C2340]">
            ${result.totalCost.toFixed(2)}
          </span>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-[#6B7280]">Base receiving</span>
            <span className="font-semibold text-[#0C2340]">
              ${result.baseCost.toFixed(2)}
            </span>
          </div>
          {result.labelingFee > 0 &&
          <div className="flex justify-between text-red-600">
              <span>Labeling fee</span>
              <span className="font-semibold">
                +${result.labelingFee.toFixed(2)}
              </span>
            </div>
          }
          {result.appointmentFee > 0 &&
          <div className="flex justify-between text-red-600">
              <span>Unscheduled delivery fee</span>
              <span className="font-semibold">
                +${result.appointmentFee.toFixed(2)}
              </span>
            </div>
          }
          {result.oversizedFee > 0 &&
          <div className="flex justify-between text-orange-600">
              <span>Oversized surcharge</span>
              <span className="font-semibold">
                +${result.oversizedFee.toFixed(2)}
              </span>
            </div>
          }
        </div>
      </div>

      {/* Warnings */}
      {result.warnings.length > 0 &&
      <div className="space-y-2">
          {result.warnings.map((warning, idx) =>
        <div
          key={idx}
          className="flex gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          
              <AlertCircleIcon className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#0C2340]">{warning}</p>
            </div>
        )}
        </div>
      }

      {/* Info Box */}
      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex gap-2">
          <InfoIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-[#6B7280]">
            All inbound shipments must have proper labels and scheduled
            appointments to avoid additional fees.
          </p>
        </div>
      </div>
    </div>);

}