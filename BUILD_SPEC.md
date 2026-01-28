# Richmond Community College - Template Build Specifications
## Static HTML/Tailwind/Alpine.js Implementation

**Purpose:** Build static HTML prototypes of all 15 Ingeniux CMS templates for Richmond Community College website migration.

**Tech Stack:**
- HTML5 (static pages, no build process)
- Tailwind CSS v3 (CDN for rapid prototyping)
- Alpine.js v3 (lightweight interactivity)
- Lucide Icons (UI icons)
- Google Fonts: Crimson Text (headings), Open Sans (body)

**Design Reference:** https://richmondcc.vercel.app/

**Key Principles:**
- Each template represents a future Ingeniux CMS page schema
- Use semantic HTML with data attributes that map to future CMS fields
- Component structure mirrors Ingeniux tray/component architecture
- All interactive elements use Alpine.js (no React)
- Fully responsive (mobile-first Tailwind)

---

## Color Palette & Design Tokens

**Primary Colors:**
- Primary Crimson: `#9C1C32` (main brand color - headers, buttons, accents)
- Primary Crimson Dark: `#8A1A2E` (hover states)
- Accent Pink: `#CE2D54` (secondary buttons, highlights)
- Light Pink: `#FCE7EB` (light backgrounds, icon backgrounds)
- Pink 200: `#F9D0D8` (borders, subtle accents)
- Pink 300: `#F4A8B8` (hover backgrounds)

**Neutral Colors:**
- White: `#FFFFFF`
- Slate 50: `#F8FAFC` (light section backgrounds)
- Slate 100: `#F1F5F9` (alternate backgrounds)
- Slate 200: `#E2E8F0` (borders, dividers)
- Slate 400: `#94A3B8` (muted text)
- Slate 500: `#64748B` (secondary text)
- Slate 600: `#475569` (body text)
- Slate 700: `#334155` (dark text)
- Slate 800: `#1E293B` (footer secondary)
- Slate 900: `#0F172A` (footer background)

**Typography:**
- Heading Font: `"Crimson Text", serif` - Italic style for main headings
- Body Font: `"Open Sans", sans-serif`
- Base font size: 16px
- Line height body: 1.6
- Line height headings: 1.2

**Spacing:**
- Section padding: `py-20` (desktop), `py-16` (tablet), `py-12` (mobile)
- Container max-width: `max-w-7xl` (1280px)
- Grid gaps: `gap-6` or `gap-8`

**Border Radius:**
- Cards: `rounded-xl` (12px)
- Buttons: `rounded-lg` (8px)
- Small elements: `rounded-full` for pills/badges

**Shadows:**
- Cards: `shadow-lg` with subtle border
- Hover: `shadow-xl` transition

---

## Tailwind Config (add to script tag)

```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          'crimson': {
            50: '#FCE7EB',
            100: '#F9D0D8',
            200: '#F4A8B8',
            300: '#E87A94',
            400: '#CE2D54',
            500: '#9C1C32',
            600: '#8A1A2E',
            700: '#6B1425',
            800: '#4D0F1B',
            900: '#2E0910',
          }
        },
        fontFamily: {
          'heading': ['"Crimson Text"', 'serif'],
          'body': ['"Open Sans"', 'sans-serif'],
        }
      }
    }
  }
</script>
```

---

## Global Components (Reusable Across All Templates)

### Head Section (include in all pages)
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title data-cms-field="title">Richmond Community College | Your Path to Success Starts Here</title>
  <meta name="description" content="..." data-cms-field="metaDescription">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <!-- Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Tailwind Config -->
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'crimson': {
              50: '#FCE7EB',
              100: '#F9D0D8',
              200: '#F4A8B8',
              300: '#E87A94',
              400: '#CE2D54',
              500: '#9C1C32',
              600: '#8A1A2E',
              700: '#6B1425',
              800: '#4D0F1B',
              900: '#2E0910',
            }
          },
          fontFamily: {
            'heading': ['"Crimson Text"', 'serif'],
            'body': ['"Open Sans"', 'sans-serif'],
          }
        }
      }
    }
  </script>

  <!-- Alpine.js -->
  <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>

  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <style>
    body {
      font-family: 'Open Sans', sans-serif;
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Crimson Text', serif;
    }
    .font-heading {
      font-family: 'Crimson Text', serif;
    }
  </style>
