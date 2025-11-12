# Local Web Creator

A free, no-signup-required website builder designed specifically for local businesses. Create professional, SEO-optimized websites with AI-powered content generation, real-time preview, and instant deployment capabilities.

## Features

### Core Features
- ✅ **Zero Friction**: No signup required - start building immediately
- ✅ **Real-time Preview**: Watch your website update live as you fill out the form
- ✅ **22+ Industry Templates**: Optimized templates for various business categories
- ✅ **Form-Based Builder**: Comprehensive form with all sections from the PRD
- ✅ **Auto-Save**: Automatic draft saving to localStorage
- ✅ **Progress Tracking**: Visual progress indicator with helpful messages
- ✅ **API Key Management**: Secure, browser-only storage for API keys

### Implemented Sections
- SEO Settings (meta title, description)
- Hero Section (service type, location, description)
- Business Information (name, category, phone, email, logo, etc.)
- Services & Areas
- Dynamic Pages (locations and services)
- Features & About
- Hours & Social Media
- Footer Information
- SEO Content Sections (6 customizable sections)
- FAQ Section (10 items)
- Call-to-Action Buttons (Call, WhatsApp, Custom)
- Testimonials (3 items with ratings)
- Blog Configuration
- Lead Generation Disclaimer

### Pending Features (To Be Implemented)
- 🔄 AI Content Generation (Gemini/OpenAI integration)
- 🔄 Dynamic Page Generation
- 🔄 ZIP Download Functionality
- 🔄 Netlify Deployment
- 🔄 Complete SEO Implementation with Schema Markup
- 🔄 Advanced Responsive Design

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Form Handling**: React Hook Form (ready for integration)
- **Validation**: Zod (ready for integration)
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd techtest
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
techtest/
├── app/
│   ├── builder/          # Main builder page
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx          # Landing page
├── components/
│   ├── builder/
│   │   ├── BuilderForm.tsx
│   │   ├── ControlButtons.tsx
│   │   ├── PreviewPanel.tsx
│   │   ├── ProgressBar.tsx
│   │   └── form-sections/  # All form section components
│   │       ├── APIKeysSection.tsx
│   │       ├── TemplateSection.tsx
│   │       ├── BusinessInfoSection.tsx
│   │       └── ... (14 total sections)
│   └── ui/               # Reusable UI components
│       ├── CollapsibleSection.tsx
│       ├── Input.tsx
│       ├── Textarea.tsx
│       └── Select.tsx
├── lib/
│   ├── data/
│   │   └── templates.ts  # 23 business templates
│   ├── services/
│   │   └── generator.ts  # HTML generation service
│   ├── stores/
│   │   └── builder-store.ts  # Zustand state management
│   ├── types/
│   │   └── builder.ts    # TypeScript interfaces
│   └── utils/
│       └── cn.ts         # Utility functions
├── templates/            # Template storage
└── public/               # Static assets
```

## Usage

### 1. Landing Page
Visit the home page to learn about the features and get started.

### 2. Builder Page
Navigate to `/builder` to access the website builder:

- **API Keys**: Configure optional API keys for advanced features
- **Template Selection**: Choose from 22+ industry-specific templates
- **Form Sections**: Fill out comprehensive business information
- **Real-time Preview**: See your website update live on the right panel
- **Control Buttons**:
  - Load Sample Data: Populate form with example data
  - Clear All: Reset the form
  - Preview: Open website in new window
  - AI Generate: Generate content with AI (pending)
  - Download: Download as ZIP (pending)
  - Deploy: Deploy to Netlify (pending)

### 3. Auto-Save
Your progress is automatically saved to localStorage. Return anytime to continue editing.

## API Keys Setup

The builder supports four optional API integrations:

1. **Google Gemini** (Free): AI content generation
2. **OpenAI** (Paid): Alternative AI provider
3. **Netlify**: Direct deployment capability
4. **Unsplash** (Free): High-quality stock images

All API keys are stored securely in your browser's sessionStorage and are never sent to our servers.

## Templates

23 professionally designed templates across categories:
- Home Services (Plumbing, HVAC, Electrical)
- Remodeling & Construction
- Professional Services (Legal, Consulting, Accounting)
- Health & Wellness (Wellness Centers, Dental)
- Automotive (Auto Repair, Detailing)
- Food & Beverage (Restaurants, Coffee Shops)
- Retail & E-commerce
- Technology
- And more...

## Development Roadmap

### Phase 1 (Completed)
- ✅ Project setup and architecture
- ✅ Core form builder with 14 sections
- ✅ Template system with 23 templates
- ✅ Real-time preview
- ✅ Progress tracking
- ✅ Auto-save functionality
- ✅ Landing page

### Phase 2 (In Progress)
- 🔄 AI content generation with Gemini
- 🔄 Dynamic page generation
- 🔄 ZIP download functionality
- 🔄 Netlify deployment integration

### Phase 3 (Planned)
- 📋 Advanced SEO features
- 📋 Schema.org markup
- 📋 Blog post generation
- 📋 Complete responsive design
- 📋 Performance optimization

## Contributing

This project is part of a technical assessment. For production use, additional features and testing would be required.

## License

This project is created for demonstration purposes.

---

**Built with ❤️ for local businesses**
