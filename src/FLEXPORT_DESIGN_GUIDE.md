# Flexport Design System Guide

## Overview
This design guide documents the complete design system from Flexport.com for accurate recreation. Use this as your single source of truth when rebuilding the website.

---

## Color Palette

### Primary Colors
- **Navy Primary**: `#0C2340` - Main brand color, used for header and dark sections
- **Indigo CTA**: `#6366F1` - Primary call-to-action button color
- **Royal Blue**: `#3B4FB8` - Used in privacy banner and secondary CTAs
- **Teal Accent**: `#10B981` or `#14B8A6` - Used for section labels and accents

### Neutral Colors
- **White**: `#FFFFFF` - Primary text on dark backgrounds, card backgrounds
- **Light Gray**: `#F5F5F7` - Background for light sections
- **Medium Gray**: `#6B7280` - Secondary text, borders
- **Dark Gray**: `#374151` - Body text on light backgrounds
- **Slate**: `#475569` - Tertiary text elements

### Semantic Colors
- **Success Green**: `#10B981`
- **Warning Orange**: `#F59E0B`
- **Error Red**: `#EF4444`
- **Info Blue**: `#3B82F6`

---

## Typography

### Font Family
- **Primary**: System font stack or similar to Inter/Circular
- Fallback: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

### Font Sizes & Hierarchy

#### Headings
- **H1 (Hero)**: 56px / 3.5rem, font-weight: 700, line-height: 1.1, letter-spacing: -0.02em
- **H2 (Section)**: 40px / 2.5rem, font-weight: 700, line-height: 1.2, letter-spacing: -0.01em
- **H3 (Subsection)**: 32px / 2rem, font-weight: 600, line-height: 1.3
- **H4 (Card Title)**: 24px / 1.5rem, font-weight: 600, line-height: 1.4
- **H5**: 20px / 1.25rem, font-weight: 600, line-height: 1.4
- **H6**: 18px / 1.125rem, font-weight: 600, line-height: 1.4

#### Body Text
- **Large**: 18px / 1.125rem, font-weight: 400, line-height: 1.6
- **Base**: 16px / 1rem, font-weight: 400, line-height: 1.5
- **Small**: 14px / 0.875rem, font-weight: 400, line-height: 1.5
- **Tiny**: 12px / 0.75rem, font-weight: 400, line-height: 1.4

#### Special
- **Button Text**: 16px / 1rem, font-weight: 600, letter-spacing: 0.01em
- **Nav Links**: 16px / 1rem, font-weight: 500
- **Announcement Bar**: 14px / 0.875rem, font-weight: 500

---

## Spacing System

### Base Unit: 4px

#### Spacing Scale
- **xs**: 4px (0.25rem)
- **sm**: 8px (0.5rem)
- **md**: 16px (1rem)
- **lg**: 24px (1.5rem)
- **xl**: 32px (2rem)
- **2xl**: 48px (3rem)
- **3xl**: 64px (4rem)
- **4xl**: 96px (6rem)
- **5xl**: 128px (8rem)

#### Component Spacing
- **Section Padding (Vertical)**: 80px - 120px (5rem - 7.5rem)
- **Section Padding (Horizontal)**: 24px mobile, 48px tablet, 80px desktop
- **Card Padding**: 24px - 32px
- **Button Padding**: 12px vertical, 24px horizontal
- **Input Padding**: 12px vertical, 16px horizontal

---

## Layout Grid

### Container
- **Max Width**: 1280px (80rem)
- **Padding**: 24px mobile, 48px tablet, 80px desktop
- **Centered**: margin: 0 auto

### Grid System
- **Columns**: 12-column grid
- **Gap**: 24px (1.5rem)
- **Responsive Breakpoints**:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: 1024px - 1280px
  - Large Desktop: > 1280px

---

## Components

### 1. Navigation Bar

