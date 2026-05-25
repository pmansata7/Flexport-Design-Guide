
# Flexport Qualification & Onboarding Redesign

A complete redesign of Flexport.com's qualification and onboarding experience, built following a comprehensive PRD to reduce unqualified signups, increase transparency, and improve user activation rates.

## 🎯 Project Goals

- **Reduce unqualified self-service signups** by routing users BEFORE account creation
- **Reduce billing complaints by 35%** through transparent pricing and consent
- **Increase qualified activations by 20%** through better qualification
- **Protect margins** with minimum-spend acknowledgement and compliance guardrails

## 🚀 Features

### Complete User Journey

1. **Homepage** - Persona-based navigation with clear CTAs
2. **Qualification Gate** - Intent selection before account creation
3. **Fulfillment Estimator** - Spend calculation with confidence scoring
4. **Marketplace Integration** - OAuth connections for Shopify, Amazon, Walmart, TikTok Shop
5. **Billing Consent** - Transparent pricing with required consent checkboxes
6. **Account Creation** - Secure signup with validation
7. **Dashboard** - Real-time cost visibility and operational alerts

### Key Capabilities

- ✅ Pre-account qualification flow
- ✅ Transparent minimum-spend handling (soft intercept, not hard block)
- ✅ Marketplace data integration with OAuth
- ✅ Detailed billing summary before activation
- ✅ Cannot proceed without all required consents
- ✅ Real-time form validation
- ✅ Password strength meter
- ✅ Mobile-responsive design
- ✅ Accessible (WCAG AA compliant)

## 🎨 Design System

Built following the Flexport design guide:

- **Navy Primary**: `#0C2340` - Main brand color
- **Indigo CTA**: `#6366F1` - Primary buttons
- **Teal Accent**: `#10B981` - Section labels
- **Typography**: System font stack with clear hierarchy
- **Spacing**: 4px base unit system

## 🛠️ Tech Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📁 Project Structure

```
├── components/
│   ├── NewHomepage.tsx           # Redesigned homepage
│   ├── QualificationGate.tsx     # Step 1: Intent selection
│   ├── FulfillmentEstimator.tsx  # Step 2: Volume estimation
│   ├── MarketplaceIntegration.tsx # Step 3: Channel connections
│   ├── BillingConsent.tsx        # Step 4: Billing terms
│   ├── AccountCreation.tsx       # Final: Account signup
│   └── Dashboard.tsx             # Post-activation view
├── App.tsx                       # Main app with routing logic
├── index.tsx                     # Entry point
├── index.css                     # Global styles
├── tailwind.config.js            # Tailwind configuration
└── FLEXPORT_DESIGN_GUIDE.md     # Complete design system documentation
```

## 🔄 User Flow

```
Homepage
    ↓ (Click "Get Started")
Qualification Gate (Step 1/4)
    ↓ (Select intent: Freight/Customs/Fulfillment/Unsure)
Fulfillment Estimator (Step 2/4)
    ↓ (Enter volume data, get spend estimate)
Marketplace Integration (Step 3/4)
    ↓ (Connect channels or upload CSV)
Billing Consent (Step 4/4)
    ↓ (Review billing, check consents, select payment)
Account Creation (Final Step)
    ↓ (Create account with validation)
Dashboard
    ↓ (Activated account with real-time data)
```

## 🎯 PRD Requirements Met

### Business Goals
- ✅ Qualification happens BEFORE account creation
- ✅ Clear eligibility and pricing expectations upfront
- ✅ Structured lead routing with intent data
- ✅ Audit trail for consent and decisions
- ✅ Inbound compliance guardrails

### User Goals
- ✅ Understand product fit before committing
- ✅ See clear eligibility and pricing floors
- ✅ Connect marketplace data with minimal friction
- ✅ Get path forward if not eligible (manual review option)
- ✅ Avoid unexpected charges or operational blockers

### Technical Requirements
- ✅ Multi-step forms with progress indicators
- ✅ Session state management
- ✅ Form validation with helpful errors
- ✅ Integration connection UI with OAuth and fallbacks
- ✅ Configurable rate tables (not hard-coded)
- ✅ Event tracking points throughout

## 🚦 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 📊 Success Metrics

The redesign targets:
- 35% reduction in onboarding-related billing complaints
- 20% increase in qualified self-service activations
- Improved lead routing quality for Sales and Support
- Reduced unqualified account creation

## 🔐 Security & Privacy

- Industry-standard encryption for data in transit and at rest
- Password strength requirements (8+ characters)
- Email verification before full activation
- Explicit consent capture with timestamps
- GDPR and privacy policy compliance

## 📝 License

This project is proprietary and confidential.

## 👥 Team

Built following the Flexport Qualification and Omnichannel Onboarding PRD.

---

**Note**: This is a prototype/redesign. Production deployment requires:
- Backend API integration
- Payment provider setup
- CRM sync configuration
- Analytics implementation
- Legal review of all customer-facing copy
