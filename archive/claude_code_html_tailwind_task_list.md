# Richmond Community College - Static Site Prototype
## Claude Code Task List & Prompt (HTML + Tailwind + Alpine.js)

**Project Goal:** Build a static HTML/Tailwind CSS prototype of the Richmond Community College website based on Ingeniux EDU Solution and Standards design libraries for team review.

**Tech Stack:**
- HTML5 (semantic markup)
- Tailwind CSS v3+ (utility-first styling)
- Alpine.js (lightweight JS for interactivity)
- Lucide Icons (for info icons)

**Design Reference:**
- EDU Solution: https://services.ingeniux.com/designs/edu-solution/
- Standards Library: https://services.ingeniux.com/designs/standards/

**Special Feature:** Each component/section has a small info icon (ⓘ) that opens a modal tooltip linking directly to the relevant Ingeniux design library page.

---

## PHASE 1: Project Setup & Foundation

### Task 1.1: Initialize Project Structure
```
Create a static site structure:

/richmond-cc-prototype
  /index.html (homepage)
  /css
    /tailwind.css (compiled Tailwind)
  /js
    /alpine.min.js (Alpine.js CDN or local)
    /main.js (custom scripts)
  /images
    /placeholders (placeholder images)
  /pages
    /academics
      /index.html
      /programs
        /index.html
        /nursing.html
        /business-administration.html
    /admissions
      /index.html
      /financial-aid.html
    /student-services
      /index.html
    /about-us
      /index.html
    /contact-us
      /index.html
  /includes (reusable HTML snippets for manual copy/paste)
    /header.html
    /footer.html
    /navigation.html
  /_reference
    /design-system.md (design token documentation)
    /component-library.md (component inventory)
    /ingeniux-links.md (all Ingeniux reference URLs)

Use Tailwind CLI or CDN for styling.
```

**Deliverable:** Working project structure

---

### Task 1.2: Set Up Tailwind CSS
```
Initialize Tailwind CSS:

Option 1: Tailwind CLI (recommended)
- npm init -y
- npm install -D tailwindcss
- npx tailwindcss init
- Configure tailwind.config.js
- Create input.css with @tailwind directives
- Build command: npx tailwindcss -i ./css/input.css -o ./css/tailwind.css --watch

Option 2: Tailwind CDN (quick start)
- Use CDN in <head> for rapid prototyping
- <script src="https://cdn.tailwindcss.com"></script>

Set up custom configuration in tailwind.config.js or inline config.
```

**Deliverable:** Tailwind CSS configured and working

---

### Task 1.3: Analyze Ingeniux Design System
```
Visit and document design patterns from:
1. https://services.ingeniux.com/designs/edu-solution/
2. https://services.ingeniux.com/designs/standards/

Create /_reference/ingeniux-links.md with:
- All component URLs
- Screenshots of key components
- Notes on styling patterns

Analyze and document in /_reference/design-system.md:

COLOR PALETTE:
- Primary blue: Extract from headers/CTAs (likely #366092 or similar)
- Secondary blue: Lighter shade for backgrounds
- Accent colors: For warnings, success states
- Neutral grays: For text, borders, backgrounds
- Background: White, light gray

TYPOGRAPHY:
- Font family: System fonts or similar to Ingeniux (likely Arial/Helvetica)
- Font sizes: Create scale from text-xs to text-6xl
- Font weights: 400 (normal), 600 (semibold), 700 (bold)
- Line heights: Generous for readability
- Letter spacing: Slight tracking on headings

SPACING:
- Container max-width: ~1280px
- Section padding: py-16 or py-20
- Tray spacing: mb-12 or mb-16 between trays
- Card gaps: gap-6 or gap-8

BUTTONS:
- Primary: Blue background, white text, rounded
- Secondary: White background, blue border
- Hover states: Slightly darker
- Padding: px-6 py-3 or similar

CARDS:
- Border or shadow: Subtle shadow or border
- Padding: p-6
- Rounded corners: rounded-lg
- Hover: Slight lift with shadow
```

**Deliverable:** Complete design system documentation

---

### Task 1.4: Create Tailwind Config
```
Create tailwind.config.js with custom theme matching Ingeniux:

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5fa',
          100: '#dae7f3',
          200: '#b4cfe7',
          300: '#8eb7db',
          400: '#689fcf',
          500: '#366092',  // Main primary
          600: '#2d4f75',
          700: '#243d58',
          800: '#1b2c3b',
          900: '#121a1e',
        },
        neutral: {
          // Gray scale
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Custom scale if needed
      },
      spacing: {
        // Custom spacing if needed
      },
      maxWidth: {
        'content': '1280px',
      }
    },
  },
  plugins: [],
}
```

**Deliverable:** Tailwind config matching Ingeniux design

---

### Task 1.5: Set Up Alpine.js & Lucide Icons
```
Add to <head> of all pages:

<!-- Alpine.js for interactivity -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>

<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest"></script>

Initialize Lucide in your main.js or inline:
<script>
  document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
  });
</script>
```

**Deliverable:** Alpine.js and Lucide icons working

---