</head>
```

### Header Component
```html
<!-- /includes/header.html -->
<header class="w-full" x-data="{ mobileMenuOpen: false, openMenu: null }" data-cms-component="header">

  <!-- Top Utility Bar - Crimson Background -->
  <div class="bg-crimson-500 text-white py-2">
    <div class="max-w-7xl mx-auto px-4 flex items-center justify-between text-sm">
      <!-- Left: Contact Info -->
      <div class="flex items-center space-x-4">
        <a href="tel:9104101700" class="flex items-center space-x-1 hover:text-crimson-100">
          <i data-lucide="phone" class="w-4 h-4"></i>
          <span>(910) 410-1700</span>
        </a>
        <span class="flex items-center space-x-1">
          <i data-lucide="map-pin" class="w-4 h-4"></i>
          <span>Hamlet, NC</span>
        </span>
      </div>

      <!-- Right: Quick Links -->
      <div class="hidden md:flex items-center space-x-4">
        <a href="/apply" class="hover:text-crimson-100">Apply Now</a>
        <a href="/pay-tuition" class="hover:text-crimson-100">Pay Tuition</a>
        <a href="/self-service" class="hover:text-crimson-100">Self-Service</a>
      </div>
    </div>
  </div>

  <!-- Main Navigation Bar - White Background -->
  <div class="bg-white border-b border-slate-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-20">

        <!-- Logo -->
        <a href="/" class="flex items-center space-x-3">
          <img src="/images/logo.svg" alt="Richmond Community College" class="h-14">
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-1">
          <!-- Admissions Dropdown -->
          <div class="relative" @mouseenter="openMenu = 'admissions'" @mouseleave="openMenu = null">
            <button class="px-4 py-2 text-slate-700 hover:text-crimson-500 font-medium flex items-center space-x-1">
              <span>Admissions</span>
              <i data-lucide="chevron-down" class="w-4 h-4"></i>
            </button>
            <!-- Dropdown menu -->
            <div x-show="openMenu === 'admissions'"
                 x-transition:enter="transition ease-out duration-200"
                 x-transition:enter-start="opacity-0 translate-y-1"
                 x-transition:enter-end="opacity-100 translate-y-0"
                 class="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50">
              <a href="/admissions/apply" class="block px-4 py-2 text-slate-700 hover:bg-crimson-50 hover:text-crimson-500">Apply Now</a>
              <a href="/admissions/financial-aid" class="block px-4 py-2 text-slate-700 hover:bg-crimson-50 hover:text-crimson-500">Financial Aid</a>
              <a href="/admissions/tuition" class="block px-4 py-2 text-slate-700 hover:bg-crimson-50 hover:text-crimson-500">Tuition & Fees</a>
              <a href="/admissions/visit" class="block px-4 py-2 text-slate-700 hover:bg-crimson-50 hover:text-crimson-500">Visit Campus</a>
            </div>
          </div>

          <!-- Academics Dropdown -->
          <div class="relative" @mouseenter="openMenu = 'academics'" @mouseleave="openMenu = null">
            <button class="px-4 py-2 text-slate-700 hover:text-crimson-500 font-medium flex items-center space-x-1">
              <span>Academics</span>
              <i data-lucide="chevron-down" class="w-4 h-4"></i>
            </button>
            <div x-show="openMenu === 'academics'"
                 x-transition
                 class="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50">
              <a href="/academics/programs" class="block px-4 py-2 text-slate-700 hover:bg-crimson-50 hover:text-crimson-500">Programs of Study</a>
              <a href="/academics/catalog" class="block px-4 py-2 text-slate-700 hover:bg-crimson-50 hover:text-crimson-500">Course Catalog</a>
              <a href="/academics/schedule" class="block px-4 py-2 text-slate-700 hover:bg-crimson-50 hover:text-crimson-500">Class Schedule</a>
              <a href="/academics/online" class="block px-4 py-2 text-slate-700 hover:bg-crimson-50 hover:text-crimson-500">Online Learning</a>
            </div>
          </div>

          <!-- Student Services Dropdown -->
          <div class="relative" @mouseenter="openMenu = 'services'" @mouseleave="openMenu = null">
            <button class="px-4 py-2 text-slate-700 hover:text-crimson-500 font-medium flex items-center space-x-1">
              <span>Student Services</span>
              <i data-lucide="chevron-down" class="w-4 h-4"></i>
            </button>
            <div x-show="openMenu === 'services'" x-transition
                 class="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50">
              <a href="/student-services/advising" class="block px-4 py-2 text-slate-700 hover:bg-crimson-50 hover:text-crimson-500">Academic Advising</a>
              <a href="/student-services/library" class="block px-4 py-2 text-slate-700 hover:bg-crimson-50 hover:text-crimson-500">Library</a>
              <a href="/student-services/tutoring" class="block px-4 py-2 text-slate-700 hover:bg-crimson-50 hover:text-crimson-500">Tutoring Center</a>
              <a href="/student-services/career" class="block px-4 py-2 text-slate-700 hover:bg-crimson-50 hover:text-crimson-500">Career Services</a>
            </div>
          </div>

          <!-- About Us Dropdown -->
          <div class="relative" @mouseenter="openMenu = 'about'" @mouseleave="openMenu = null">
            <button class="px-4 py-2 text-slate-700 hover:text-crimson-500 font-medium flex items-center space-x-1">
              <span>About Us</span>
              <i data-lucide="chevron-down" class="w-4 h-4"></i>
            </button>
            <div x-show="openMenu === 'about'" x-transition
                 class="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50">
              <a href="/about/mission" class="block px-4 py-2 text-slate-700 hover:bg-crimson-50 hover:text-crimson-500">Mission & Vision</a>
              <a href="/about/leadership" class="block px-4 py-2 text-slate-700 hover:bg-crimson-50 hover:text-crimson-500">Leadership</a>
              <a href="/about/news" class="block px-4 py-2 text-slate-700 hover:bg-crimson-50 hover:text-crimson-500">News</a>
              <a href="/about/careers" class="block px-4 py-2 text-slate-700 hover:bg-crimson-50 hover:text-crimson-500">Work at RCC</a>
            </div>
          </div>

          <!-- Contact Us Dropdown -->
          <div class="relative" @mouseenter="openMenu = 'contact'" @mouseleave="openMenu = null">
            <button class="px-4 py-2 text-slate-700 hover:text-crimson-500 font-medium flex items-center space-x-1">
              <span>Contact Us</span>
              <i data-lucide="chevron-down" class="w-4 h-4"></i>
            </button>
            <div x-show="openMenu === 'contact'" x-transition
                 class="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50">
              <a href="/contact/locations" class="block px-4 py-2 text-slate-700 hover:bg-crimson-50 hover:text-crimson-500">Campus Locations</a>
              <a href="/contact/directory" class="block px-4 py-2 text-slate-700 hover:bg-crimson-50 hover:text-crimson-500">Directory</a>
              <a href="/contact/request-info" class="block px-4 py-2 text-slate-700 hover:bg-crimson-50 hover:text-crimson-500">Request Info</a>
            </div>
          </div>
        </nav>

        <!-- Search Icon -->
        <button class="hidden lg:flex items-center justify-center w-10 h-10 text-slate-600 hover:text-crimson-500">
          <i data-lucide="search" class="w-5 h-5"></i>
        </button>

        <!-- Mobile Menu Toggle -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden p-2 text-slate-700">
          <i data-lucide="menu" class="w-6 h-6" x-show="!mobileMenuOpen"></i>
          <i data-lucide="x" class="w-6 h-6" x-show="mobileMenuOpen"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div x-show="mobileMenuOpen"
         x-transition:enter="transition ease-out duration-200"
         x-transition:enter-start="opacity-0 -translate-y-2"
         x-transition:enter-end="opacity-100 translate-y-0"
         class="lg:hidden bg-white border-t border-slate-200 py-4">
      <nav class="max-w-7xl mx-auto px-4 space-y-2">
        <a href="/admissions" class="block py-2 text-slate-700 font-medium">Admissions</a>
        <a href="/academics" class="block py-2 text-slate-700 font-medium">Academics</a>
        <a href="/student-services" class="block py-2 text-slate-700 font-medium">Student Services</a>
        <a href="/about" class="block py-2 text-slate-700 font-medium">About Us</a>
        <a href="/contact" class="block py-2 text-slate-700 font-medium">Contact Us</a>
        <div class="pt-4 border-t border-slate-200 space-y-2">
          <a href="/apply" class="block py-2 text-crimson-500 font-medium">Apply Now</a>
          <a href="/pay-tuition" class="block py-2 text-crimson-500 font-medium">Pay Tuition</a>
        </div>
      </nav>
    </div>
  </div>
