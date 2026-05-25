import React, { useState } from 'react';
import {
  ArrowRightIcon,
  EyeIcon,
  EyeOffIcon,
  CheckCircleIcon,
  AlertCircleIcon } from
'lucide-react';
interface AccountCreationProps {
  estimatedSpend: number;
  onComplete: () => void;
  onBack: () => void;
}
export function AccountCreation({
  estimatedSpend,
  onComplete,
  onBack
}: AccountCreationProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!agreedToTerms) {
      newErrors.terms = 'You must agree to the terms and conditions';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onComplete();
    }
  };
  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: ''
      });
    }
  };
  const passwordStrength = () => {
    const password = formData.password;
    if (!password)
    return {
      strength: 0,
      label: '',
      color: ''
    };
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    if (strength <= 2)
    return {
      strength,
      label: 'Weak',
      color: 'bg-red-500'
    };
    if (strength <= 3)
    return {
      strength,
      label: 'Fair',
      color: 'bg-yellow-500'
    };
    if (strength <= 4)
    return {
      strength,
      label: 'Good',
      color: 'bg-blue-500'
    };
    return {
      strength,
      label: 'Strong',
      color: 'bg-green-500'
    };
  };
  const strength = passwordStrength();
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-block bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            FINAL STEP
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0C2340] mb-4">
            Create your account
          </h1>
          <p className="text-lg text-[#6B7280] max-w-xl mx-auto">
            You're qualified! Create your Flexport account to activate billing
            and start fulfilling orders.
          </p>
        </div>

        {/* Qualification Summary */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircleIcon className="w-6 h-6 text-green-600" />
            <h3 className="font-semibold text-[#0C2340]">
              You're qualified for Flexport Fulfillment
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-[#6B7280] mb-1">Estimated Monthly Spend</p>
              <p className="font-semibold text-[#0C2340]">
                ${estimatedSpend.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-[#6B7280] mb-1">Account Type</p>
              <p className="font-semibold text-[#0C2340]">
                Ecommerce Fulfillment
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Information */}
          <div>
            <h2 className="text-xl font-bold text-[#0C2340] mb-4">
              Company Information
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#0C2340] mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => handleChange('companyName', e.target.value)}
                  placeholder="Acme Inc."
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none ${errors.companyName ? 'border-red-500' : 'border-gray-300'}`} />
                
                {errors.companyName &&
                <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircleIcon className="w-4 h-4" />
                    {errors.companyName}
                  </p>
                }
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div>
            <h2 className="text-xl font-bold text-[#0C2340] mb-4">
              Your Information
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-[#0C2340] mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                  placeholder="John"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`} />
                
                {errors.firstName &&
                <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircleIcon className="w-4 h-4" />
                    {errors.firstName}
                  </p>
                }
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0C2340] mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                  placeholder="Doe"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`} />
                
                {errors.lastName &&
                <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircleIcon className="w-4 h-4" />
                    {errors.lastName}
                  </p>
                }
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#0C2340] mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="john@acme.com"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                
                {errors.email &&
                <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircleIcon className="w-4 h-4" />
                    {errors.email}
                  </p>
                }
                <p className="text-sm text-[#6B7280] mt-1">
                  We'll send a verification email to this address
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0C2340] mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none ${errors.phone ? 'border-red-500' : 'border-gray-300'}`} />
                
                {errors.phone &&
                <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircleIcon className="w-4 h-4" />
                    {errors.phone}
                  </p>
                }
              </div>
            </div>
          </div>

          {/* Password */}
          <div>
            <h2 className="text-xl font-bold text-[#0C2340] mb-4">
              Create Password
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#0C2340] mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    placeholder="Create a strong password"
                    className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none ${errors.password ? 'border-red-500' : 'border-gray-300'}`} />
                  
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#0C2340]">
                    
                    {showPassword ?
                    <EyeOffIcon className="w-5 h-5" /> :

                    <EyeIcon className="w-5 h-5" />
                    }
                  </button>
                </div>
                {errors.password &&
                <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircleIcon className="w-4 h-4" />
                    {errors.password}
                  </p>
                }
                {formData.password &&
                <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-[#6B7280]">
                        Password strength:
                      </span>
                      <span
                      className={`text-sm font-semibold ${strength.label === 'Weak' ? 'text-red-600' : strength.label === 'Fair' ? 'text-yellow-600' : strength.label === 'Good' ? 'text-blue-600' : 'text-green-600'}`}>
                      
                        {strength.label}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                      className={`h-full transition-all duration-300 ${strength.color}`}
                      style={{
                        width: `${strength.strength / 5 * 100}%`
                      }} />
                    
                    </div>
                  </div>
                }
                <p className="text-sm text-[#6B7280] mt-1">
                  Use at least 8 characters with a mix of letters, numbers, and
                  symbols
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0C2340] mb-2">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) =>
                    handleChange('confirmPassword', e.target.value)
                    }
                    placeholder="Re-enter your password"
                    className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`} />
                  
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#0C2340]">
                    
                    {showConfirmPassword ?
                    <EyeOffIcon className="w-5 h-5" /> :

                    <EyeIcon className="w-5 h-5" />
                    }
                  </button>
                </div>
                {errors.confirmPassword &&
                <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircleIcon className="w-4 h-4" />
                    {errors.confirmPassword}
                  </p>
                }
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div>
            <label
              className={`flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${errors.terms ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}>
              
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => {
                  setAgreedToTerms(e.target.checked);
                  if (errors.terms) {
                    setErrors({
                      ...errors,
                      terms: ''
                    });
                  }
                }}
                className="mt-1 w-5 h-5 text-[#6366F1] rounded focus:ring-2 focus:ring-[#6366F1]" />
              
              <div className="flex-1">
                <p className="text-sm text-[#0C2340]">
                  I agree to Flexport's{' '}
                  <a
                    href="#"
                    className="text-[#6366F1] hover:underline font-semibold">
                    
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a
                    href="#"
                    className="text-[#6366F1] hover:underline font-semibold">
                    
                    Privacy Policy
                  </a>
                  , and I acknowledge that I have reviewed the billing terms and
                  minimum spend requirements.
                </p>
              </div>
            </label>
            {errors.terms &&
            <p className="text-sm text-red-600 mt-2 flex items-center gap-1">
                <AlertCircleIcon className="w-4 h-4" />
                {errors.terms}
              </p>
            }
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-3 border-2 border-gray-300 text-[#0C2340] rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              
              Back
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#6366F1] text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#4F46E5] transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2">
              
              Create Account & Continue
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </form>

        {/* Security Note */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex gap-3">
            <AlertCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-[#0C2340] text-sm mb-1">
                Your data is secure
              </h4>
              <p className="text-sm text-[#6B7280]">
                We use industry-standard encryption to protect your information.
                Your password is encrypted and never stored in plain text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>);

}