### Task 1.6: Create Design Reference Modal System
```
Create a reusable modal component for design references using Alpine.js:

Add to each page before </body>:

<!-- Design Reference Modal -->
<div x-data="{ open: false, title: '', url: '' }" 
     x-show="open" 
     @open-reference.window="open = true; title = $event.detail.title; url = $event.detail.url"
     @keydown.escape.window="open = false"
     x-cloak
     class="fixed inset-0 z-50 overflow-y-auto"
     style="display: none;">
  
  <!-- Backdrop -->
  <div class="fixed inset-0 bg-black bg-opacity-50" @click="open = false"></div>
  
  <!-- Modal -->
  <div class="flex items-center justify-center min-h-screen px-4">
    <div class="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6" @click.away="open = false">
      
      <!-- Close button -->
      <button @click="open = false" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
      
      <!-- Content -->
      <div class="pr-8">
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Design Reference</h3>
        <p class="text-sm text-gray-600 mb-4" x-text="title"></p>
        <a :href="url" 
           target="_blank" 
           class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm">
          View in Ingeniux Design Library
          <i data-lucide="external-link" class="w-4 h-4 ml-1"></i>
        </a>
      </div>
      
    </div>
  </div>
</div>

<!-- CSS for x-cloak -->
<style>
  [x-cloak] { display: none !important; }
</style>

Then create reusable info icon component:

<!-- Design Reference Info Icon -->
<button 
  @click="$dispatch('open-reference', { 
    title: 'Component Name', 
    url: 'https://services.ingeniux.com/designs/standards/component.html' 
  })"
  class="inline-flex items-center justify-center w-5 h-5 text-gray-400 hover:text-primary-600 transition-colors ml-2"
  title="View design reference">
  <i data-lucide="info" class="w-4 h-4"></i>
</button>

USAGE EXAMPLE:

<section class="py-16">
  <!-- Section title with info icon -->
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 inline-flex items-center">
      Hero Section
      <button 
        @click="$dispatch('open-reference', { 
          title: 'Hero Text Overlay - Standards Library', 
          url: 'https://services.ingeniux.com/designs/standards/hero-text-overlay.html' 
        })"
        class="inline-flex items-center justify-center w-5 h-5 text-gray-400 hover:text-primary-600 transition-colors ml-2"
        title="View design reference">
        <i data-lucide="info" class="w-4 h-4"></i>
      </button>
    </h2>
    <!-- Hero content -->
  </div>
</section>
```

**Deliverable:** Working modal system with info icons

---

## PHASE 2: Global Components (HTML Includes)

### Task 2.1: Create Header Component
```
Reference: https://services.ingeniux.com/designs/standards/header.html

Create /includes/header.html:

<header class="bg-white shadow-sm">
  <!-- Design Reference -->
  <div class="sr-only">
    Info icon will be in the page, not in this include
  </div>
  
  <!-- Utility Nav -->
  <div class="bg-primary-700 text-white text-sm">
    <div class="container mx-auto px-4 py-2 flex justify-end space-x-4">
      <a href="/apply.html" class="hover:text-primary-200">Apply</a>
      <a href="/admissions/pay-tuition.html" class="hover:text-primary-200">Pay Tuition</a>
      <a href="/self-service.html" class="hover:text-primary-200">Self-Service</a>
      <a href="/contact-us/index.html" class="hover:text-primary-200">Contact</a>
    </div>
  </div>
  
  <!-- Main Header -->
  <div class="container mx-auto px-4 py-4">
    <div class="flex items-center justify-between">
      
      <!-- Logo -->
      <a href="/index.html" class="flex items-center">
        <div class="text-2xl font-bold text-primary-600">RichmondCC</div>
      </a>
      
      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center space-x-8">
        <!-- Add Alpine.js dropdown menus -->
      </nav>
      
      <!-- Search & Mobile Menu -->
      <div class="flex items-center space-x-4">
        <button class="text-gray-600 hover:text-primary-600">
          <i data-lucide="search" class="w-5 h-5"></i>
        </button>
        <button class="lg:hidden text-gray-600 hover:text-primary-600">
          <i data-lucide="menu" class="w-6 h-6"></i>
        </button>
      </div>
      
    </div>
  </div>
</header>

Add info icon on the actual page where header is used:
<div class="inline-flex items-center mb-4">
  <h3 class="text-sm font-semibold text-gray-500 uppercase">Header Component</h3>
  <button 
    @click="$dispatch('open-reference', { 
      title: 'Header - Standards Library', 
      url: 'https://services.ingeniux.com/designs/standards/header.html' 
    })"
    class="inline-flex items-center justify-center w-5 h-5 text-gray-400 hover:text-primary-600 transition-colors ml-2"
    title="View design reference">
    <i data-lucide="info" class="w-4 h-4"></i>
  </button>
</div>
<!-- Then include header -->
```

**Deliverable:** Header HTML component

---

### Task 2.2: Create Mega Menu Navigation
```
Reference: https://services.ingeniux.com/designs/standards/menu-mega.html

Create mega menu with Alpine.js dropdowns:

<nav class="hidden lg:flex items-center space-x-6" x-data="{ activeMenu: null }">
  
  <!-- Academics Dropdown -->
  <div @mouseenter="activeMenu = 'academics'" 
       @mouseleave="activeMenu = null" 
       class="relative">
    <button class="text-gray-700 hover:text-primary-600 font-medium">
      Academics
    </button>
    
    <!-- Mega Menu Dropdown -->
    <div x-show="activeMenu === 'academics'" 
         x-transition
         class="absolute top-full left-0 w-screen max-w-4xl bg-white shadow-lg rounded-b-lg mt-2 p-8 grid grid-cols-3 gap-8">
      
      <div>
        <h3 class="font-semibold text-gray-900 mb-3">Programs</h3>
        <ul class="space-y-2">
          <li><a href="/pages/academics/programs/index.html" class="text-gray-600 hover:text-primary-600">All Programs</a></li>
          <li><a href="/pages/academics/programs/nursing.html" class="text-gray-600 hover:text-primary-600">Nursing</a></li>
          <li><a href="/pages/academics/programs/business-administration.html" class="text-gray-600 hover:text-primary-600">Business</a></li>
        </ul>
      </div>
      
      <div>
        <h3 class="font-semibold text-gray-900 mb-3">Resources</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-600 hover:text-primary-600">Course Catalog</a></li>
          <li><a href="#" class="text-gray-600 hover:text-primary-600">Class Schedules</a></li>
        </ul>
      </div>
      
      <div>
        <h3 class="font-semibold text-gray-900 mb-3">Support</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-600 hover:text-primary-600">Academic Advising</a></li>
          <li><a href="#" class="text-gray-600 hover:text-primary-600">Graduation Info</a></li>
        </ul>
      </div>
      
    </div>
  </div>
  
  <!-- Repeat for other menu items: Admissions, Student Services, Workforce, About Us -->
  
</nav>

Add mobile menu version with Alpine.js accordion.
```

**Deliverable:** Mega menu navigation

---