</header>
```

### Footer Component
```html
<!-- /includes/footer.html -->
<footer class="bg-slate-900 text-slate-300" data-cms-component="footer">
  <div class="max-w-7xl mx-auto px-4 py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

      <!-- Column 1: Logo & About -->
      <div>
        <img src="/images/logo-white.svg" alt="Richmond Community College" class="h-12 mb-6">
        <p class="text-slate-400 text-sm leading-relaxed mb-6">
          Personalized, quality instruction at a manageable cost. Building brighter futures in Richmond County since 1964.
        </p>
        <!-- Social Icons -->
        <div class="flex items-center space-x-3">
          <a href="#" class="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-crimson-500 transition">
            <i data-lucide="facebook" class="w-5 h-5"></i>
          </a>
          <a href="#" class="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-crimson-500 transition">
            <i data-lucide="twitter" class="w-5 h-5"></i>
          </a>
          <a href="#" class="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-crimson-500 transition">
            <i data-lucide="instagram" class="w-5 h-5"></i>
          </a>
          <a href="#" class="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-crimson-500 transition">
            <i data-lucide="youtube" class="w-5 h-5"></i>
          </a>
        </div>
      </div>

      <!-- Column 2: Quick Links -->
      <div>
        <h3 class="text-white font-semibold text-lg mb-6">Quick Links</h3>
        <ul class="space-y-3">
          <li><a href="/academics/programs" class="flex items-center space-x-2 text-slate-400 hover:text-white transition">
            <i data-lucide="chevron-right" class="w-4 h-4 text-crimson-400"></i>
            <span>Academic Programs</span>
          </a></li>
          <li><a href="/admissions" class="flex items-center space-x-2 text-slate-400 hover:text-white transition">
            <i data-lucide="chevron-right" class="w-4 h-4 text-crimson-400"></i>
            <span>Admissions</span>
          </a></li>
          <li><a href="/financial-aid" class="flex items-center space-x-2 text-slate-400 hover:text-white transition">
            <i data-lucide="chevron-right" class="w-4 h-4 text-crimson-400"></i>
            <span>Financial Aid</span>
          </a></li>
          <li><a href="/student-services" class="flex items-center space-x-2 text-slate-400 hover:text-white transition">
            <i data-lucide="chevron-right" class="w-4 h-4 text-crimson-400"></i>
            <span>Student Services</span>
          </a></li>
          <li><a href="/campus-life" class="flex items-center space-x-2 text-slate-400 hover:text-white transition">
            <i data-lucide="chevron-right" class="w-4 h-4 text-crimson-400"></i>
            <span>Campus Life</span>
          </a></li>
        </ul>
      </div>

      <!-- Column 3: Contact Us -->
      <div>
        <h3 class="text-white font-semibold text-lg mb-6">Contact Us</h3>
        <ul class="space-y-4">
          <li class="flex items-start space-x-3">
            <i data-lucide="map-pin" class="w-5 h-5 text-crimson-400 mt-0.5"></i>
            <span class="text-slate-400">1042 W Hamlet Ave<br>Hamlet, NC 28345</span>
          </li>
          <li class="flex items-center space-x-3">
            <i data-lucide="phone" class="w-5 h-5 text-crimson-400"></i>
            <a href="tel:9104101700" class="text-slate-400 hover:text-white transition">(910) 410-1700</a>
          </li>
          <li class="flex items-center space-x-3">
            <i data-lucide="mail" class="w-5 h-5 text-crimson-400"></i>
            <a href="mailto:info@richmondcc.edu" class="text-slate-400 hover:text-white transition">info@richmondcc.edu</a>
          </li>
        </ul>
      </div>

      <!-- Column 4: Our Campuses -->
      <div>
        <h3 class="text-white font-semibold text-lg mb-6">Our Campuses</h3>
        <ul class="space-y-4">
          <li class="flex items-start space-x-3">
            <i data-lucide="building" class="w-5 h-5 text-crimson-400 mt-0.5"></i>
            <div>
              <span class="text-white font-medium">Hamlet Campus</span>
              <span class="block text-slate-500 text-sm">Main Campus</span>
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <i data-lucide="building" class="w-5 h-5 text-crimson-400 mt-0.5"></i>
            <div>
              <span class="text-white font-medium">Scotland County Campus</span>
              <span class="block text-slate-500 text-sm">Satellite Location</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Bottom Bar -->
  <div class="border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 py-6">
      <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p class="text-slate-500 text-sm">
          &copy; 2026 Richmond Community College. All rights reserved.
        </p>
        <div class="flex items-center space-x-6 text-sm">
          <a href="/privacy" class="text-slate-500 hover:text-white transition">Privacy Policy</a>
          <a href="/accessibility" class="text-slate-500 hover:text-white transition">Accessibility</a>
          <a href="/title-ix" class="text-slate-500 hover:text-white transition">Title IX</a>
          <a href="/non-discrimination" class="text-slate-500 hover:text-white transition">Non-Discrimination</a>
        </div>
      </div>
    </div>
  </div>
