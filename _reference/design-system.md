# Richmond CC - Design System

Professional design system for Richmond Community College based on Ingeniux patterns with custom branding.

## Brand Identity

### Brand Color: #9C1C32
Deep maroon/burgundy red reflecting tradition, excellence, and North Carolina collegiate heritage.

### Typography
- **Headings**: Crimson Text (serif) - Classic, academic, timeless
- **Body**: Open Sans (sans-serif) - Clean, readable, professional

## Color Palette

### Brand Colors (Primary)
- **brand-50**: `#fdf2f4` - Lightest tint, subtle backgrounds
- **brand-100**: `#fce7eb` - Light backgrounds, hover states
- **brand-200**: `#f9d0d8` - Accents, decorative elements
- **brand-300**: `#f4a8b8` - Highlighted text, badges
- **brand-400**: `#ed7691` - Interactive elements
- **brand-500**: `#e24968` - Call-to-action accents
- **brand-600**: `#ce2d54` - Active states, emphasis
- **brand-700**: `#9C1C32` - **MAIN BRAND COLOR** (primary buttons, nav, headers)
- **brand-800**: `#8a1a2e` - Hover states for dark elements
- **brand-900**: `#751829` - Darkest brand color, strong emphasis

### Neutral Grays
- **neutral-50**: `#f9fafb` - Page backgrounds
- **neutral-100**: `#f3f4f6` - Section backgrounds
- **neutral-200**: `#e5e7eb` - Borders, dividers
- **neutral-300**: `#d1d5db` - Disabled states
- **neutral-400**: `#9ca3af` - Placeholder text
- **neutral-500**: `#6b7280` - Secondary text
- **neutral-600**: `#4b5563` - Body text
- **neutral-700**: `#374151` - Headings
- **neutral-800**: `#1f2937` - Strong text emphasis
- **neutral-900**: `#111827` - Footer, darkest elements

## Typography

### Font Families

**Headings - Crimson Text**
```css
font-family: 'Crimson Text', Georgia, serif;
```
- Elegant serif typeface
- Classic academic feel
- Weights: 400 (regular), 600 (semibold), 700 (bold)

**Body - Open Sans**
```css
font-family: 'Open Sans', system-ui, sans-serif;
```
- Highly readable sans-serif
- Professional, approachable
- Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Font Sizes
- `text-sm`: 0.875rem (14px) - Small text, utility nav
- `text-base`: 1rem (16px) - Body text
- `text-lg`: 1.125rem (18px) - Large body text, section subheadings
- `text-xl`: 1.25rem (20px) - Lead paragraphs
- `text-2xl`: 1.5rem (24px) - Card headings
- `text-3xl`: 1.875rem (30px) - Section headings
- `text-4xl`: 2.25rem (36px) - Major headings
- `text-5xl`: 3rem (48px) - Page titles
- `text-6xl`: 3.75rem (60px) - Large hero headings
- `text-7xl`: 4.5rem (72px) - Primary hero headings

### Line Heights
- Headings: `leading-tight` (1.25)
- Body: `leading-relaxed` (1.625)
- Utility text: `leading-normal` (1.5)

## Layout & Spacing

### Container
- **Max width**: 1280px (`max-w-content`)
- **Horizontal padding**: `px-4` (1rem / 16px)
- **Centered**: `mx-auto`

### Section Spacing
- **Standard sections**: `py-20` (5rem / 80px)
- **Large sections**: `py-24` (6rem / 96px)
- **Compact sections**: `py-16` (4rem / 64px)

### Component Spacing
- **Card padding**: `p-6` (1.5rem / 24px)
- **Card gaps**: `gap-6` (1.5rem / 24px)
- **Content margins**: `mb-12` to `mb-16` (3-4rem)
- **Icon spacing**: `mr-2` to `mr-3` (0.5-0.75rem)

## Components

### Buttons

#### Primary Button
```html
<a href="#" class="bg-brand-700 hover:bg-brand-800 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center">
  Button Text
  <i data-lucide="arrow-right" class="w-5 h-5 ml-2"></i>
</a>
```

#### Secondary Button (Outlined)
```html
<a href="#" class="bg-white hover:bg-neutral-50 text-brand-700 px-10 py-4 rounded-lg font-bold text-lg transition-all border-2 border-brand-700 hover:border-brand-800 inline-flex items-center">
  Button Text
  <i data-lucide="calendar" class="w-5 h-5 mr-2"></i>
</a>
```

#### White Button (Hero)
```html
<a href="#" class="bg-white text-brand-700 hover:bg-brand-50 px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center">
  Button Text
</a>
```

### Cards

#### Featured Image Card
```html
<a href="#" class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-100 hover:border-brand-200 hover:-translate-y-1">
  <div class="aspect-[4/3] overflow-hidden bg-neutral-200">
    <img src="..." class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
  </div>
  <div class="p-6">
    <div class="w-12 h-12 bg-brand-100 text-brand-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-700 group-hover:text-white transition-colors">
      <i data-lucide="icon-name" class="w-6 h-6"></i>
    </div>
    <h3 class="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-brand-700 transition-colors">
      Card Title
    </h3>
    <p class="text-neutral-600 mb-4 leading-relaxed">
      Card description text...
    </p>
    <span class="text-brand-700 font-semibold inline-flex items-center">
      Learn More
      <i data-lucide="arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"></i>
    </span>
  </div>
</a>
```

### Logo

