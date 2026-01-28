# Richmond CC Heading System

## Consistent Typography Scale

All pages must follow this exact heading structure for consistency:

### H1 - Page Titles
**Usage:** Main page title (one per page)
**Classes:** `font-heading text-4xl md:text-5xl lg:text-6xl italic font-semibold`
**Color:** `text-slate-900` (on light backgrounds) or `text-white` (on dark backgrounds)

```html
<h1 class="font-heading text-4xl md:text-5xl lg:text-6xl italic font-semibold text-slate-900 mb-6">
  Academics at Richmond CC
</h1>
```

### H2 - Section Titles
**Usage:** Major section headings
**Classes:** `font-heading text-3xl md:text-4xl italic font-semibold`
**Color:** `text-slate-900` (default), `text-white` (on dark), or `text-crimson-700` (for emphasis)

```html
<h2 class="font-heading text-3xl md:text-4xl italic font-semibold text-slate-900 mb-6">
  Program Overview
</h2>
```

### H3 - Subsection Titles
**Usage:** Subsection headings, major card titles
**Classes:** `font-heading text-2xl md:text-3xl font-semibold` (NO italic)
**Color:** `text-slate-900` (default)

```html
<h3 class="font-heading text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
  Core Values
</h3>
```

### H4 - Component Titles
**Usage:** Card titles, smaller component headings
**Classes:** `font-heading text-xl md:text-2xl font-semibold` (NO italic)
**Color:** `text-slate-900` (default)

```html
<h4 class="font-heading text-xl md:text-2xl font-semibold text-slate-900 mb-3">
  Student Success
</h4>
```

### H5 - Small Component Titles
**Usage:** Small cards, list items with titles
**Classes:** `font-heading text-lg md:text-xl font-semibold` (NO italic)
**Color:** `text-slate-900` (default)

```html
<h5 class="font-heading text-lg md:text-xl font-semibold text-slate-900 mb-2">
  Critical Thinking
</h5>
```

### H6 - Micro Headings
**Usage:** Very small component labels
**Classes:** `font-heading text-base md:text-lg font-semibold` (NO italic)
**Color:** `text-slate-900` (default)

```html
<h6 class="font-heading text-base md:text-lg font-semibold text-slate-900 mb-1">
  Quick Facts
</h6>
```

## Key Rules

1. **Italic** is ONLY used for H1 and H2
2. **font-semibold** is used on ALL heading levels
3. **Responsive sizing** (text-xl md:text-2xl) is used for H1-H4
4. **font-heading** class is used on ALL headings (applies Crimson Text)
5. H3-H6 use **normal** (not italic) style for better readability at smaller sizes

## Color Variants

- **Default:** `text-slate-900` (dark text on light backgrounds)
- **Dark BG:** `text-white` (white text on dark backgrounds)
- **Emphasis:** `text-crimson-700` or `text-crimson-500` (brand color emphasis)
- **Hero:** Can use `text-crimson-200` for accent text in hero sections

## Examples in Context

### Page Header
```html
<section class="bg-slate-50 py-12">
  <div class="max-w-7xl mx-auto px-4">
    <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl italic font-semibold text-slate-900 mb-4">
      Mission & Vision
    </h1>
    <p class="text-lg text-slate-600 max-w-3xl">
      Guiding principles that shape our commitment.
    </p>
  </div>
</section>
```

### Section with Cards
```html
<section class="py-16">
  <h2 class="font-heading text-3xl md:text-4xl italic font-semibold text-slate-900 mb-8">
    Academic Areas
  </h2>

  <div class="grid grid-cols-3 gap-6">
    <div class="card">
      <h3 class="font-heading text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
        Transfer Programs
      </h3>
      <p>...</p>
    </div>
  </div>
</section>
```

### Small Component
```html
<div class="bg-white p-6 rounded-xl">
  <h4 class="font-heading text-xl md:text-2xl font-semibold text-slate-900 mb-4">
    What You'll Learn
  </h4>

  <div class="space-y-4">
    <div>
      <h5 class="font-heading text-lg font-semibold text-slate-900 mb-1">
        Critical Thinking
      </h5>
      <p class="text-sm text-slate-600">Description...</p>
    </div>
  </div>
</div>
```