</footer>
```

### Breadcrumbs Component
```html
<!-- data-cms-component="breadcrumbs" data-cms-navigation="ancestors" -->
<nav class="bg-slate-50 border-b border-slate-200 py-3">
  <div class="max-w-7xl mx-auto px-4">
    <ol class="flex items-center space-x-2 text-sm">
      <li><a href="/" class="text-slate-500 hover:text-crimson-500 transition">Home</a></li>
      <li class="text-slate-400">/</li>
      <li><a href="/academics" class="text-slate-500 hover:text-crimson-500 transition">Academics</a></li>
      <li class="text-slate-400">/</li>
      <li class="text-slate-900 font-medium">Programs</li>
    </ol>
  </div>
</nav>
```

---

## Button Styles

```html
<!-- Primary Button - Solid Crimson -->
<a href="#" class="inline-flex items-center justify-center px-6 py-3 bg-crimson-500 text-white font-semibold rounded-lg hover:bg-crimson-600 transition shadow-lg shadow-crimson-500/25">
  <i data-lucide="file-text" class="w-5 h-5 mr-2"></i>
  Apply Now
</a>

<!-- Secondary Button - White with Crimson text -->
<a href="#" class="inline-flex items-center justify-center px-6 py-3 bg-white text-crimson-500 font-semibold rounded-lg border-2 border-crimson-200 hover:bg-crimson-50 hover:border-crimson-300 transition">
  <i data-lucide="heart" class="w-5 h-5 mr-2"></i>
  Financial Aid
</a>

<!-- Accent Button - Pink/Rose -->
<a href="#" class="inline-flex items-center justify-center px-6 py-3 bg-crimson-400 text-white font-semibold rounded-lg hover:bg-crimson-500 transition">
  <i data-lucide="phone" class="w-5 h-5 mr-2"></i>
  Contact Us
</a>

<!-- Ghost Button - Transparent with border (for dark backgrounds) -->
<a href="#" class="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/10 transition">
  View Programs
  <i data-lucide="graduation-cap" class="w-5 h-5 ml-2"></i>
</a>

<!-- Link Style Button -->
<a href="#" class="inline-flex items-center text-crimson-500 font-semibold hover:text-crimson-600 transition">
  Get Started
  <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>