#### Structure
- **Height**: 80px (5rem)
- **Background**: Navy Primary (#0C2340)
- **Position**: Sticky top
- **Z-index**: 1000

#### Elements
- **Logo**: Left-aligned, white color, 32px height
- **Nav Links**: Centered, white text, 16px, font-weight 500
  - Hover: Slight opacity change (0.8)
  - Dropdown indicator: Chevron icon
- **Search Icon**: Right side, white, 20px
- **CTA Button**: "Get Started", Indigo (#6366F1), 16px font-weight 600
  - Padding: 12px 24px
  - Border-radius: 6px
  - Hover: Slightly darker shade

#### Dropdown Menus
- **Background**: White
- **Border**: 1px solid #E5E7EB
- **Border-radius**: 8px
- **Shadow**: 0 10px 25px rgba(0, 0, 0, 0.1)
- **Padding**: 16px
- **Item Padding**: 12px 16px
- **Item Hover**: Light gray background (#F9FAFB)

### 2. Announcement Bar

#### Structure
- **Height**: 48px (3rem)
- **Background**: Slate/Gray (#475569)
- **Text**: White, 14px, font-weight 500
- **Alignment**: Center

#### Elements
- **Link**: Underlined on hover
- **Close Button**: Right-aligned, 16px icon

### 3. Hero Section

#### Structure
- **Height**: 600px - 700px (viewport dependent)
- **Background**: Full-width image with dark overlay (opacity: 0.4-0.5)
- **Text Color**: White
- **Alignment**: Left-aligned content, vertically centered

#### Content Layout
- **Max Width**: 600px
- **Headline**: H1 size (56px), font-weight 700
- **Description**: 18px, line-height 1.6, max-width 540px
- **Spacing**: 24px between headline and description
- **CTA Button**: 32px margin-top from description

#### CTA Button
- **Background**: Indigo (#6366F1)
- **Text**: White, 16px, font-weight 600
- **Padding**: 16px 32px
- **Border-radius**: 8px
- **Hover**: Slightly darker shade, subtle scale (1.02)
- **Shadow**: 0 4px 12px rgba(99, 102, 241, 0.3)

### 4. Buttons

#### Primary Button
- **Background**: Indigo (#6366F1)
- **Text**: White, 16px, font-weight 600
- **Padding**: 12px 24px (medium), 16px 32px (large)
- **Border-radius**: 6px - 8px
- **Hover**: Background darkens to #4F46E5
- **Active**: Scale 0.98
- **Transition**: all 0.2s ease

#### Secondary Button
- **Background**: Transparent
- **Border**: 2px solid current color
- **Text**: Inherits color, 16px, font-weight 600
- **Padding**: 12px 24px
- **Border-radius**: 6px - 8px
- **Hover**: Background fills with 10% opacity of text color

#### Text Button
- **Background**: Transparent
- **Text**: Indigo (#6366F1), 16px, font-weight 600
- **Padding**: 8px 16px
- **Hover**: Underline

### 5. Cards

#### Standard Card
- **Background**: White
- **Border**: 1px solid #E5E7EB
- **Border-radius**: 12px
- **Padding**: 32px
- **Shadow**: 0 1px 3px rgba(0, 0, 0, 0.1)
- **Hover**: Shadow increases to 0 4px 12px rgba(0, 0, 0, 0.15)
- **Transition**: all 0.3s ease

#### Content Card
- **Image**: Full-width at top, border-radius on top corners only
- **Content Padding**: 24px
- **Title**: H4 size (24px), font-weight 600
- **Description**: 16px, line-height 1.5, color #6B7280
- **Spacing**: 12px between title and description

### 6. Forms & Inputs

#### Text Input
- **Height**: 48px
- **Padding**: 12px 16px
- **Border**: 1px solid #D1D5DB
- **Border-radius**: 6px
- **Font-size**: 16px
- **Focus**: Border color changes to Indigo (#6366F1), outline ring
- **Placeholder**: Color #9CA3AF

#### Select Dropdown
- Same styling as text input
- **Chevron Icon**: Right-aligned, 16px

#### Checkbox/Radio
- **Size**: 20px
- **Border**: 2px solid #D1D5DB
- **Border-radius**: 4px (checkbox), 50% (radio)
- **Checked**: Background Indigo (#6366F1), white checkmark

### 7. Privacy Banner

#### Structure
- **Position**: Fixed bottom
- **Background**: Royal Blue (#3B4FB8)
- **Padding**: 24px
- **Text**: White, 14px
- **Z-index**: 1000

#### Buttons
- **Primary**: White background, blue text, 14px font-weight 600
- **Secondary**: Transparent background, white border, white text
- **Padding**: 10px 20px
- **Border-radius**: 6px
- **Spacing**: 12px gap between buttons

### 8. Section Labels

#### Eyebrow Label
- **Text**: Uppercase, 12px - 14px, font-weight 600
- **Color**: Teal accent (#10B981) or Indigo (#6366F1)
- **Letter-spacing**: 0.1em
- **Margin-bottom**: 16px
- **Usage**: Above section headlines

### 9. Article Cards

#### Blog Article Card
- **Background**: White
- **Border**: 1px solid #E5E7EB
- **Border-radius**: 12px
- **Overflow**: Hidden
- **Hover**: Shadow increases, subtle lift

#### Card Structure
- **Image**: Full-width, aspect-ratio 16:9, object-fit cover
- **Content Padding**: 24px
- **Category Label**: Teal or indigo, 12px, uppercase, font-weight 600
- **Headline**: 20px - 24px, font-weight 600, dark gray, margin 8px 0
- **Excerpt**: 16px, line-height 1.5, medium gray
- **Read More Link**: Indigo, 14px, font-weight 600, with arrow icon

### 10. Content Sections

#### Two-Column Layout
- **Container**: Max-width 1280px
- **Grid**: 2 columns on desktop (1fr 1fr), 1 column on mobile
- **Gap**: 48px - 64px
- **Alignment**: Vertically centered

#### Image + Text Section
- **Image Side**: 
  - Border-radius: 12px
  - Box-shadow: 0 4px 12px rgba(0,0,0,0.1)
- **Text Side**:
  - Eyebrow label (optional)
  - Headline: 32px - 40px, font-weight 700
  - Body: 18px, line-height 1.6, medium gray
  - CTA button or link

### 11. Outlined Buttons

#### Secondary Outlined Button
- **Background**: Transparent
- **Border**: 2px solid white (on dark) or 2px solid #6366F1 (on light)
- **Text**: Inherits border color, 16px, font-weight 600
- **Padding**: 12px 24px (medium), 16px 32px (large)
- **Border-radius**: 8px
- **Hover**: Background fills with 10% opacity of border color
- **Transition**: all 0.2s ease

### 12. Game UI Components (404 Page)

#### Game Canvas
- **Size**: Responsive, maintains aspect ratio
- **Background**: Darker navy (#0A1929)
- **Grid**: Visible grid lines with subtle opacity
- **Pieces**: Colorful container blocks

#### Score Display
- **Layout**: Vertical stack
- **Label**: 12px, uppercase, medium gray, letter-spacing: 0.05em
- **Value**: 32px - 40px, font-weight 700, white
- **Spacing**: 24px between items

---

## Page Templates

### 1. Homepage
- Full-width hero with background image
- Announcement bar at top
- Sticky navigation
- Privacy banner at bottom

### 2. About Page

#### Mission Hero Section
- **Background**: Navy Primary (#0C2340)
- **Height**: 400px - 500px
- **Content**: Centered vertically and horizontally
- **Label**: Teal accent color, 12px, uppercase, letter-spacing: 0.1em, "OUR MISSION"
- **Headline**: White, 48px - 56px, font-weight 700, max-width 900px, centered
- **CTA Button**: Outlined style with border, centered below headline

#### Content Sections
- **Background**: White
- **Padding**: 80px - 120px vertical
- **Max Width**: 1280px container
- **Headline**: Dark gray (#374151), 32px - 40px, font-weight 700
- **Body Text**: Medium gray (#6B7280), 18px, line-height 1.6
- **Image Grid**: 3-column grid on desktop, 1-column on mobile, 24px gap

### 3. Blog Page

#### Featured Article Hero
- **Background**: Full-width image with dark overlay
- **Height**: 500px - 600px
- **Content**: Left-aligned, max-width 700px
- **Headline**: White, 40px - 48px, font-weight 700
- **CTA**: "Read More" button, indigo background

#### News Section
- **Heading**: "News and Views", 32px, font-weight 700, dark gray
- **Layout**: Grid of article cards
- **Spacing**: 48px gap between cards

### 4. 404 Error Page

#### Structure
- **Background**: Navy Primary (#0C2340)
- **Layout**: Split layout - game on left, stats panel on right
- **Height**: Full viewport

#### Error Message
- **Headline**: "404 — This page drifted out to sea", white, 40px, font-weight 700, centered
- **Subtext**: "Since you're lost, help us stack containers in the port.", white, 18px, centered

#### Interactive Game
- **Game Area**: Tetris-style container stacking game
- **Colors**: Various container colors (teal, blue, brown, red)
- **CTA Button**: "Stack Containers", indigo (#6366F1), centered below game

#### Stats Panel
- **Background**: Dark navy with subtle transparency
- **Border**: 1px solid rgba(255,255,255,0.1)
- **Border-radius**: 12px
- **Padding**: 24px
- **Stats Display**:
  - Score: Large number, white
  - Level: Large number, white
  - Lines: Large number, white
  - Label text: 12px, uppercase, letter-spacing: 0.05em, medium gray

#### Controls Panel
- **Background**: Same as stats panel
- **Layout**: List of keyboard controls
- **Text**: 14px, white
- **Format**: Key + Action description

---

## Layout Patterns

### Mission Statement Layout
- **Background**: Full-width dark navy
- **Content**: Centered, max-width 900px
- **Vertical Padding**: 120px - 160px
- **Text Alignment**: Center
- **Elements**: Label → Headline → CTA button
- **Spacing**: 16px label-to-headline, 32px headline-to-CTA

### Content + Image Grid
- **Container**: Max-width 1280px
- **Grid**: 3 columns on desktop, 2 on tablet, 1 on mobile
- **Gap**: 24px
- **Images**: Aspect-ratio 4:3, border-radius 8px
- **Hover**: Subtle scale (1.02) and shadow increase

### Article Grid
- **Container**: Max-width 1280px
- **Grid**: 3 columns on desktop, 2 on tablet, 1 on mobile
- **Gap**: 32px
- **Cards**: Full-height, consistent sizing

---

## Icons

### Style
- **Library**: Likely custom or Heroicons/Lucide
- **Stroke Width**: 2px
- **Size**: 20px (small), 24px (medium), 32px (large)
- **Color**: Inherits from parent

### Common Icons
- Search
- Chevron Down (dropdowns)
- Menu (mobile)
- Close (X)
- Arrow Right (CTAs)
- External Link

---

## Imagery

### Hero Images
- **Aspect Ratio**: 16:9 or wider
- **Treatment**: Dark overlay (40-50% opacity) for text readability
- **Quality**: High-resolution, professional photography
- **Subject**: Logistics, shipping, containers, global trade

### Product/Feature Images
- **Aspect Ratio**: 4:3 or 16:9
- **Style**: Clean, modern, often with UI screenshots or illustrations
- **Border-radius**: 8px - 12px

---

## Animations & Transitions

### Standard Transitions
- **Duration**: 0.2s - 0.3s
- **Easing**: ease-in-out or cubic-bezier(0.4, 0, 0.2, 1)

### Hover Effects
- **Buttons**: Scale 1.02, shadow increase
- **Cards**: Shadow increase, subtle lift
- **Links**: Underline, opacity change

### Page Transitions
- **Fade In**: Opacity 0 to 1, 0.3s
- **Slide Up**: Transform translateY(20px) to 0, 0.4s

---

## Responsive Behavior

### Mobile (< 640px)
- **Nav**: Hamburger menu
- **Hero Text**: H1 reduces to 36px
- **Section Padding**: 48px vertical, 24px horizontal
- **Grid**: Single column

### Tablet (640px - 1024px)
- **Nav**: Full menu visible
- **Hero Text**: H1 at 48px
- **Section Padding**: 64px vertical, 48px horizontal
- **Grid**: 2 columns

### Desktop (> 1024px)
- **Nav**: Full menu with dropdowns
- **Hero Text**: H1 at 56px
- **Section Padding**: 96px vertical, 80px horizontal
- **Grid**: 3-4 columns

---

## Accessibility

### Requirements
- **Color Contrast**: WCAG AA minimum (4.5:1 for body text, 3:1 for large text)
- **Focus States**: Visible outline ring on all interactive elements
- **Keyboard Navigation**: Full tab support
- **ARIA Labels**: On all icons and interactive elements
- **Alt Text**: On all images

### Focus Ring
- **Color**: Indigo (#6366F1)
- **Width**: 2px
- **Offset**: 2px
- **Style**: Solid

---

## Usage Instructions

### How to Use This Guide

1. **Colors**: Reference the exact hex codes when setting up your CSS variables or Tailwind config
2. **Typography**: Set up your font scale using the specified sizes and weights
3. **Spacing**: Use the spacing scale consistently across all components
4. **Components**: Build each component following the exact specifications
5. **Responsive**: Implement mobile-first, then add tablet and desktop breakpoints

### Implementation Order

1. Set up base styles (colors, typography, spacing)
2. Build layout system (container, grid)
3. Create navigation components
4. Build hero section
5. Create reusable components (buttons, cards, forms)
6. Add page-specific sections
7. Implement responsive behavior
8. Add animations and transitions
9. Test accessibility

### When Building the New Site

**Provide these instructions to the AI:**

"Using the Flexport Design Guide (FLEXPORT_DESIGN_GUIDE.md), build [specific page/component]. Follow these exact specifications:
- Use the color palette defined in the guide (Navy Primary #0C2340, Indigo CTA #6366F1, etc.)
- Apply the typography scale (H1: 56px/700, Body: 16px/400, etc.)
- Follow the spacing system (section padding: 80-120px vertical, etc.)
- Implement components exactly as specified (navigation bar: 80px height, sticky, navy background, etc.)
- Ensure responsive behavior matches the breakpoints (mobile < 640px, tablet 640-1024px, desktop > 1024px)
- Include all accessibility requirements (focus states, ARIA labels, keyboard navigation)"

### Example Prompt for Building

"Build the Flexport homepage hero section using FLEXPORT_DESIGN_GUIDE.md:
- Navy header (#0C2340) with white logo and nav links
- Full-width hero with shipping container background image
- Dark overlay (40% opacity) on hero image
- White H1 headline (56px, font-weight 700): 'AI-powered logistics for the real world'
- White body text (18px, line-height 1.6) with description
- Indigo CTA button (#6366F1, 16px/32px padding, 8px border-radius): 'Request a demo'
- Responsive: H1 reduces to 36px on mobile, section padding adjusts per breakpoints"

---

## Additional Page-Specific Notes

### About Page
- Focus on mission-driven messaging
- Use teal accent for section labels
- Include team/company photos in grid format
- Emphasize values and culture through imagery

### Blog Page
- Featured article gets hero treatment
- Consistent card styling for article previews
- Category tags for filtering
- "Read More" CTAs on all cards

### 404 Page
- Maintain brand personality with interactive game
- Provide clear navigation back to home
- Keep error messaging light and on-brand
- Game should be fully functional and engaging

---

**Version**: 1.0  
**Last Updated**: Based on Flexport.com analysis  
**Maintained By**: Design System Team