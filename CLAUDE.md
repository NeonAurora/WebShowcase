# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context: Company Portfolio Website for Somaticx

This is an innovative, visually compelling portfolio website for Somaticx, a cutting-edge tech-biology startup. The website serves primarily as an engaging portfolio showcasing the company's impactful work, core values, expertise, and dedicated team.

### Purpose & Scope
- **Primary Function**: Portfolio showcasing company work, values, expertise, and team
- **Content Type**: Static or lightly dynamic content with minimal database operations
- **Focus Areas**: Project showcases, company introductions, and periodic updates

### Essential Website Sections
- **Core Pages**: Home, About, Portfolio, Services, Contact
- **Additional Pages**: Blog (articles and thought leadership), Careers (positions and application guidance), Documentation (product and technical guides)
- **Desirable Sections**: Testimonials, Blog, Careers
- **Optional Sections**: FAQs, detailed Case Studies, Press/Media coverage

### Visual Identity & Theme Requirements
- **Default Dark Mode**: Dark mode enabled by default for modern, sophisticated experience
- **Flexible Theming**: Light mode easily accessible with user preferences
- **Professional Aesthetics**: Explicit exclusion of emojis and Unicode icons
- **Typography**: Modern, clean fonts (Inter, Montserrat) with hierarchical consistency
- **Iconography**: High-quality SVG icon sets (Material Icons, Radix UI Icons, Lucide, Heroicons)

### Design Philosophy
- **Glassmorphism**: Glass-like panels, overlays, modals with gentle blurring and shadows
- **Interactive Elements**: Elevated buttons with animations and smooth transitions
- **Fluid Animations**: Smooth page transitions and micro-interactions
- **Minimalist Layout**: Grid-based responsive design with intuitive navigation
- **Professional Integrity**: Premium brand perception with visual coherence

### Signature Features
- Animated SVG logo introduction
- Custom navigation with active-state highlights
- Dynamic welcome banners
- Interactive showcase walls for awards
- Continuous newsroom ticker
- Sophisticated contact modals with animated feedback

## Development Commands

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Project Architecture

This is a Next.js 15 portfolio website for Somaticx, a bio-tech company, using the App Router with the following key characteristics:

### Core Technology Stack
- **Next.js 15** with App Router and Turbopack for development
- **React 19** with client components for interactivity
- **Material-UI v7** for component library (configured in `/src/components/providers/MuiThemeProvider.js`)
- **Tailwind CSS v4** for styling (configured via PostCSS)
- **Supabase** for backend services (client in `/src/lib/supabaseClient.js`)
- **Framer Motion** for animations
- **React Hook Form + Zod** for form handling and validation

### Theme System
The project uses a sophisticated dual-theme system:
- **Custom Theme Context** (`/src/context/ThemeContext.js`) - Comprehensive theme management with light/dark modes, system preference detection, and localStorage persistence
- **Design Tokens** (`/src/constants/Colors.js`) - Complete color palette with semantic naming
- **Material-UI Integration** - Synchronized theming between custom and MUI components

### Project Structure Patterns
- **Page-based routing** in `/src/app/` following Next.js App Router conventions
- **Feature-based components** organized by page/section (e.g., `/src/components/Home/`, `/src/components/Portfolio/`)
- **Shared components** in `/src/components/common/` and `/src/components/ui/`
- **Data layer** with static data files in `/src/data/` (projects, services, careers, etc.)
- **Context providers** for global state (Theme, Auth)
- **Custom hooks** in `/src/hooks/` for reusable logic

### Key Architectural Decisions
- **Client-side rendering** for interactive components (most components use `'use client'`)
- **Layout composition** using both App Router layout and custom Layout component
- **Provider nesting** in root layout: ThemeProvider → MaterialUIProvider → page content
- **Modular data management** with separate files for different content types
- **CSS custom properties** dynamically applied via ThemeContext for seamless theme switching

### Component Organization
Components follow a pattern of feature grouping with dedicated folders for major sections (About, Careers, Demo, Portfolio, Services, etc.), each containing specialized components like Hero sections, Cards, Modals, and Filters.

The `/src/components/common/` directory contains shared layout components (Header, Footer, Layout) while `/src/components/ui/` contains reusable UI primitives.

### Services Section Architecture
The Services section (`/src/components/Services/`) follows a comprehensive design pattern with professional glassy UI components:

- **ServicesHero** - Professional hero section with animated statistics cards, gradient backgrounds, and responsive layout
- **ServiceCategories** - Main container with enhanced header, statistics row, and call-to-action section
- **ServiceCard** - Individual service cards with glassy design, animated features, technology chips, and pricing
- **ServiceModal** - Detailed service modal with tabbed interface (Overview, Technical, Benefits) and scrollable content

#### Design Patterns Used
- **Glass Morphism**: `backdrop-filter: blur(20px)` with semi-transparent backgrounds
- **Material-UI Integration**: Complete MUI component usage with custom styling
- **Framer Motion Animations**: Smooth entrance/exit animations and hover effects
- **Theme Consistency**: Dynamic color integration using `useThemeColors` hook
- **Professional Typography**: Gradient text effects and responsive font scaling
- **No Unicode Characters**: All decorative elements use Material-UI icons

