# Richmond CC - Component Library

Reusable components with design reference links.

## Global Components

### Header
**File**: Inline in `index.html` (will be extracted to `/includes/header.html`)
**Reference**: [Standards Library - Header](https://services.ingeniux.com/designs/standards/header.html)

**Features**:
- Utility navigation bar (Apply, Pay Tuition, Self-Service, Contact)
- Logo/branding
- Main navigation with mega menu dropdowns
- Search icon
- Mobile menu toggle
- Responsive behavior

**Usage**: Copy header HTML from index.html into new pages

---

### Footer
**File**: Inline in `index.html` (will be extracted to `/includes/footer.html`)
**Reference**: [Standards Library - Footer Mega](https://services.ingeniux.com/designs/standards/footer-mega.html)

**Features**:
- Four-column layout (Quick Links, Contact Info, Connect, Campuses)
- Social media icons
- Bottom bar with copyright and legal links
- Dark background (`bg-gray-900`)

**Usage**: Copy footer HTML from index.html into new pages

---

### Design Reference Modal
**File**: Inline in `index.html` (will be extracted to `/includes/modal.html`)
**Technology**: Alpine.js

**Features**:
- Opens when clicking any info icon
- Displays component name and reference URL
- Links to Ingeniux design library
- Closes on backdrop click or Escape key

**Usage**:
1. Include modal HTML before `</body>`
2. Add info icon button to components:

```html
<button
  @click="$dispatch('open-reference', {
    title: 'Component Name - Library',
    url: 'https://services.ingeniux.com/designs/...'
  })"
  class="inline-flex items-center justify-center w-4 h-4 text-gray-400 hover:text-primary-600 transition-colors ml-2"
  title="View design reference">
  <i data-lucide="info" class="w-3 h-3"></i>
</button>
```

---

## Hero Components

### 1. Hero Text Overlay
**Reference**: [Standards Library](https://services.ingeniux.com/designs/standards/hero-text-overlay.html)

**Description**: Full-width hero with background image and centered text overlay

**Usage**: Homepage, major landing pages

**Features**:
- Background image (1920x600)
- Dark overlay (40% opacity)
- Centered content
- Large heading (text-5xl or text-6xl)
- Subheading text
- CTA buttons (primary + secondary)

**Code Example**:
```html
<section class="relative h-[600px] flex items-center justify-center text-white">
  <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('...')"></div>
  <div class="absolute inset-0 bg-black bg-opacity-40"></div>
  <div class="relative z-10 container mx-auto px-4 text-center">
    <h1 class="text-5xl md:text-6xl font-bold mb-4">Heading</h1>
    <p class="text-xl md:text-2xl mb-8">Subheading</p>
    <div class="flex gap-4 justify-center">
      <!-- Buttons -->
    </div>
  </div>
</section>
```

---

### 2. Hero Side-by-Side
**Reference**: [Standards Library](https://services.ingeniux.com/designs/standards/hero-side-by-side.html)

**Description**: 50/50 split layout with text on one side, image on the other

**Usage**: Section fronts, detail pages

**Features**:
- Grid layout (2 columns on desktop)
- Text content with heading, body, and bullet points
- Image with rounded corners and shadow
- CTA button
- Reversible (text left/right)

**Code Example**: See task list for full implementation

---

## Content Trays

### 3. Featured Cards - Image
**Reference**: [Standards Library](https://services.ingeniux.com/designs/standards/featured-cards-images.html)

**Description**: Grid of cards with images, titles, and descriptions

**Usage**: Homepage audiences, program listings, service categories

**Variations**:
- 2 columns (md:grid-cols-2)
- 3 columns (lg:grid-cols-3)
- 4 columns (lg:grid-cols-4) - Used on homepage

**Features**:
- Card image (aspect-[4/3])
- Hover effects (shadow-xl, scale-105)
- Title and description
- Link with arrow icon
- Responsive grid

**Code Example**: See homepage implementation

---

### 4. Fast Facts
**Reference**: [EDU Solution](https://services.ingeniux.com/designs/edu-solution/fast-facts.html)

**Description**: Statistics display with large numbers and labels

**Usage**: Homepage, program pages, section fronts

**Features**:
- Primary blue background
- 2-4 statistics
- Large numbers (text-5xl)
- Light labels (text-primary-100)
- Grid layout

**Code Example**:
```html
<section class="py-16 bg-primary-600 text-white">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div class="text-5xl font-bold mb-2">60+</div>
        <div class="text-primary-100 font-medium">Programs</div>
      </div>
      <!-- More stats -->
    </div>
  </div>
</section>
```

---

### 5. CTA Text
**Reference**: [Standards Library](https://services.ingeniux.com/designs/standards/cta-text.html)

**Description**: Call-to-action section with centered text and buttons

**Usage**: Bottom of pages, conversion points

**Features**:
- Light background (bg-primary-50)
- Centered heading and text
- Primary and secondary buttons
- Responsive button layout

**Code Example**: See homepage implementation

---

### 6. Accordion
**Reference**: [Standards Library](https://services.ingeniux.com/designs/standards/accordion.html)

**Description**: Collapsible Q&A or content sections

**Usage**: FAQs, program details, course outlines

**Technology**: Alpine.js with Collapse plugin

**Features**:
- Click to expand/collapse
- Chevron icon rotation
- Smooth transitions
- Single or multiple open

**Code Example**: See task list for full implementation

---

### 7. Body Copy
**Reference**: [Standards Library](https://services.ingeniux.com/designs/standards/body-copy.html)

**Description**: Prose content with headings, paragraphs, lists

**Usage**: About pages, detail pages

**Features**:
- Max-width container (max-w-4xl)
- Tailwind Typography styles
- Semantic HTML (h2, h3, p, ul, ol)

**Code Example**:
```html
<section class="py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto prose prose-lg">
      <h2>Heading</h2>
      <p>Paragraph text...</p>
      <ul>
        <li>List item</li>
      </ul>
    </div>
  </div>
</section>
```

---

### 8. Steps to Success
**Reference**: [EDU Solution](https://services.ingeniux.com/designs/edu-solution/steps-to-success.html)

**Description**: Timeline/process display with numbered steps

**Usage**: Admissions process, how-to guides

**Features**:
- Horizontal layout (desktop)
- Vertical layout (mobile)
- Numbered circles
- Step titles and descriptions
- Connection line between steps

**Code Example**: See task list for full implementation

---

### 9. Contact Block
**Reference**: [Standards Library](https://services.ingeniux.com/designs/standards/contact-block.html)

**Description**: Contact information display with icons

**Usage**: Sidebar, program pages, contact sections

**Features**:
- Border accent (border-l-4)
- Icons for person, email, phone, location
- Structured contact info
- Light background

**Code Example**: See task list for full implementation

---

## Navigation Components

### Mega Menu
**Reference**: [Standards Library](https://services.ingeniux.com/designs/standards/menu-mega.html)

**Description**: Dropdown menu with multi-column layout

**Technology**: Alpine.js

**Features**:
- Appears on hover
- 3-column layout
- Category headings
- Link lists
- Smooth transitions

**Code Example**: See header in homepage

---

## Form Components

### Contact Form
**Reference**: [Standards Library](https://services.ingeniux.com/designs/standards/form-contact.html)

**Description**: Basic contact/inquiry form

**Features**:
- Text inputs
- Email input
- Textarea
- Submit button
- Focus states

**Code Example**: To be implemented on contact pages

---

## Interactive Components

### Tabs
**Reference**: [EDU Solution](https://services.ingeniux.com/designs/edu-solution/academic-program-detail.html)

**Description**: Tabbed content sections

**Technology**: Alpine.js

**Usage**: Program detail pages (Overview, Requirements, Courses, Faculty)

**Features**:
- Horizontal tab navigation
- Active state styling
- Content panels
- Responsive

**Code Example**: To be implemented on program detail pages

---

## Info Icon System

Every component section includes an info icon that links to the Ingeniux design reference.

**Standard Implementation**:
```html
<!-- Section Label with Info Icon -->
<div class="container mx-auto px-4 mb-4">
  <div class="inline-flex items-center bg-gray-100 px-3 py-1 rounded text-xs text-gray-500">
    <span>Component Name</span>
    <button
      @click="$dispatch('open-reference', {
        title: 'Component Name - Library',
        url: 'https://services.ingeniux.com/designs/...'
      })"
      class="inline-flex items-center justify-center w-4 h-4 text-gray-400 hover:text-primary-600 transition-colors ml-2"
      title="View design reference">
      <i data-lucide="info" class="w-3 h-3"></i>
    </button>
  </div>
</div>
```

---

## Component Checklist

### Implemented ✅
- [x] Header with mega menu
- [x] Footer
- [x] Design reference modal
- [x] Hero Text Overlay
- [x] Featured Cards - Image
- [x] Fast Facts
- [x] CTA Text

### To Be Implemented
- [ ] Hero Side-by-Side
- [ ] Hero Constituent (EDU)
- [ ] Body Copy
- [ ] Accordion
- [ ] Steps to Success
- [ ] Contact Block
- [ ] Form Contact
- [ ] Tabs
- [ ] Featured Cards - Icon
- [ ] Link List
- [ ] Link Button

---

Last updated: January 2026
