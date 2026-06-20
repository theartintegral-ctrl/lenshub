# lensHub - Eyewear E-Commerce Platform

## Project Overview

**Project Name**: lensHub
**Type**: E-Commerce Web Application (React + TypeScript + Vite + Tailwind CSS)
**Core Functionality**: Premium eyewear e-commerce platform with catalog, prescription
management, style quiz, home eye exam booking and live chat
**Target Users**: Eyewear shoppers in Pimpri-Chinchwad seeking personalised
recommendations and convenient eye care services.

> Note: The Virtual Try-On feature has been removed from this build.

---

## Features Implemented

### 1. Comprehensive Catalog (`/catalog`)
- Frames categorized by shape (Round, Square, Aviator, Cat Eye, Rectangle, Oval)
- Frames categorized by material (Metal, Acetate, Titanium, Mixed, Wood)
- Filter (shape, material, price), sort, grid/list view, quick view modal
- Every frame card shows price (and discounted price where applicable)

### 2. Style Quiz (`/quiz`)
- 5-step wizard (Face Shape, Style, Color, Lifestyle, Budget)
- Personalised frame recommendations
- +50 loyalty points on completion

### 3. Favorites (`/favorites`)
- Save frames with the heart icon from any frame card
- Persists across sessions (localStorage via zustand)

### 4. Account hub (`/account`) — tabs:
- **Prescriptions**: Add/remove prescriptions with OD/OS (SPH, CYL, AXIS, ADD), PD, expiry tracking
- **Book Eye Exam**: Basic/Comprehensive exam booking with date/time/address, booking history, +25 loyalty points
- **Loyalty**: Points balance, tier progress (Bronze to Platinum), rewards redemption, points history

### 5. Live Chat
- Floating chat widget (toggle via header icon)
- Quick replies + simulated expert responses

### 6. Cart
- Add to bag from any frame card, slide-over cart drawer with totals

### 7. About / Contact (`/about`)
- Store address, phone, email, Instagram, embedded map

---

## Brand Identity

- **Brand Name**: lensHub (with "Hub" in emerald green #10B981)
- **Primary Color**: Emerald Green (#10B981)
- **Fonts**: DM Sans (body), Playfair Display (display)

---

## Contact Details

- **Address**: Chintamani Chowk, Near Mamta Sweets, Chinchwade Nagar, Sai Colony Road,
  Pimpri-Chinchwad, Maharashtra 411033
- **Phone**: +91 99753 42040
- **Instagram**: https://www.instagram.com/lenshubeyewear/

These are centralised in `src/data/site.ts` — update them there to change
across the whole site.

---

## Technical Stack

- React 18 + TypeScript
- Vite 7.x
- Tailwind CSS 3.4.x
- React Router DOM 6.x
- Zustand (state management, persisted to localStorage)
- Framer Motion / clsx
- Lucide React (icons)
- Headless UI (modal, cart drawer)

---

## Project Structure

```
src/
├── App.tsx              # Routes
├── main.tsx             # Entry point
├── index.css            # Global styles, fonts
├── components/
│   ├── common/          # Button, Card, Badge, Rating, Input, Select, Modal
│   ├── layout/           # Navbar, Footer, Layout
│   └── features/        # FrameCard, CartDrawer, ChatWidget
├── pages/
│   ├── HomePage.tsx
│   ├── CatalogPage.tsx
│   ├── FavoritesPage.tsx
│   ├── QuizPage.tsx
│   ├── AccountPage.tsx   # Prescriptions + Booking + Loyalty tabs
│   ├── AboutPage.tsx
│   └── NotFoundPage.tsx
├── store/                # Zustand store (favorites, cart, prescriptions, bookings, loyalty, chat)
├── data/                 # frames.ts (mock products), site.ts (contact info)
└── types/                # TypeScript interfaces
```

---

## Adding Lens Photos

Frame images are referenced from `/public/images/frames/<id>.jpg`. See
`public/images/frames/README.md` for the exact filenames needed (one per
frame in `src/data/frames.ts`). Drop matching images into that folder and
they'll appear automatically across Home and Catalog — no code changes
needed. Same approach applies to `/public/images/collections/`.

---

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