#### Hydration Safety
All Services components are wrapped with `ClientOnly` and use dynamic imports with `ssr: false` to prevent hydration mismatches while maintaining smooth loading experiences.

## Design Guidelines

### Visual Consistency & Aesthetic Clarity
- **Color Consistency**: Maintain strict color consistency across light/dark themes using the Colors.js system
- **Professional Icons**: Use professionally designed icons with consistent stroke width, size, and padding
- **No Emojis/Unicode**: Explicit exclusion of emojis and Unicode characters for professional aesthetics
- **Soft Visual Tone**: Apply subtle gradients, glows, avoiding loud animations
- **Limited Color Palette**: Stick to 2-3 primary and 1-2 accent colors maximum
- **Design Language**: All visual elements must look part of the same design system
- **Subtle Elevation**: Use gentle shadows and elevation to define hierarchy, not as gimmicks

### Layout & Spacing Guidelines
- **Compact Design**: Height-efficient components to reduce excessive scrolling on mobile
- **Balanced Spacing**: Maintain 8-16dp vertical spacing between cards, inputs, and sections
- **Breathing Room**: Avoid overcrowding, ensure every screen has adequate white space
- **Justified Alignment**: Don't center-align content unless specifically justified
- **Grid Alignment**: Cards, chips, and lists must align neatly in grids
- **Uniform Spacing**: Maintain consistent padding/margins, avoid pixel jumps
- **Safe Areas**: Respect safe areas and status bar heights on mobile devices

### Information Architecture & Typography
- **Clear Hierarchy**: Follow Heading > Subheading > Description > Metadata structure
- **Concise Content**: Use clear, short headings and simple messaging
- **Readability**: Ensure optimal line height, font size, and contrast ratios
- **Button Text**: Use concise labels ("Save", "Next", "Done", "Send")
- **Professional Fonts**: Modern, clean fonts (Inter, Montserrat) with hierarchical consistency

### Touch Interaction & Feedback
- **Touch Targets**: All tap areas must be at least 48x48dp (Material Guidelines)
- **Appropriate Sizing**: Buttons and icons should not be unnecessarily large
- **Interactive States**: Sophisticated hover and active states with subtle elevation
- **Smooth Transitions**: Predictable animations without sudden layout shifts
- **Feedback**: Provide clear visual feedback for all interactive elements

### Navigation & Accessibility
- **Consistent Navigation**: Respect default OS gestures and patterns
- **Accessibility**: Add aria-labels and hints for all interactive elements
- **Color Contrast**: Maintain WCAG 2.1 AA contrast ratios
- **Multi-modal Indicators**: Use text or icons as fallback, not color-only indicators
- **Text Scaling**: Ensure layout doesn't break with text resizing
- **Navigation Cues**: Use chevrons and arrows for navigation and expansion

### Performance & Platform Expectations
- **Material Design**: Follow Material Design principles and guidelines
- **Responsive Design**: Support dynamic layout scaling for varying screen sizes
- **Loading States**: Clean list rendering with placeholder skeletons
- **Smooth Rendering**: Avoid layout shifts, ensure predictable transitions
- **Optimized Assets**: Use optimized SVGs, images, and videos for performance

### Component Standards
- **Glass Morphism**: `backdrop-filter: blur(20px)` with semi-transparent backgrounds
- **Material-UI Integration**: Complete MUI component usage with custom styling
- **Framer Motion**: Smooth entrance/exit animations and hover effects
- **Theme Integration**: Dynamic color integration using `useThemeColors` hook
- **Professional Typography**: Gradient text effects and responsive font scaling
- **Icon Libraries**: Material Icons, Lucide, or Heroicons for consistent appearance

### Icon Usage Guidelines
- **CRITICAL**: Always verify icon names exist in Material-UI before use
- **Valid Icons**: Only use icons that are properly imported from `@mui/icons-material`
- **Common Valid Icons**: `CheckCircle`, `PlayArrow`, `VideoCall`, `MenuBook`, `Support`, `Close`, `AccessTime`, `BarChart`, `Warning`, `Launch`, `FilterList`, `Movie`, `VideoLibrary`, `Group`, `Person`, `Build`, `Schedule`, `AutoAwesome`, `ChevronRight`, `YouTube`, `Visibility`, `Add`
- **Invalid Icons**: Never use non-existent icons like `ResourceIcon` - always check documentation
- **Error Prevention**: Before using any icon, verify it exists in the Material-UI icon library
- **Professional Appearance**: Use consistent icon sizing and color theming across components

### Quality Checklist
- ✅ Unified color and icon theme
- ✅ Compact vertical design for mobile screen economy
- ✅ Minimal, clear labels and content
- ✅ Consistent padding and spacing
- ✅ Proper touch targets with feedback
- ✅ Light, subtle shadows and elevation
- ✅ Visual hierarchy properly maintained
- ✅ No center-aligned blocks unless justified
- ✅ Text is readable, never crammed
- ✅ No emojis or inconsistent visual style
- ✅ All interactive elements accessible
- ✅ App adapts well to light/dark modes