</a>
```

---

## TEMPLATE 1: Home

**File:** `/index.html`
**Schema Elements:** Title, Meta Description, Alert Banner (optional), Tray Container (list of components)
**Template Type:** Homepage (unique single instance)

### Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Include head section from above -->
</head>
<body class="bg-white font-body">

  <!-- Header -->
  <!-- Include header component -->

  <main data-cms-element="trays" data-cms-type="component-list">

    <!-- ============================================ -->
    <!-- TRAY 1: Hero Carousel -->
    <!-- ============================================ -->
    <section class="relative"
             data-cms-component="hero-carousel"
             x-data="{ currentSlide: 0, totalSlides: 4 }">

      <!-- Slide 1 -->
      <div x-show="currentSlide === 0"
           x-transition:enter="transition ease-out duration-500"
           x-transition:enter-start="opacity-0"
           x-transition:enter-end="opacity-100"
           class="relative min-h-[600px] bg-cover bg-center"
           style="background-image: url('/images/hero-students.jpg')">

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/40"></div>

        <!-- Content -->
        <div class="relative max-w-7xl mx-auto px-4 py-24 min-h-[600px] flex items-center">
          <div class="max-w-2xl">
            <!-- Badge -->
            <div class="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <i data-lucide="map-pin" class="w-4 h-4 text-white"></i>
              <span class="text-white text-sm font-medium">Local College, Big Impact</span>
            </div>

            <!-- Heading - Italic Crimson Text font -->
            <h1 class="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight" data-cms-field="heading">
              <span class="italic">Building Brighter</span><br>
              <span class="italic text-crimson-200">Futures</span>
            </h1>

            <!-- Subheading -->
            <p class="text-xl text-white/90 mb-8 leading-relaxed" data-cms-field="subheading">
              Personalized, quality instruction at a manageable cost. Start your career, finish your degree, or gain new skills at Richmond Community College.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap gap-4" data-cms-field="ctaButtons">
              <a href="/admissions/apply" class="inline-flex items-center px-6 py-3 bg-white text-crimson-500 font-semibold rounded-lg hover:bg-slate-100 transition">
                Get Started
                <i data-lucide="arrow-right" class="w-5 h-5 ml-2"></i>
              </a>
              <a href="/academics/programs" class="inline-flex items-center px-6 py-3 bg-crimson-400 text-white font-semibold rounded-lg hover:bg-crimson-500 transition">
                View Programs
                <i data-lucide="graduation-cap" class="w-5 h-5 ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional slides (2-4) follow same pattern -->

      <!-- Navigation Arrows -->
      <button @click="currentSlide = (currentSlide - 1 + totalSlides) % totalSlides"
              class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition">
        <i data-lucide="chevron-left" class="w-6 h-6"></i>
      </button>
      <button @click="currentSlide = (currentSlide + 1) % totalSlides"
              class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition">
        <i data-lucide="chevron-right" class="w-6 h-6"></i>
      </button>

      <!-- Dots Navigation -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-2">
        <template x-for="i in totalSlides" :key="i">
          <button @click="currentSlide = i - 1"
                  :class="currentSlide === i - 1 ? 'w-8 bg-white' : 'w-3 bg-white/50'"
                  class="h-3 rounded-full transition-all duration-300"></button>
        </template>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- TRAY 2: Who Are You? - Audience Cards -->
    <!-- ============================================ -->
    <section class="py-20 bg-slate-50"
             data-cms-component="audience-cards">
      <div class="max-w-7xl mx-auto px-4">

        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="font-heading text-4xl md:text-5xl text-slate-900 italic mb-4" data-cms-field="heading">
            Who Are You?
          </h2>
          <p class="text-lg text-slate-600 max-w-2xl mx-auto" data-cms-field="subheading">
            Find the resources and information designed specifically for your journey at Richmond CC.
          </p>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-cms-field="cards">

          <!-- Card 1: Future Students -->
          <a href="/future-students" class="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
            <div class="aspect-[4/3] overflow-hidden">
              <img src="/images/future-students.jpg" alt="Future Students" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-6">
              <!-- Icon -->
              <div class="w-12 h-12 bg-crimson-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-crimson-100 transition">
                <i data-lucide="user-plus" class="w-6 h-6 text-crimson-500"></i>
              </div>
              <h3 class="font-heading text-xl text-slate-900 font-semibold mb-2" data-cms-field="cardTitle">
                Future Students
              </h3>
              <p class="text-slate-600 text-sm mb-4" data-cms-field="cardDescription">
                Explore programs, apply for admission, and discover financial aid opportunities.
              </p>
              <span class="inline-flex items-center text-crimson-500 font-semibold text-sm group-hover:text-crimson-600 transition">
                Get Started
                <i data-lucide="arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"></i>
              </span>
            </div>
          </a>

          <!-- Card 2: Current Students -->
          <a href="/current-students" class="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
            <div class="aspect-[4/3] overflow-hidden">
              <img src="/images/current-students.jpg" alt="Current Students" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-6">
              <div class="w-12 h-12 bg-crimson-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-crimson-100 transition">
                <i data-lucide="book-open" class="w-6 h-6 text-crimson-500"></i>
              </div>
              <h3 class="font-heading text-xl text-slate-900 font-semibold mb-2">
                Current Students
              </h3>
              <p class="text-slate-600 text-sm mb-4">
                Access your courses, schedules, grades, and student resources all in one place.
              </p>
              <span class="inline-flex items-center text-crimson-500 font-semibold text-sm group-hover:text-crimson-600 transition">
                Student Portal
                <i data-lucide="arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"></i>
              </span>
            </div>
          </a>

          <!-- Card 3: Faculty & Staff -->
          <a href="/faculty-staff" class="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
            <div class="aspect-[4/3] overflow-hidden">
              <img src="/images/faculty-staff.jpg" alt="Faculty & Staff" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-6">
              <div class="w-12 h-12 bg-crimson-500 rounded-xl flex items-center justify-center mb-4">
                <i data-lucide="users" class="w-6 h-6 text-white"></i>
              </div>
              <h3 class="font-heading text-xl text-crimson-500 font-semibold mb-2">
                Faculty & Staff
              </h3>
              <p class="text-slate-600 text-sm mb-4">
                Access employee resources, professional development, and administrative tools.
              </p>
              <span class="inline-flex items-center text-crimson-500 font-semibold text-sm group-hover:text-crimson-600 transition">
                Employee Portal
                <i data-lucide="arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"></i>
              </span>
            </div>
          </a>

          <!-- Card 4: Workforce Training -->
          <a href="/workforce" class="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
            <div class="aspect-[4/3] overflow-hidden">
              <img src="/images/workforce.jpg" alt="Workforce Training" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-6">
              <div class="w-12 h-12 bg-crimson-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-crimson-100 transition">
                <i data-lucide="building-2" class="w-6 h-6 text-crimson-500"></i>
              </div>
              <h3 class="font-heading text-xl text-slate-900 font-semibold mb-2">
                Workforce Training
              </h3>
              <p class="text-slate-600 text-sm mb-4">
                Continuing education, professional certifications, and customized training solutions.
              </p>
              <span class="inline-flex items-center text-crimson-500 font-semibold text-sm group-hover:text-crimson-600 transition">
                Explore Options
                <i data-lucide="arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"></i>
              </span>
            </div>
          </a>

        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- TRAY 3: By The Numbers - Stats Section -->
    <!-- ============================================ -->
    <section class="relative py-20 bg-crimson-500 overflow-hidden"
             data-cms-component="stats-section">

      <!-- Decorative curved shapes -->
      <div class="absolute top-0 left-0 w-64 h-64 bg-crimson-400/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-crimson-600/30 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div class="relative max-w-7xl mx-auto px-4">

        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="font-heading text-4xl md:text-5xl text-white italic mb-4" data-cms-field="heading">
            Richmond CC By the Numbers
          </h2>
          <p class="text-lg text-white/80" data-cms-field="subheading">
            Excellence in education, affordability in action
          </p>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8" data-cms-field="stats">

          <!-- Stat 1 -->
          <div class="text-center" data-cms-field="stat">
            <div class="text-5xl md:text-6xl font-bold text-white mb-2" data-cms-field="number">
              60<span class="text-crimson-200">+</span>
            </div>
            <div class="text-sm uppercase tracking-wider text-white/80" data-cms-field="label">
              Academic Programs
            </div>
          </div>

          <!-- Stat 2 -->
          <div class="text-center">
            <div class="text-5xl md:text-6xl font-bold text-white mb-2">
              <span class="text-crimson-200">$</span>76
            </div>
            <div class="text-sm uppercase tracking-wider text-white/80">
              Per Credit Hour
            </div>
          </div>

          <!-- Stat 3 -->
          <div class="text-center">
            <div class="text-5xl md:text-6xl font-bold text-white mb-2">
              15<span class="text-crimson-200">:</span>1
            </div>
            <div class="text-sm uppercase tracking-wider text-white/80">
              Student-Faculty Ratio
            </div>
          </div>

          <!-- Stat 4 -->
          <div class="text-center">
            <div class="text-5xl md:text-6xl font-bold text-white mb-2">
              95<span class="text-crimson-200">%</span>
            </div>
            <div class="text-sm uppercase tracking-wider text-white/80">
              Job Placement
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- TRAY 4: CTA Section - Ready to Transform -->
    <!-- ============================================ -->
    <section class="relative py-20 bg-slate-50 overflow-hidden"
             data-cms-component="cta-section">

      <!-- Decorative curved shapes (crimson, subtle) -->
      <div class="absolute top-0 left-0 w-72 h-72 bg-crimson-100/50 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-crimson-100/50 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div class="relative max-w-4xl mx-auto px-4 text-center">

        <h2 class="font-heading text-4xl md:text-5xl text-slate-900 italic mb-6" data-cms-field="heading">
          Ready to Transform Your Future?
        </h2>

        <p class="text-lg text-slate-600 mb-10 max-w-2xl mx-auto" data-cms-field="bodyText">
          Join thousands of students who have launched successful careers through Richmond Community College. Take the first step toward achieving your goals today.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap justify-center gap-4" data-cms-field="ctaButtons">
          <a href="/apply" class="inline-flex items-center px-8 py-4 bg-crimson-500 text-white font-semibold rounded-lg hover:bg-crimson-600 transition shadow-lg shadow-crimson-500/25">
            <i data-lucide="file-text" class="w-5 h-5 mr-2"></i>
            Apply Now
          </a>
          <a href="/financial-aid" class="inline-flex items-center px-8 py-4 bg-white text-crimson-500 font-semibold rounded-lg border-2 border-crimson-200 hover:bg-crimson-50 hover:border-crimson-300 transition">
            <i data-lucide="heart" class="w-5 h-5 mr-2"></i>
            Financial Aid
          </a>
          <a href="/contact" class="inline-flex items-center px-8 py-4 bg-crimson-400 text-white font-semibold rounded-lg hover:bg-crimson-500 transition">
            <i data-lucide="phone" class="w-5 h-5 mr-2"></i>
            Contact Us
          </a>
        </div>

      </div>
    </section>

    <!-- ============================================ -->
    <!-- TRAY 5: News & Events -->
    <!-- ============================================ -->
    <section class="py-20 bg-white"
             data-cms-component="news-events">
      <div class="max-w-7xl mx-auto px-4">

        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="font-heading text-4xl md:text-5xl text-slate-900 italic mb-4" data-cms-field="heading">
            News & Events
          </h2>
          <p class="text-lg text-slate-600" data-cms-field="subheading">
            Stay connected with what's happening at Richmond CC
          </p>
        </div>

        <!-- Two Column Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <!-- Left Column: Latest News -->
          <div>
            <div class="flex items-center justify-between mb-6">
              <h3 class="flex items-center text-xl font-semibold text-crimson-500">
                <i data-lucide="newspaper" class="w-5 h-5 mr-2"></i>
                Latest News
              </h3>
              <a href="/news" class="text-crimson-500 font-medium hover:text-crimson-600 transition inline-flex items-center">
                View All
                <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
              </a>
            </div>

            <div class="space-y-6" data-cms-field="newsItems" data-cms-auto="latest-3">

              <!-- News Item 1 -->
              <article class="border-l-4 border-crimson-500 pl-4">
                <time class="text-sm text-slate-500">January 15, 2026</time>
                <h4 class="font-semibold text-slate-900 mt-1 mb-2">
                  <a href="#" class="hover:text-crimson-500 transition">Spring Semester Registration Now Open</a>
                </h4>
                <p class="text-slate-600 text-sm">
                  Plan your path to success! Register now for spring classes with flexible day, evening, and online options available.
                </p>
              </article>

              <!-- News Item 2 -->
              <article class="border-l-4 border-slate-200 pl-4">
                <time class="text-sm text-slate-500">January 10, 2026</time>
                <h4 class="font-semibold text-slate-900 mt-1 mb-2">
                  <a href="#" class="hover:text-crimson-500 transition">New Allied Health Building Groundbreaking</a>
                </h4>
                <p class="text-slate-600 text-sm">
                  Richmond CC breaks ground on state-of-the-art Allied Health facility to expand nursing and medical programs.
                </p>
              </article>

              <!-- News Item 3 - Featured -->
              <article class="border-l-4 border-slate-200 pl-4">
                <div class="flex items-center gap-2">
                  <time class="text-sm text-slate-500">January 5, 2026</time>
                  <span class="px-2 py-0.5 bg-crimson-100 text-crimson-600 text-xs font-medium rounded">Featured</span>
                </div>
                <h4 class="font-semibold text-slate-900 mt-1 mb-2">
                  <a href="#" class="hover:text-crimson-500 transition">100+ Scholarships Available for 2026</a>
                </h4>
                <p class="text-slate-600 text-sm">
                  Apply now for over $250,000 in scholarship opportunities to help fund your education at Richmond CC.
                </p>
              </article>

            </div>
          </div>

          <!-- Right Column: Upcoming Events -->
          <div>
            <div class="flex items-center justify-between mb-6">
              <h3 class="flex items-center text-xl font-semibold text-crimson-500">
                <i data-lucide="calendar" class="w-5 h-5 mr-2"></i>
                Upcoming Events
              </h3>
              <a href="/events" class="text-crimson-500 font-medium hover:text-crimson-600 transition inline-flex items-center">
                Full Calendar
                <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
              </a>
            </div>

            <div class="space-y-4" data-cms-field="eventItems" data-cms-auto="upcoming-4">

              <!-- Event 1 -->
              <a href="#" class="flex items-start space-x-4 p-4 rounded-xl border border-slate-200 hover:border-crimson-200 hover:bg-crimson-50/50 transition group">
                <div class="flex-shrink-0 w-14 h-14 bg-crimson-500 rounded-xl flex flex-col items-center justify-center text-white">
                  <span class="text-lg font-bold leading-none">25</span>
                  <span class="text-xs uppercase">JAN</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-semibold text-slate-900 group-hover:text-crimson-500 transition">Welcome Back Day</h4>
                  <p class="text-sm text-slate-600">Join us for student activities, free food, and campus tours</p>
                  <div class="flex items-center mt-2 text-xs text-slate-500">
                    <i data-lucide="clock" class="w-3 h-3 mr-1"></i>
                    10:00 AM - 2:00 PM
                  </div>
                </div>
              </a>

              <!-- Event 2 - Featured -->
              <a href="#" class="flex items-start space-x-4 p-4 rounded-xl border border-slate-200 hover:border-crimson-200 hover:bg-crimson-50/50 transition group">
                <div class="flex-shrink-0 w-14 h-14 bg-crimson-500 rounded-xl flex flex-col items-center justify-center text-white">
                  <span class="text-lg font-bold leading-none">30</span>
                  <span class="text-xs uppercase">JAN</span>
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-2">
                    <h4 class="font-semibold text-slate-900 group-hover:text-crimson-500 transition">Career Fair 2026</h4>
                    <span class="px-2 py-0.5 bg-crimson-100 text-crimson-600 text-xs font-medium rounded">Featured</span>
                  </div>
                  <p class="text-sm text-slate-600">Meet local employers and explore career opportunities</p>
                  <div class="flex items-center mt-2 text-xs text-slate-500">
                    <i data-lucide="clock" class="w-3 h-3 mr-1"></i>
                    1:00 PM - 4:00 PM
                  </div>
                </div>
              </a>

              <!-- Event 3 -->
              <a href="#" class="flex items-start space-x-4 p-4 rounded-xl border border-slate-200 hover:border-crimson-200 hover:bg-crimson-50/50 transition group">
                <div class="flex-shrink-0 w-14 h-14 bg-crimson-500 rounded-xl flex flex-col items-center justify-center text-white">
                  <span class="text-lg font-bold leading-none">05</span>
                  <span class="text-xs uppercase">FEB</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-semibold text-slate-900 group-hover:text-crimson-500 transition">Financial Aid Workshop</h4>
                  <p class="text-sm text-slate-600">Learn how to apply for FAFSA and scholarships</p>
                  <div class="flex items-center mt-2 text-xs text-slate-500">
                    <i data-lucide="clock" class="w-3 h-3 mr-1"></i>
                    6:00 PM - 7:30 PM
                  </div>
                </div>
              </a>

              <!-- Event 4 -->
              <a href="#" class="flex items-start space-x-4 p-4 rounded-xl border border-slate-200 hover:border-crimson-200 hover:bg-crimson-50/50 transition group">
                <div class="flex-shrink-0 w-14 h-14 bg-crimson-500 rounded-xl flex flex-col items-center justify-center text-white">
                  <span class="text-lg font-bold leading-none">12</span>
                  <span class="text-xs uppercase">FEB</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-semibold text-slate-900 group-hover:text-crimson-500 transition">Student Success Workshop</h4>
                  <p class="text-sm text-slate-600">Time management and study skills for college success</p>
                  <div class="flex items-center mt-2 text-xs text-slate-500">
                    <i data-lucide="clock" class="w-3 h-3 mr-1"></i>
                    12:00 PM - 1:00 PM
                  </div>
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <!-- Include footer component -->

  <!-- Initialize Lucide icons -->
  <script>
    lucide.createIcons();
  </script>
</body>
</html>
```