### Task 2.3: Create Footer Component
```
Reference: https://services.ingeniux.com/designs/standards/footer-mega.html

Create /includes/footer.html:

<footer class="bg-gray-900 text-gray-300 pt-16 pb-8">
  <div class="container mx-auto px-4">
    
    <!-- Main Footer Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      
      <!-- Quick Links -->
      <div>
        <h3 class="text-white font-semibold mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-white transition-colors">Academics</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Admissions</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Student Services</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Pay Tuition</a></li>
        </ul>
      </div>
      
      <!-- Contact Info -->
      <div>
        <h3 class="text-white font-semibold mb-4">Contact Us</h3>
        <ul class="space-y-2">
          <li>1042 W Hamlet Ave</li>
          <li>Hamlet, NC 28345</li>
          <li>(910) 410-1700</li>
          <li><a href="mailto:info@richmondcc.edu" class="hover:text-white">info@richmondcc.edu</a></li>
        </ul>
      </div>
      
      <!-- Social & Subscribe -->
      <div>
        <h3 class="text-white font-semibold mb-4">Connect</h3>
        <div class="flex space-x-4 mb-4">
          <a href="#" class="hover:text-white"><i data-lucide="facebook" class="w-5 h-5"></i></a>
          <a href="#" class="hover:text-white"><i data-lucide="twitter" class="w-5 h-5"></i></a>
          <a href="#" class="hover:text-white"><i data-lucide="instagram" class="w-5 h-5"></i></a>
          <a href="#" class="hover:text-white"><i data-lucide="youtube" class="w-5 h-5"></i></a>
        </div>
      </div>
      
      <!-- Campus Info -->
      <div>
        <h3 class="text-white font-semibold mb-4">Campuses</h3>
        <ul class="space-y-2">
          <li>Hamlet Campus</li>
          <li>Scotland County Campus</li>
        </ul>
      </div>
      
    </div>
    
    <!-- Bottom Bar -->
    <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p class="text-sm text-gray-400">© 2026 Richmond Community College. All rights reserved.</p>
      <div class="flex space-x-4 text-sm mt-4 md:mt-0">
        <a href="#" class="hover:text-white">Privacy Policy</a>
        <a href="#" class="hover:text-white">Accessibility</a>
        <a href="#" class="hover:text-white">Title IX</a>
      </div>
    </div>
    
  </div>
</footer>
```

**Deliverable:** Footer HTML component

---

## PHASE 3: Tray Components (Reusable HTML Blocks)

### Task 3.1: Hero Text Overlay Tray
```
Reference: https://services.ingeniux.com/designs/standards/hero-text-overlay.html

Create reusable HTML block in /includes/trays/hero-text-overlay.html:

<!-- Hero Text Overlay Tray -->
<section class="relative h-[600px] flex items-center justify-center text-white">
  
  <!-- Section Label with Info Icon (for documentation) -->
  <div class="absolute top-4 left-4 z-20 bg-black bg-opacity-50 px-3 py-1 rounded text-xs flex items-center">
    <span>Hero Text Overlay</span>
    <button 
      @click="$dispatch('open-reference', { 
        title: 'Hero Text Overlay - Standards Library', 
        url: 'https://services.ingeniux.com/designs/standards/hero-text-overlay.html' 
      })"
      class="inline-flex items-center justify-center w-4 h-4 text-white hover:text-primary-300 transition-colors ml-2"
      title="View design reference">
      <i data-lucide="info" class="w-3 h-3"></i>
    </button>
  </div>
  
  <!-- Background Image -->
  <div class="absolute inset-0 bg-cover bg-center" 
       style="background-image: url('https://placehold.co/1920x600/366092/FFFFFF?text=Hero+Background');">
  </div>
  
  <!-- Overlay -->
  <div class="absolute inset-0 bg-black bg-opacity-40"></div>
  
  <!-- Content -->
  <div class="relative z-10 container mx-auto px-4 text-center">
    <h1 class="text-5xl md:text-6xl font-bold mb-4">
      Classes & Courses Designed for You
    </h1>
    <p class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
      Richmond Community College offers affordable, quality education to help you achieve your goals.
    </p>
    <div class="flex flex-wrap gap-4 justify-center">
      <a href="#" class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
        Apply Now
      </a>
      <a href="#" class="bg-white hover:bg-gray-100 text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors">
        Explore Programs
      </a>
    </div>
  </div>
  
</section>

USAGE: Copy this block into any page and customize the content.
```

**Deliverable:** Hero Text Overlay HTML

---

### Task 3.2: Hero Side-by-Side Tray
```
Reference: https://services.ingeniux.com/designs/standards/hero-side-by-side.html

<!-- Hero Side-by-Side Tray -->
<section class="py-16 bg-gray-50">
  
  <!-- Section Label with Info Icon -->
  <div class="container mx-auto px-4 mb-4">
    <div class="inline-flex items-center bg-white px-3 py-1 rounded text-xs text-gray-500">
      <span>Hero Side-by-Side</span>
      <button 
        @click="$dispatch('open-reference', { 
          title: 'Hero Side-by-Side - Standards Library', 
          url: 'https://services.ingeniux.com/designs/standards/hero-side-by-side.html' 
        })"
        class="inline-flex items-center justify-center w-4 h-4 text-gray-400 hover:text-primary-600 transition-colors ml-2"
        title="View design reference">
        <i data-lucide="info" class="w-3 h-3"></i>
      </button>
    </div>
  </div>
  
  <div class="container mx-auto px-4">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      
      <!-- Text Content (can be left or right) -->
      <div>
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
          Start Your Journey at RichmondCC
        </h2>
        <p class="text-lg text-gray-600 mb-6">
          With over 60 programs, affordable tuition, and dedicated support services, 
          Richmond Community College is your pathway to success.
        </p>
        <ul class="space-y-3 mb-8">
          <li class="flex items-start">
            <i data-lucide="check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5"></i>
            <span>Small class sizes for personalized attention</span>
          </li>
          <li class="flex items-start">
            <i data-lucide="check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5"></i>
            <span>Transfer agreements with major universities</span>
          </li>
          <li class="flex items-start">
            <i data-lucide="check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5"></i>
            <span>Financial aid and scholarships available</span>
          </li>
        </ul>
        <a href="#" class="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
          Learn More
        </a>
      </div>
      
      <!-- Image -->
      <div>
        <img src="https://placehold.co/600x400/366092/FFFFFF?text=Hero+Image" 
             alt="Richmond CC Campus" 
             class="rounded-lg shadow-xl w-full">
      </div>
      
    </div>
  </div>
  
</section>
```

