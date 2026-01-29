// Tailwind CSS Configuration
// This config is used with Tailwind CSS CDN
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d0d8',
          300: '#f4a8b8',
          400: '#ed7691',
          500: '#e24968',
          600: '#ce2d54',
          700: '#9C1C32',  // Main brand color
          800: '#8a1a2e',
          900: '#751829',
        }
        // Using Tailwind's default sky and slate colors
      },
      fontFamily: {
        'serif': ['"Crimson Text"', 'Georgia', 'serif'],
        'sans': ['"Open Sans"', 'system-ui', 'sans-serif'],
        'heading': ['"Crimson Text"', 'Georgia', 'serif'],
      },
      maxWidth: {
        'content': '1280px',
      }
    }
  }
}