---

## TEMPLATE 2: Section Front

**File:** `/pages/academics/index.html`, `/pages/admissions/index.html`, etc.
**Schema Elements:** Section Title, Meta Description, Breadcrumbs, Hero Component, Intro Text, Tray Container
**Template Type:** Main section landing pages
**Page Count:** 8-10 pages

### Structure
```html
<!-- Breadcrumbs -->
<nav data-cms-component="breadcrumbs"><!-- Breadcrumb component --></nav>

<main>
  <!-- TRAY 1: Hero (Text Overlay) -->
  <section class="relative h-[400px] md:h-[500px] bg-cover bg-center"
           style="background-image: url('/images/academics-hero.jpg')"
           data-cms-component="hero-text-overlay">
    <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
    <div class="relative max-w-7xl mx-auto px-4 h-full flex items-center">
      <div class="max-w-3xl text-white">
        <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl italic mb-6" data-cms-field="heading">
          Academics at RichmondCC
        </h1>
        <p class="text-xl text-white/90 mb-8" data-cms-field="subheading">
          Choose from 60+ programs designed to help you achieve your goals.
        </p>
        <div class="flex flex-wrap gap-4" data-cms-field="ctaButtons">
          <a href="/academics/programs" class="inline-flex items-center px-6 py-3 bg-crimson-500 text-white font-semibold rounded-lg hover:bg-crimson-600 transition">
            Explore Programs
            <i data-lucide="arrow-right" class="w-5 h-5 ml-2"></i>
          </a>
          <a href="/apply" class="inline-flex items-center px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition">
            Apply Now
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- TRAY 2: Body Copy (Section Intro) -->
  <section class="py-16 bg-white"
           data-cms-component="body-copy">
    <div class="max-w-4xl mx-auto px-4">
      <div class="prose prose-lg prose-slate max-w-none" data-cms-field="bodyContent">
        <p class="text-xl text-slate-700 leading-relaxed">
          Richmond Community College offers associate degrees, diplomas, and certificates in high-demand career fields.
          Whether you're planning to transfer to a four-year university or enter the workforce immediately,
          we have a program that's right for you.
        </p>
        <p class="text-slate-600">
          Our experienced faculty, state-of-the-art facilities, and affordable tuition make RichmondCC
          the smart choice for your education.
        </p>
      </div>
    </div>
  </section>

  <!-- TRAY 3: Featured Card Image (Subsection cards) -->
  <section class="py-16 bg-slate-50"
           data-cms-component="featured-card-image">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="font-heading text-3xl md:text-4xl text-slate-900 italic text-center mb-12" data-cms-field="heading">
        Academic Areas
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-cms-field="cards">
        <!-- Card structure same as audience cards above -->
      </div>
    </div>
  </section>

</main>
```