**Deliverable:** Hero Side-by-Side HTML

---

### Task 3.3: Featured Card Image Tray
```
Reference: https://services.ingeniux.com/designs/standards/featured-cards-images.html

<!-- Featured Card Image Tray -->
<section class="py-16">
  
  <!-- Section Label with Info Icon -->
  <div class="container mx-auto px-4 mb-4">
    <div class="inline-flex items-center bg-gray-100 px-3 py-1 rounded text-xs text-gray-500">
      <span>Featured Cards - Image</span>
      <button 
        @click="$dispatch('open-reference', { 
          title: 'Featured Card Image - Standards Library', 
          url: 'https://services.ingeniux.com/designs/standards/featured-cards-images.html' 
        })"
        class="inline-flex items-center justify-center w-4 h-4 text-gray-400 hover:text-primary-600 transition-colors ml-2"
        title="View design reference">
        <i data-lucide="info" class="w-3 h-3"></i>
      </button>
    </div>
  </div>
  
  <div class="container mx-auto px-4">
    
    <!-- Optional Section Heading -->
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Who Are You?
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Find the resources and information you need for your journey.
      </p>
    </div>
    
    <!-- Cards Grid (2, 3, or 4 columns) -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <!-- Card 1 -->
      <a href="#" class="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
        <div class="aspect-[4/3] bg-gray-200 overflow-hidden">
          <img src="https://placehold.co/400x300/366092/FFFFFF?text=Prospective" 
               alt="Prospective Students" 
               class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
            Prospective Students
          </h3>
          <p class="text-gray-600 mb-4">
            Learn about programs, admissions, and financial aid.
          </p>
          <span class="text-primary-600 font-medium inline-flex items-center">
            Learn More
            <i data-lucide="arrow-right" class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"></i>
          </span>
        </div>
      </a>
      
      <!-- Card 2 -->
      <a href="#" class="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
        <div class="aspect-[4/3] bg-gray-200 overflow-hidden">
          <img src="https://placehold.co/400x300/366092/FFFFFF?text=Current" 
               alt="Current Students" 
               class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
            Current Students
          </h3>
          <p class="text-gray-600 mb-4">
            Access your courses, schedules, and student services.
          </p>
          <span class="text-primary-600 font-medium inline-flex items-center">
            Student Portal
            <i data-lucide="arrow-right" class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"></i>
          </span>
        </div>
      </a>
      
      <!-- Card 3 -->
      <a href="#" class="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
        <div class="aspect-[4/3] bg-gray-200 overflow-hidden">
          <img src="https://placehold.co/400x300/366092/FFFFFF?text=Faculty" 
               alt="Faculty & Staff" 
               class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
            Faculty & Staff
          </h3>
          <p class="text-gray-600 mb-4">
            Access resources, tools, and information for employees.
          </p>
          <span class="text-primary-600 font-medium inline-flex items-center">
            Employee Portal
            <i data-lucide="arrow-right" class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"></i>
          </span>
        </div>
      </a>
      
      <!-- Card 4 -->
      <a href="#" class="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
        <div class="aspect-[4/3] bg-gray-200 overflow-hidden">
          <img src="https://placehold.co/400x300/366092/FFFFFF?text=Community" 
               alt="Community & Workforce" 
               class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
            Community & Workforce
          </h3>
          <p class="text-gray-600 mb-4">
            Explore continuing education and training programs.
          </p>
          <span class="text-primary-600 font-medium inline-flex items-center">
            View Programs
            <i data-lucide="arrow-right" class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"></i>
          </span>
        </div>
      </a>
      
    </div>
  </div>
  
</section>
```

**Deliverable:** Featured Card Image tray HTML

---

### Task 3.4: Accordion Tray
```
Reference: https://services.ingeniux.com/designs/standards/accordion.html

<!-- Accordion Tray -->
<section class="py-16 bg-gray-50">
  
  <!-- Section Label with Info Icon -->
  <div class="container mx-auto px-4 mb-4">
    <div class="inline-flex items-center bg-white px-3 py-1 rounded text-xs text-gray-500">
      <span>Accordion</span>
      <button 
        @click="$dispatch('open-reference', { 
          title: 'Accordion - Standards Library', 
          url: 'https://services.ingeniux.com/designs/standards/accordion.html' 
        })"
        class="inline-flex items-center justify-center w-4 h-4 text-gray-400 hover:text-primary-600 transition-colors ml-2"
        title="View design reference">
        <i data-lucide="info" class="w-3 h-3"></i>
      </button>
    </div>
  </div>
  
  <div class="container mx-auto px-4 max-w-3xl">
    
    <h2 class="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
    
    <div class="space-y-4" x-data="{ activeItem: null }">
      
      <!-- Accordion Item 1 -->
      <div class="bg-white rounded-lg shadow-sm">
        <button @click="activeItem = activeItem === 1 ? null : 1"
                class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
          <span class="font-semibold text-gray-900">How do I apply to RichmondCC?</span>
          <i data-lucide="chevron-down" 
             class="w-5 h-5 text-gray-500 transition-transform"
             :class="{ 'rotate-180': activeItem === 1 }"></i>
        </button>
        <div x-show="activeItem === 1" 
             x-collapse
             class="px-6 pb-4">
          <p class="text-gray-600">
            You can apply online through our website. The application is free and takes about 15 minutes to complete. 
            You'll need your social security number, high school information, and any previous college transcripts.
          </p>
        </div>
      </div>
      
      <!-- Accordion Item 2 -->
      <div class="bg-white rounded-lg shadow-sm">
        <button @click="activeItem = activeItem === 2 ? null : 2"
                class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
          <span class="font-semibold text-gray-900">What financial aid is available?</span>
          <i data-lucide="chevron-down" 
             class="w-5 h-5 text-gray-500 transition-transform"
             :class="{ 'rotate-180': activeItem === 2 }"></i>
        </button>
        <div x-show="activeItem === 2" 
             x-collapse
             class="px-6 pb-4">
          <p class="text-gray-600">
            RichmondCC offers federal grants, student loans, scholarships, and work-study programs. 
            Complete the FAFSA to see what you qualify for. Our Financial Aid office can help you through the process.
          </p>
        </div>
      </div>
      
      <!-- Accordion Item 3 -->
      <div class="bg-white rounded-lg shadow-sm">
        <button @click="activeItem = activeItem === 3 ? null : 3"
                class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
          <span class="font-semibold text-gray-900">Can I transfer my credits to a university?</span>
          <i data-lucide="chevron-down" 
             class="w-5 h-5 text-gray-500 transition-transform"
             :class="{ 'rotate-180': activeItem === 3 }"></i>
        </button>
        <div x-show="activeItem === 3" 
             x-collapse
             class="px-6 pb-4">
          <p class="text-gray-600">
            Yes! RichmondCC has transfer agreements with many universities including UNC schools, 
            ECU, Appalachian State, and more. Many of our students transfer to complete their bachelor's degree.
          </p>
        </div>
      </div>
      
    </div>
  </div>
  
</section>

Note: Requires Alpine.js and the Collapse plugin: 
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/collapse@3.x.x/dist/cdn.min.js"></script>
```

