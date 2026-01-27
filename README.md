# Richmond Community College - Static Prototype

Static HTML/Tailwind CSS prototype based on Ingeniux EDU Solution & Standards design libraries.

## Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS v3** - Utility-first styling (CDN)
- **Alpine.js v3** - Lightweight JavaScript for interactivity
- **Lucide Icons** - Icon library

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

1. Install the Live Server extension
2. Right-click on `index.html`
3. Click "Open with Live Server"

### Option 3: Direct Browser

Simply open `index.html` in your browser (some features may be limited)

## Project Structure

```
/richmond-cc-prototype
├── index.html                  # Homepage
├── /pages                      # Interior pages
│   ├── /academics
│   ├── /admissions
│   ├── /student-services
│   └── /about-us
├── /includes                   # Reusable HTML components
│   └── /trays                  # Component library
├── /images                     # Images and placeholders
├── /_reference                 # Documentation
└── README.md
```

## Design Reference Feature

Each component has an **info icon (ⓘ)** in the top-left corner that:
- Opens a modal when clicked
- Shows the component name
- Links to the original Ingeniux design library page

Click any info icon to see the design reference!

## Key Features

### Header
- Utility navigation (Apply, Pay Tuition, Self-Service, Contact)
- Main navigation with mega menu dropdowns
- Responsive mobile menu
- Search functionality

### Homepage Components
1. **Hero Text Overlay** - Full-width hero with background image
2. **Featured Cards** - Four audience cards (Prospective, Current, Faculty, Community)
3. **Fast Facts** - Statistics display (60+ Programs, $76/credit, 15:1 ratio, 95% placement)
4. **CTA Section** - Call-to-action with buttons

### Footer
- Four-column layout (Quick Links, Contact, Connect, Campuses)
- Social media icons
- Bottom bar with copyright and legal links

## Customization

### Colors

The Tailwind config is inline in the `<head>`. To customize colors:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#366092',  // Main brand color - change here
          // ... other shades
        }
      }
    }
  }
}
```

### Content

All content is in standard HTML. Simply edit the text, images, and links directly in the files.

### Components

Reusable components will be stored in `/includes/trays/` for easy copy-paste into other pages.

## Design References

This prototype is based on:
- **EDU Solution**: https://services.ingeniux.com/designs/edu-solution/
- **Standards Library**: https://services.ingeniux.com/designs/standards/

## Deployment to Vercel

1. Install Vercel CLI (if not installed):
   ```bash
   npm i -g vercel
   ```

2. Deploy from project directory:
   ```bash
   vercel
   ```

3. Follow prompts to deploy

Alternatively, connect your GitHub repository to Vercel for automatic deployments.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Next Steps

- Add more interior pages (Academics, Admissions, etc.)
- Create reusable component library in `/includes/trays/`
- Replace placeholder images with real content
- Add more interactive features

## License

Internal prototype for Richmond Community College

---

Built with ❤️ using HTML, Tailwind CSS, and Alpine.js