#### Primary Logo
```html
<a href="/index.html" class="flex items-center space-x-3">
  <div class="bg-brand-700 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl">
    RC
  </div>
  <div>
    <div class="text-2xl font-bold text-brand-700 leading-tight">Richmond</div>
    <div class="text-sm text-neutral-600 leading-tight">Community College</div>
  </div>
</a>
```

### Mega Menu Dropdown

```html
<div class="absolute top-full left-0 w-screen max-w-5xl bg-white shadow-xl rounded-b-lg mt-1 p-8 grid grid-cols-3 gap-8 border-t-4 border-brand-700">
  <!-- Menu content -->
</div>
```

## Shadows & Effects

### Shadows
- **Card default**: `shadow-lg`
- **Card hover**: `shadow-2xl`
- **Header**: `shadow-sm`
- **Button**: `shadow-xl`

### Border Radius
- **Small**: `rounded` (0.25rem / 4px)
- **Medium**: `rounded-lg` (0.5rem / 8px)
- **Large**: `rounded-xl` (0.75rem / 12px)
- **Full**: `rounded-full` - Circular elements

### Transitions
```
transition-all
transition-colors
transition-shadow
transition-transform
duration-300
duration-500
```

### Hover Effects
- **Cards**: `-translate-y-1` + `shadow-2xl`
- **Buttons**: `scale-105` + `shadow-2xl`
- **Images**: `scale-110` (110% zoom on card image hover)
- **Arrows**: `translate-x-2` (arrow moves right)

## Hero Section

### Hero with Gradient Overlay
```html
<section class="relative h-[650px] flex items-center justify-center text-white overflow-hidden">
  <div class="absolute inset-0">
    <img src="..." class="w-full h-full object-cover">
    <div class="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-800/75 to-brand-700/60"></div>
  </div>
  <div class="relative z-10 container mx-auto px-4">
    <!-- Hero content -->
  </div>
</section>
```

### Hero Badge
```html
<div class="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
  <i data-lucide="award" class="w-4 h-4 inline mr-2"></i>
  Badge Text
</div>
```

## Icon System

### Lucide Icons
All icons use Lucide library with consistent sizing:

- **Small**: `w-4 h-4` (16px) - Inline icons, arrows
- **Medium**: `w-5 h-5` (20px) - Buttons, nav
- **Large**: `w-6 h-6` (24px) - Card icons, headers

### Common Icons Used
- `user-plus` - Prospective students
- `book-open` - Current students
- `users` - Faculty & staff
- `briefcase` - Workforce
- `arrow-right` - Links, CTAs
- `chevron-down` - Dropdowns
- `graduation-cap` - Programs
- `phone`, `mail`, `map-pin` - Contact
- `facebook`, `twitter`, `instagram`, `youtube` - Social

### Icon Colors
- Brand accent: `text-brand-500` or `text-brand-700`
- Neutral: `text-neutral-600`
- On dark: `text-white`

## Fast Facts Section

```html
<section class="py-20 bg-brand-700 text-white relative overflow-hidden">
  <!-- Decorative circles -->
  <div class="absolute inset-0 opacity-10">
    <div class="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
  </div>

  <!-- Stats -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    <div class="group">
      <div class="text-6xl md:text-7xl font-bold mb-3 text-white group-hover:scale-110 transition-transform">
        60<span class="text-brand-300">+</span>
      </div>
      <div class="text-brand-100 font-semibold text-lg uppercase tracking-wide">Academic Programs</div>
    </div>
  </div>
</section>
```

## Images

### Real Photography
Using Unsplash for high-quality, professional college imagery:

**Hero**:
- URL: `https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=650&fit=crop&q=80`
- Subject: Students on campus

**Card Images**:
- Future Students: `photo-1522202176988-66273c2fd55f` (Group studying)
- Current Students: `photo-1427504494785-3a9ca7044f45` (Student with laptop)
- Faculty: `photo-1524178232363-1fb2b075b655` (Laptop/learning)
- Workforce: `photo-1552664730-d307ca884978` (Team meeting)

### Image Aspect Ratios
- **Hero**: 1920x650 (custom)
- **Cards**: 4:3 ratio (`aspect-[4/3]`)
- **Object fit**: `object-cover` for all images

## Accessibility

### Color Contrast
- Brand700 (#9C1C32) on white: ✅ WCAG AAA
- White on brand-700: ✅ WCAG AAA
- All text meets WCAG AA minimum

### Semantic HTML
- Proper heading hierarchy (h1 → h6)
- `<nav>` for navigation
- `<section>` for content sections
- `<footer>` for footer
- Alt text for all images

### Interactive Elements
- All buttons/links have visible focus states
- Icon buttons include `title` attributes
- Dropdown menus keyboard navigable

## Responsive Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px (desktop nav appears)
- **xl**: 1280px
- **2xl**: 1536px

## Design Principles

1. **Classic & Academic**: Serif headings convey tradition and excellence
2. **Readable & Accessible**: Open Sans body text optimizes readability
3. **Bold & Confident**: Large headings and strong brand color create impact
4. **Modern & Clean**: Generous whitespace, subtle shadows, smooth transitions
5. **Photography-Driven**: Real images of students create authentic connection
6. **Micro-interactions**: Hover effects, transitions, and transforms engage users

---

**Last updated**: January 2026
**Brand Color**: #9C1C32 (Richmond Red)
**Fonts**: Crimson Text + Open Sans
**Framework**: Tailwind CSS 3.x