**Deliverable:** Accordion tray HTML

---

### Task 3.5: Fast Facts Tray
```
Reference: https://services.ingeniux.com/designs/edu-solution/fast-facts.html

<!-- Fast Facts Tray -->
<section class="py-16 bg-primary-600 text-white">
  
  <!-- Section Label with Info Icon -->
  <div class="container mx-auto px-4 mb-4">
    <div class="inline-flex items-center bg-primary-700 px-3 py-1 rounded text-xs">
      <span>Fast Facts (EDU)</span>
      <button 
        @click="$dispatch('open-reference', { 
          title: 'Fast Facts - EDU Solution', 
          url: 'https://services.ingeniux.com/designs/edu-solution/fast-facts.html' 
        })"
        class="inline-flex items-center justify-center w-4 h-4 text-primary-200 hover:text-white transition-colors ml-2"
        title="View design reference">
        <i data-lucide="info" class="w-3 h-3"></i>
      </button>
    </div>
  </div>
  
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      
      <!-- Fact 1 -->
      <div>
        <div class="text-5xl font-bold mb-2">60+</div>
        <div class="text-primary-100 font-medium">Programs</div>
      </div>
      
      <!-- Fact 2 -->
      <div>
        <div class="text-5xl font-bold mb-2">$76</div>
        <div class="text-primary-100 font-medium">Per Credit Hour</div>
      </div>
      
      <!-- Fact 3 -->
      <div>
        <div class="text-5xl font-bold mb-2">15:1</div>
        <div class="text-primary-100 font-medium">Student-Faculty Ratio</div>
      </div>
      
      <!-- Fact 4 -->
      <div>
        <div class="text-5xl font-bold mb-2">95%</div>
        <div class="text-primary-100 font-medium">Job Placement</div>
      </div>
      
    </div>
  </div>
  
</section>
```

**Deliverable:** Fast Facts tray HTML

---

### Task 3.6: Body Copy Tray
```
Reference: https://services.ingeniux.com/designs/standards/body-copy.html

<!-- Body Copy Tray -->
<section class="py-16">
  
  <!-- Section Label with Info Icon -->
  <div class="container mx-auto px-4 mb-4">
    <div class="inline-flex items-center bg-gray-100 px-3 py-1 rounded text-xs text-gray-500">
      <span>Body Copy</span>
      <button 
        @click="$dispatch('open-reference', { 
          title: 'Body Copy - Standards Library', 
          url: 'https://services.ingeniux.com/designs/standards/body-copy.html' 
        })"
        class="inline-flex items-center justify-center w-4 h-4 text-gray-400 hover:text-primary-600 transition-colors ml-2"
        title="View design reference">
        <i data-lucide="info" class="w-3 h-3"></i>
      </button>
    </div>
  </div>
  
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto prose prose-lg">
      
      <h2>About Richmond Community College</h2>
      
      <p>
        Since 1964, Richmond Community College has been dedicated to serving the educational 
        needs of Richmond County and surrounding areas. We provide accessible, affordable, 
        high-quality education and training opportunities.
      </p>
      
      <h3>Our Mission</h3>
      
      <p>
        Richmond Community College empowers individuals to achieve their goals through 
        accessible and affordable education, training, and community engagement.
      </p>
      
      <ul>
        <li>Provide quality instruction in associate degree programs</li>
        <li>Offer career and technical education</li>
        <li>Support continuing education and workforce development</li>
        <li>Foster community partnerships</li>
      </ul>
      
      <h3>Accreditation</h3>
      
      <p>
        Richmond Community College is accredited by the Southern Association of Colleges and 
        Schools Commission on Colleges (SACSCOC) to award associate degrees, diplomas, and certificates.
      </p>
      
    </div>
  </div>
  
</section>

Note: Use Tailwind Typography plugin for prose styles:
npm install -D @tailwindcss/typography

Then add to tailwind.config.js:
plugins: [require('@tailwindcss/typography')]
```

**Deliverable:** Body Copy tray HTML

---

