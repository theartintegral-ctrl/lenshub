# lensHub - Eyewear E-Commerce Platform Specification

## Project Overview

**Project Name**: lensHub  
**Type**: E-Commerce Web Application (React + TypeScript)  
**Core Functionality**: Premium eyewear e-commerce platform with virtual try-on, prescription management, style quiz, and loyalty program  
**Target Users**: Eyewear shoppers seeking personalized recommendations and convenient eye care services

---

## UI/UX Specification

### Color Palette

| Role | Color | Hex Code |
|------|-------|----------|
| Primary (Brand Green) | Emerald Green | `#10B981` |
| Primary Dark | Deep Emerald | `#059669` |
| Primary Light | Mint | `#D1FAE5` |
| Secondary | Charcoal | `#1F2937` |
| Accent | Gold/Amber | `#F59E0B` |
| Background | Off-White | `#FAFAFA` |
| Surface | White | `#FFFFFF` |
| Text Primary | Dark Gray | `#111827` |
| Text Secondary | Medium Gray | `#6B7280` |
| Border | Light Gray | `#E5E7EB` |
| Error | Red | `#EF4444` |
| Success | Green | `#10B981` |

### Typography

- **Primary Font**: "DM Sans" (headings and body)
- **Display Font**: "Playfair Display" (brand name, hero text)
- **Font Sizes**:
  - Hero: 64px / 4rem
  - H1: 48px / 3rem
  - H2: 36px / 2.25rem
  - H3: 24px / 1.5rem
  - Body: 16px / 1rem
  - Small: 14px / 0.875rem
  - Caption: 12px / 0.75rem

### Layout Structure

**Header (Fixed)**
- Logo (left): "lens" (dark) + "Hub" (green)
- Navigation (center): Home, Try On, Catalog, Style Quiz, About
- Actions (right): Search, Chat, Account, Cart

**Hero Section**
- Full-width with animated gradient background
- Main headline with brand emphasis
- CTA buttons for key actions

**Content Sections**
- Max-width: 1440px
- Padding: 24px (mobile), 48px (tablet), 80px (desktop)
- Grid: 12-column system

**Footer**
- 4-column layout: Company, Shop, Support, Connect
- Newsletter signup
- Social links

### Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Visual Effects

- **Shadows**: 
  - Card: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
  - Elevated: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`
- **Animations**:
  - Page transitions: 300ms ease-out
  - Hover effects: 200ms ease
  - Staggered reveals: 100ms delay increments
- **Border Radius**: 
  - Small: 8px
  - Medium: 12px
  - Large: 16px
  - Full: 9999px

---

## Page Structure

### 1. Home Page

**Sections**:
1. Hero with virtual try-on CTA
2. Featured collections carousel
3. Face shape quiz banner
4. Popular frames grid
5. How it works (3 steps)
6. Testimonials
7. Newsletter signup
8. Footer

### 2. Virtual Try-On Page

**Features**:
- Webcam activation with permission request
- Real-time face detection overlay
- Frame selection sidebar
- Screenshot capture
- Share functionality
- Frame size adjustment

### 3. Catalog Page

**Categories**:
- By Shape: Round, Square, Aviator, Cat Eye, Rectangle, Oval
- By Material: Metal, Acetate, Titanium, Mixed, Wood
- By Brand: All top brands
- Price ranges

**Features**:
- Filter sidebar
- Sort options
- Grid/List view
- Quick view modal
- Add to wishlist
- Compare frames

### 4. Prescription Management

**Features**:
- Add new prescription
- Upload prescription image
- Prescription history
- OD/OS values (SPH, CYL, AXIS, ADD)
- PD (Pupillary Distance)
- Expiry reminders
- Share with doctor

### 5. Style Quiz

**Quiz Steps**:
1. Face shape identification (upload or select)
2. Personal style preferences
3. Color preferences
4. Lifestyle needs
5. Budget range

**Output**:
- Personalized recommendations
- Face shape analysis
- Best matching frames

### 6. Book Eye Exam

**Features**:
- Select test type (basic/comprehensive)
- Date/time picker
- Address input
- Confirm booking
- Exam preparation tips

### 7. Live Chat

**Features**:
- Floating chat button
- Chat window with expert
- Typing indicators
- Message history
- File/image sharing
- Quick replies

### 8. Loyalty Program Dashboard

**Features**:
- Points balance display
- Points history
- Tier status (Bronze, Silver, Gold, Platinum)
- Available rewards
- Early access products
- Referral program
- Birthday rewards

---

## Components List

### Navigation
- `Navbar` - Main header with navigation
- `MobileMenu` - Responsive mobile menu
- `Footer` - Site footer

### Common
- `Button` - Primary, secondary, outline variants
- `Input` - Text, email, number inputs
- `Select` - Dropdown select
- `Card` - Content card
- `Modal` - Popup modal
- `Badge` - Status badges
- `Avatar` - User avatar
- `Rating` - Star ratings

### Features
- `VirtualTryOn` - Webcam try-on component
- `FrameCard` - Product card
- `FilterPanel` - Catalog filters
- `QuizWizard` - Multi-step quiz
- `PrescriptionForm` - Prescription input
- `ChatWidget` - Live chat
- `LoyaltyDashboard` - Points & rewards

### Home
- `HeroSection` - Hero banner
- `CollectionCarousel` - Featured collections
- `Testimonials` - Customer reviews

---

## Functionality Specification

### Virtual Try-On
- Request webcam permission
- Display video feed
- Overlay selected frame image
- Allow frame switching
- Capture screenshot
- Download/share image

### Catalog
- Fetch products (mock data)
- Filter by shape/material/brand/price
- Sort by price/popularity/new
- Pagination
- Search functionality

### Prescription Management
- CRUD operations for prescriptions
- Form validation
- Image upload preview
- Local storage persistence

### Style Quiz
- Multi-step wizard
- Progress indicator
- Results calculation
- Recommendation engine (simple)

### Booking System
- Form validation
- Date/time selection
- Confirmation flow
- Booking history

### Live Chat
- Toggle chat widget
- Send/receive messages
- Simulated responses
- Quick reply buttons

### Loyalty Program
- Display points balance
- Show tier progress
- List available rewards
- Points transaction history

---

## Acceptance Criteria

1. ✅ Homepage loads with all sections visible
2. ✅ Brand name "lensHub" displays with green "Hub"
3. ✅ Virtual try-on activates webcam and overlays frames
4. ✅ Catalog displays frames with filter/sort functionality
5. ✅ Prescription form saves and displays data
6. ✅ Style quiz completes all steps and shows results
7. ✅ Booking form validates and confirms appointments
8. ✅ Live chat opens and sends messages
9. ✅ Loyalty dashboard shows points and rewards
10. ✅ All pages are responsive on mobile/tablet/desktop
11. ✅ Smooth animations and transitions throughout
12. ✅ Navigation works between all pages

---

## Technical Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Zustand (state management)
- Framer Motion (animations)
- Lucide React (icons)
