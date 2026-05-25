import React, { useState } from 'react';
import { NewHomepage } from './components/NewHomepage';
import { QualificationGate } from './components/QualificationGate';
import { FulfillmentEstimator } from './components/FulfillmentEstimator';
import { MarketplaceIntegration } from './components/MarketplaceIntegration';
import { BillingConsent } from './components/BillingConsent';
import { AccountCreation } from './components/AccountCreation';
import { Dashboard } from './components/Dashboard';
type Step =
'homepage' |
'qualification' |
'estimator' |
'integration' |
'billing' |
'account' |
'dashboard';
type Intent = 'freight' | 'customs' | 'fulfillment' | 'unsure' | null;
export function App() {
  const [currentStep, setCurrentStep] = useState<Step>('homepage');
  const [intent, setIntent] = useState<Intent>(null);
  const [estimatorData, setEstimatorData] = useState<any>(null);
  const [estimatorResult, setEstimatorResult] = useState<any>(null);
  const [connectedChannels, setConnectedChannels] = useState<string[]>([]);
  const handleGetStarted = () => {
    setCurrentStep('qualification');
  };
  const handleQualificationComplete = (selectedIntent: Intent, data: any) => {
    setIntent(selectedIntent);
    if (selectedIntent === 'fulfillment') {
      setCurrentStep('estimator');
    } else {
      // For other intents, would route to their specific flows
      // For demo purposes, going to estimator
      setCurrentStep('estimator');
    }
  };
  const handleEstimatorComplete = (data: any, result: any) => {
    setEstimatorData(data);
    setEstimatorResult(result);
    setCurrentStep('integration');
  };
  const handleIntegrationComplete = (channels: string[]) => {
    setConnectedChannels(channels);
    setCurrentStep('billing');
  };
  const handleBillingComplete = () => {
    setCurrentStep('account');
  };
  const handleAccountCreationComplete = () => {
    setCurrentStep('dashboard');
  };
  return (
    <div className="min-h-screen">
      {currentStep === 'homepage' &&
      <NewHomepage onGetStarted={handleGetStarted} />
      }

      {currentStep === 'qualification' &&
      <QualificationGate onComplete={handleQualificationComplete} />
      }

      {currentStep === 'estimator' &&
      <FulfillmentEstimator
        onComplete={handleEstimatorComplete}
        onBack={() => setCurrentStep('qualification')} />

      }

      {currentStep === 'integration' && estimatorData &&
      <MarketplaceIntegration
        selectedChannels={estimatorData.channels}
        onComplete={handleIntegrationComplete}
        onBack={() => setCurrentStep('estimator')} />

      }

      {currentStep === 'billing' && estimatorResult &&
      <BillingConsent
        estimatedSpend={estimatorResult.estimatedMonthlySpend}
        minimumSpend={estimatorResult.minimumSpend}
        onComplete={handleBillingComplete}
        onBack={() => setCurrentStep('integration')} />

      }

      {currentStep === 'account' && estimatorResult &&
      <AccountCreation
        estimatedSpend={estimatorResult.estimatedMonthlySpend}
        onComplete={handleAccountCreationComplete}
        onBack={() => setCurrentStep('billing')} />

      }

      {currentStep === 'dashboard' && <Dashboard />}
    </div>);

}