### Task 3.7: Steps to Success (EDU)
```
Reference: https://services.ingeniux.com/designs/edu-solution/steps-to-success.html

<!-- Steps to Success Tray (EDU) -->
<section class="py-16 bg-gray-50">
  
  <!-- Section Label with Info Icon -->
  <div class="container mx-auto px-4 mb-4">
    <div class="inline-flex items-center bg-white px-3 py-1 rounded text-xs text-gray-500">
      <span>Steps to Success (EDU)</span>
      <button 
        @click="$dispatch('open-reference', { 
          title: 'Steps to Success - EDU Solution', 
          url: 'https://services.ingeniux.com/designs/edu-solution/steps-to-success.html' 
        })"
        class="inline-flex items-center justify-center w-4 h-4 text-gray-400 hover:text-primary-600 transition-colors ml-2"
        title="View design reference">
        <i data-lucide="info" class="w-3 h-3"></i>
      </button>
    </div>
  </div>
  
  <div class="container mx-auto px-4">
    
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Your Path to Success
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Follow these steps to become a RichmondCC student
      </p>
    </div>
    
    <div class="max-w-5xl mx-auto">
      <!-- Desktop: Horizontal Timeline -->
      <div class="hidden md:flex justify-between items-start relative">
        
        <!-- Connection Line -->
        <div class="absolute top-12 left-0 right-0 h-1 bg-primary-200" style="top: 3rem;"></div>
        
        <!-- Step 1 -->
        <div class="relative flex-1 text-center">
          <div class="w-24 h-24 mx-auto bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4 relative z-10">
            1
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Apply</h3>
          <p class="text-gray-600 text-sm">
            Complete your free online application
          </p>
        </div>
        
        <!-- Step 2 -->
        <div class="relative flex-1 text-center">
          <div class="w-24 h-24 mx-auto bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4 relative z-10">
            2
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Financial Aid</h3>
          <p class="text-gray-600 text-sm">
            Complete FAFSA and explore scholarships
          </p>
        </div>
        
        <!-- Step 3 -->
        <div class="relative flex-1 text-center">
          <div class="w-24 h-24 mx-auto bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4 relative z-10">
            3
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Testing</h3>
          <p class="text-gray-600 text-sm">
            Take placement test if required
          </p>
        </div>
        
        <!-- Step 4 -->
        <div class="relative flex-1 text-center">
          <div class="w-24 h-24 mx-auto bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4 relative z-10">
            4
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Orientation</h3>
          <p class="text-gray-600 text-sm">
            Attend new student orientation
          </p>
        </div>
        
        <!-- Step 5 -->
        <div class="relative flex-1 text-center">
          <div class="w-24 h-24 mx-auto bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4 relative z-10">
            5
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Register</h3>
          <p class="text-gray-600 text-sm">
            Register for your classes
          </p>
        </div>
        
      </div>
      
      <!-- Mobile: Vertical Timeline -->
      <div class="md:hidden space-y-8">
        
        <!-- Step 1 -->
        <div class="flex items-start">
          <div class="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0 mr-4">
            1
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-1">Apply</h3>
            <p class="text-gray-600 text-sm">Complete your free online application</p>
          </div>
        </div>
        
        <!-- Repeat for steps 2-5 -->
        
      </div>
    </div>
    
  </div>
  
</section>
```

**Deliverable:** Steps to Success tray HTML

---

### Task 3.8: CTA Text Tray
```
Reference: https://services.ingeniux.com/designs/standards/cta-text.html

<!-- CTA Text Tray -->
<section class="py-16 bg-primary-50">
  
  <!-- Section Label with Info Icon -->
  <div class="container mx-auto px-4 mb-4">
    <div class="inline-flex items-center bg-white px-3 py-1 rounded text-xs text-gray-500">
      <span>CTA Text</span>
      <button 
        @click="$dispatch('open-reference', { 
          title: 'CTA Text - Standards Library', 
          url: 'https://services.ingeniux.com/designs/standards/cta-text.html' 
        })"
        class="inline-flex items-center justify-center w-4 h-4 text-gray-400 hover:text-primary-600 transition-colors ml-2"
        title="View design reference">
        <i data-lucide="info" class="w-3 h-3"></i>
      </button>
    </div>
  </div>
  
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Ready to Start Your Journey?
    </h2>
    <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
      Take the first step toward achieving your goals. Apply today and join 
      our community of learners.
    </p>
    <div class="flex flex-wrap gap-4 justify-center">
      <a href="#" class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
        Apply Now
      </a>
      <a href="#" class="bg-white hover:bg-gray-50 text-primary-600 px-8 py-3 rounded-lg font-semibold border-2 border-primary-600 transition-colors">
        Schedule a Visit
      </a>
    </div>
  </div>
  
</section>
```

**Deliverable:** CTA Text tray HTML

---

### Task 3.9: Contact Block Component
```
Reference: https://services.ingeniux.com/designs/standards/contact-block.html

<!-- Contact Block Component -->
<div class="bg-gray-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
  
  <!-- Label with Info Icon -->
  <div class="inline-flex items-center bg-white px-2 py-1 rounded text-xs text-gray-500 mb-4">
    <span>Contact Block</span>
    <button 
      @click="$dispatch('open-reference', { 
        title: 'Contact Block - Standards Library', 
        url: 'https://services.ingeniux.com/designs/standards/contact-block.html' 
      })"
      class="inline-flex items-center justify-center w-4 h-4 text-gray-400 hover:text-primary-600 transition-colors ml-2"
      title="View design reference">
      <i data-lucide="info" class="w-3 h-3"></i>
    </button>
  </div>
  
  <h3 class="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
  
  <div class="space-y-3">
    <div class="flex items-start">
      <i data-lucide="user" class="w-5 h-5 text-primary-600 mr-3 mt-0.5"></i>
      <div>
        <div class="font-medium text-gray-900">Dr. Jane Smith</div>
        <div class="text-sm text-gray-600">Nursing Program Coordinator</div>
      </div>
    </div>
    
    <div class="flex items-start">
      <i data-lucide="mail" class="w-5 h-5 text-primary-600 mr-3 mt-0.5"></i>
      <a href="mailto:jsmith@richmondcc.edu" class="text-primary-600 hover:text-primary-700">
        jsmith@richmondcc.edu
      </a>
    </div>
    
    <div class="flex items-start">
      <i data-lucide="phone" class="w-5 h-5 text-primary-600 mr-3 mt-0.5"></i>
      <a href="tel:9104101700" class="text-primary-600 hover:text-primary-700">
        (910) 410-1700 ext. 1234
      </a>
    </div>
    
    <div class="flex items-start">
      <i data-lucide="map-pin" class="w-5 h-5 text-primary-600 mr-3 mt-0.5"></i>
      <div class="text-gray-600 text-sm">
        Building A, Room 123<br>
        Hamlet Campus
      </div>
    </div>
  </div>
  
</div>
```

**Deliverable:** Contact Block component HTML

---