---

## Additional Templates (Summary)

The following templates should follow the same design patterns established above:

### TEMPLATE 3: Program Listing
- Grid/list of academic programs with filtering
- Card layout with program icons and quick facts

### TEMPLATE 4: Program Detail
- Individual program page with requirements, outcomes, faculty

### TEMPLATE 5: Content Page (General)
- Flexible content page with sidebar navigation
- Rich text areas with embedded components

### TEMPLATE 6: News Listing
- Filterable news archive with pagination
- Card layout matching News & Events section

### TEMPLATE 7: News Article
- Single news article with featured image, body, related items

### TEMPLATE 8: Event Listing
- Calendar view and list view toggle
- Filtering by date, category

### TEMPLATE 9: Event Detail
- Event info, registration, map integration

### TEMPLATE 10: Staff Directory
- Searchable/filterable staff listing
- Department groupings

### TEMPLATE 11: Staff Profile
- Individual staff bio page

### TEMPLATE 12: Contact Page
- Contact form, locations, hours
- Embedded map

### TEMPLATE 13: Search Results
- Site-wide search results page

### TEMPLATE 14: Error Pages
- 404, 500 error pages with helpful navigation

### TEMPLATE 15: Landing Page
- Marketing-focused flexible page template
- Multiple hero options, testimonials, forms