## Continue with remaining trays...
(I'll create a condensed version for the remaining trays and focus on the complete implementation structure)

---

## PHASE 4: Sample Pages

### Task 4.1: Create Homepage (index.html)
```
Create /index.html with full page structure:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Richmond Community College | Classes & Courses Designed for You</title>
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: {
              50: '#f0f5fa',
              100: '#dae7f3',
              200: '#b4cfe7',
              300: '#8eb7db',
              400: '#689fcf',
              500: '#366092',
              600: '#2d4f75',
              700: '#243d58',
              800: '#1b2c3b',
              900: '#121a1e',
            }
          }
        }
      }
    }
  </script>
  
  <!-- Alpine.js -->
  <script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/collapse@3.x.x/dist/cdn.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
  
  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="font-sans antialiased" x-data>

  <!-- Include Header (copy from /includes/header.html) -->
  
  <!-- Hero Text Overlay -->
  <!-- Copy from /includes/trays/hero-text-overlay.html -->
  
  <!-- Featured Card Image (4 audience cards) -->
  <!-- Copy from /includes/trays/featured-card-image.html -->
  
  <!-- Fast Facts -->
  <!-- Copy from /includes/trays/fast-facts.html -->
  
  <!-- News Tray placeholder -->
  
  <!-- CTA -->
  <!-- Copy from /includes/trays/cta-text.html -->
  
  <!-- Include Footer (copy from /includes/footer.html) -->
  
  <!-- Design Reference Modal -->
  <!-- Copy modal code from Task 1.6 -->
  
  <script>
    // Initialize Lucide icons
    lucide.createIcons();
  </script>
  
</body>
</html>
```

**Deliverable:** Complete homepage

---

### Task 4.2: Create Section Front Template
```
Create /pages/academics/index.html as example Section Front:

Structure:
- Header
- Hero Side-by-Side (About Academics)
- Body Copy (intro section)
- Featured Card Image (6 cards: Programs, Catalog, Schedules, Advising, Transfer, Graduation)
- Link List (quick links)
- CTA Text
- Footer
- Modal

Each tray includes the info icon for design reference.
```

**Deliverable:** Academics section front page

---

### Task 4.3: Create Academic Program Detail Template
```
Create /pages/academics/programs/nursing.html with:

- Header
- Hero Text Overlay (program banner)
- Tabs Component (Alpine.js tabs for Overview, Requirements, Courses, Faculty)
- Fast Facts (credits, duration, cost, start dates)
- Related Programs tray
- Accordion (FAQs)
- CTA
- Footer
- Modal

Tab implementation with Alpine.js:
<div x-data="{ activeTab: 'overview' }">
  <div class="border-b border-gray-200">
    <nav class="flex space-x-8">
      <button @click="activeTab = 'overview'"
              :class="activeTab === 'overview' ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-500'"
              class="py-4 px-1 border-b-2 font-medium">
        Overview
      </button>
      <!-- Repeat for other tabs -->
    </nav>
  </div>
  
  <div class="py-8">
    <div x-show="activeTab === 'overview'">
      <!-- Overview content -->
    </div>
    <!-- Repeat for other tabs -->
  </div>
</div>

Each tab has info icon pointing to:
https://services.ingeniux.com/designs/edu-solution/academic-program-detail.html
```

**Deliverable:** Program detail page

---

### Task 4.4: Create Detail Flex Template
```
Create /pages/workforce/phlebotomy.html as workforce program example:

- Header
- Hero Side-by-Side
- Body Copy
- Fast Facts
- Accordion (course outline, requirements)
- Form Contact (registration form)
- CTA
- Footer
- Modal

Simple contact form:
<form class="space-y-4">
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
    <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
  </div>
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
    <input type="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
  </div>
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
    <textarea rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"></textarea>
  </div>
  <button type="submit" class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold">
    Send Message
  </button>
</form>
```

**Deliverable:** Workforce program page

---

## PHASE 5: Documentation & Deployment

### Task 5.1: Create Component Library Documentation
```
Create /_reference/component-library.md:

# Richmond CC Prototype - Component Library

## Global Components
- Header (with mega menu)
- Footer
- Navigation
- Alert Banner
- Search Modal

## Tray Components

### Heroes
1. Hero Text Overlay
   - Reference: [Standards Library](URL)
   - Usage: Homepage, major landing pages
   - Props: Title, description, image, CTA buttons

2. Hero Side-by-Side
   - Reference: [Standards Library](URL)
   - Usage: Section fronts, detail pages
   - Props: Title, content, image, reverse option

### Content Trays
3. Body Copy
4. Featured Card Image (2-4 columns)
5. Accordion
6. Fast Facts (EDU)
7. Steps to Success (EDU)
8. CTA Text
9. Contact Block

... etc for all components

## Page Templates
1. Homepage
2. Section Front
3. Academic Program Detail (EDU)
4. Detail Flex
5. Detail with Left Nav (EDU)

## Usage Guide
Each component includes:
- Info icon (ⓘ) linking to Ingeniux design library
- Responsive behavior
- Alpine.js interactivity where needed
```

**Deliverable:** Component documentation

---

### Task 5.2: Create README
```
Create /README.md:

# Richmond Community College - Prototype

Static HTML/Tailwind prototype based on Ingeniux EDU Solution & Standards libraries.

## Tech Stack
- HTML5
- Tailwind CSS v3 (CDN)
- Alpine.js v3 (interactivity)
- Lucide Icons

## Getting Started

### Option 1: Simple HTTP Server
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .
```

Then open: http://localhost:8000

### Option 2: VS Code Live Server
Install Live Server extension and click "Go Live"

## Project Structure
```
/
├── index.html (homepage)
├── /pages
│   ├── /academics
│   ├── /admissions
│   ├── /student-services
│   └── /about-us
├── /includes (reusable HTML blocks)
├── /images
└── /_reference (documentation)
```

## Design Reference Feature

Each component has an info icon (ⓘ) that links to the Ingeniux design library source.

Click the icon to see:
- Component name
- Direct link to Ingeniux reference
- Opens in modal for easy access

## Pages Built

### Priority Pages (30 total)
1. Homepage (/)
2. Academics Section (/pages/academics/)
3. Programs Listing (/pages/academics/programs/)
4. Program Detail - Nursing (/pages/academics/programs/nursing.html)
5. Program Detail - Business (/pages/academics/programs/business-administration.html)
... (list all 30 pages)

## Customization

### Colors
Update Tailwind config in `<head>`:
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: { /* customize */ }
      }
    }
  }
}
```

### Components
All components are in /includes/ as reusable HTML blocks.
Copy and paste into pages, then customize content.

## Deployment

Deploy to:
- Netlify: Drag & drop folder
- Vercel: `npx vercel`
- GitHub Pages: Push to repo, enable Pages
- Any static host

## Team Review

Share preview URL with team for review and feedback.

## License
Internal prototype for Richmond Community College
```

**Deliverable:** README documentation

---

### Task 5.3: Deploy to Netlify
```
1. Create account at netlify.com
2. Drag & drop project folder
3. Get preview URL
4. Share with team

Alternative: Use Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --dir=. --prod
```

**Deliverable:** Live preview URL

---

## DELIVERABLES CHECKLIST

### Setup & Foundation
- [ ] Project structure created
- [ ] Tailwind CSS configured with Ingeniux theme
- [ ] Alpine.js integrated
- [ ] Lucide Icons working
- [ ] Design reference modal system working
- [ ] Info icons on all components

### Global Components (with info icons)
- [ ] Header with mega menu
- [ ] Footer
- [ ] Utility navigation
- [ ] Alert banner
- [ ] Search

### Essential Tray Components (with info icons)
- [ ] Hero Text Overlay
- [ ] Hero Side-by-Side
- [ ] Hero Constituent (EDU)
- [ ] Body Copy
- [ ] Featured Card Image
- [ ] Featured Card Icon
- [ ] Accordion
- [ ] Fast Facts (EDU)
- [ ] Steps to Success (EDU)
- [ ] CTA Text
- [ ] Link Button
- [ ] Link List
- [ ] Contact Block
- [ ] Form Contact
- [ ] Tabs

### Sample Pages (minimum 20)
- [ ] Homepage
- [ ] Academics section front
- [ ] Programs listing (with search)
- [ ] 3 Program detail pages
- [ ] Admissions section front
- [ ] Financial aid page
- [ ] Student services section front
- [ ] 2 Student service pages
- [ ] Prospective student page (sub-section front)
- [ ] Workforce section front
- [ ] 2 Workforce program pages
- [ ] About Us section front
- [ ] Contact page

### Documentation
- [ ] Component library reference
- [ ] Design system tokens documented
- [ ] Ingeniux links catalog
- [ ] README with setup instructions
- [ ] Page inventory

### Deployment
- [ ] Production build
- [ ] Deployed to hosting (Netlify/Vercel)
- [ ] Preview URL shared with team

---

## EXAMPLE COMPLETE PROMPT FOR CLAUDE CODE

```
I need you to build a static HTML/Tailwind CSS prototype of the Richmond Community College website.

Requirements:

1. **Tech Stack:**
   - HTML5 (static pages, no React)
   - Tailwind CSS v3 (use CDN for simplicity)
   - Alpine.js for interactivity (dropdowns, accordions, tabs, modals)
   - Lucide Icons

2. **Design Reference System:**
   - Each component section must have a small info icon (ⓘ) using Lucide
   - Clicking the icon opens a modal tooltip showing:
     - Component name
     - Link to the Ingeniux design library URL
   - Example: Hero section has info icon linking to https://services.ingeniux.com/designs/standards/hero-text-overlay.html

3. **Design Libraries to Match:**
   - Visit and analyze: https://services.ingeniux.com/designs/edu-solution/
   - Visit and analyze: https://services.ingeniux.com/designs/standards/
   - Extract color scheme, typography, spacing, and component patterns

4. **Project Structure:**
```
/richmond-cc-prototype
  /index.html (homepage)
  /pages
    /academics
      /index.html (section front)
      /programs
        /index.html (program listing)
        /nursing.html (program detail)
        /business-administration.html
    /admissions
      /index.html
      /financial-aid.html
    /student-services
      /index.html
    /about-us
      /index.html
    /contact-us
      /index.html
  /includes
    /header.html (reusable header)
    /footer.html (reusable footer)
    /trays (reusable tray components)
  /_reference
    /design-system.md
    /component-library.md
```

5. **Key Components to Build:**

Global:
- Header with mega menu navigation
- Footer with multi-column layout
- Design reference modal (Alpine.js)
- Info icon component (Lucide)

Trays (each with info icon):
- Hero Text Overlay (full-width background image, centered text)
- Hero Side-by-Side (50/50 split)
- Featured Card Image (grid of 4 cards with images)
- Accordion (Alpine.js collapsible)
- Fast Facts (stat display)
- Steps to Success (5-step timeline)
- Body Copy (prose content)
- CTA Text (call-to-action section)
- Contact Block (contact info display)

6. **Pages to Build:**
- Homepage with: Hero, Featured Cards (4 audiences), Fast Facts, CTA
- Academics Section Front
- Nursing Program Detail (with tabs: Overview, Requirements, Courses, Faculty)
- Admissions Section Front (with Steps to Success)
- Workforce Program Page (phlebotomy example)

7. **Design Reference Modal:**

Create an Alpine.js modal that:
- Appears when clicking any info icon
- Shows component name
- Has link to open Ingeniux URL in new tab
- Can be closed with X button or Escape key

Example info icon usage:
```html
<button 
  @click="$dispatch('open-reference', { 
    title: 'Hero Text Overlay - Standards Library', 
    url: 'https://services.ingeniux.com/designs/standards/hero-text-overlay.html' 
  })"
  class="inline-flex items-center justify-center w-5 h-5 text-gray-400 hover:text-primary-600 transition-colors ml-2"
  title="View design reference">
  <i data-lucide="info" class="w-4 h-4"></i>
</button>
```

8. **Tailwind Theme:**

Create a custom theme in inline config matching Ingeniux:
- Primary blue: #366092 (approximate - extract actual from Ingeniux)
- Neutral grays for text and backgrounds
- Clean, professional educational aesthetic

9. **Documentation:**

Create:
- README.md with setup instructions
- /_reference/component-library.md listing all components with their Ingeniux URLs
- /_reference/design-system.md documenting colors, typography, spacing

10. **Deliverables:**
- 20+ working HTML pages
- All components have design reference info icons
- Fully responsive (mobile, tablet, desktop)
- Modal system working with Alpine.js
- Clean, well-organized code
- README for team review

Start by:
1. Creating the project structure
2. Setting up the design reference modal system
3. Building the header and footer
4. Creating one complete page (homepage) with all trays and info icons
5. Then replicate for other pages

Let's begin!
```

---

**End of Task List**

This approach gives you a clean, static HTML/Tailwind prototype that your team can easily review in a browser, with convenient design reference links built right into each component for easy comparison with the Ingeniux libraries.