---

## Image Specifications

**Hero Images:** 1920x1080px minimum, JPG optimized
**Card Thumbnails:** 800x600px (4:3 ratio)
**Staff Photos:** 400x400px (square, will be cropped to circle)
**Logo:** SVG preferred, PNG fallback at 2x resolution
**Icons:** Lucide icons (SVG via CDN)

---

## Build Instructions for Claude Code

1. **Create project structure:**
   ```
   /richmondcc-templates/
   ├── index.html (Homepage)
   ├── /pages/
   │   ├── /academics/
   │   ├── /admissions/
   │   ├── /student-services/
   │   ├── /about/
   │   └── /contact/
   ├── /includes/
   │   ├── header.html
   │   └── footer.html
   └── /images/
       └── (placeholder images)
   ```

2. **Start with index.html** - Build the complete homepage first using all components from TEMPLATE 1

3. **Extract reusable components** - Header and footer into /includes/

4. **Build section fronts** - Use TEMPLATE 2 for each main navigation section

5. **Use placeholder images** - Can use https://placehold.co/ for development

6. **Test responsive breakpoints:** mobile (< 768px), tablet (768-1024px), desktop (> 1024px)

7. **Validate HTML** and ensure all Alpine.js interactions work correctly

---

## Key Design Differences from Original Spec

| Element | Old Spec | New Spec (Actual Design) |
|---------|----------|--------------------------|
| Primary Color | Blue `#366092` | Crimson `#9C1C32` |
| Heading Font | System fonts | Crimson Text (serif, italic) |
| Body Font | System fonts | Open Sans (sans-serif) |
| Card Style | Simple shadow | Rounded-xl with border, hover effects |
| Button Style | Basic rounded | Icons included, shadow effects |
| Stats Section | Blue background | Crimson with decorative shapes |
| Footer | Gray `#1f2937` | Slate `#0F172A` |
| Overall Feel | Corporate blue | Warm, academic crimson/maroon |
