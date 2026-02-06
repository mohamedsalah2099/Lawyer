# Lawyer Website - Professional React Application

A modern, responsive React.js website for a law firm with full localization support (English/Arabic) and RTL (Right-to-Left) language support.

## Features

- ✅ Modern and responsive design
- ✅ Full localization (English & Arabic)
- ✅ RTL (Right-to-Left) support for Arabic
- ✅ Judicial Specialties section
- ✅ Contact Information with address
- ✅ News/Won Cases section
- ✅ Smooth scrolling navigation
- ✅ Professional UI/UX

## Technologies Used

- React 18
- Vite (Build tool)
- React Router DOM
- i18next (Internationalization)
- CSS3 (Modern styling)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
Lawyer/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Specialties.jsx
│   │   ├── Cases.jsx
│   │   └── Contact.jsx
│   ├── pages/          # Page components
│   │   └── Home.jsx
│   ├── locales/        # Translation files
│   │   ├── en.json
│   │   └── ar.json
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── i18n.js         # i18n configuration
├── index.html
├── package.json
└── vite.config.js
```

## Language Switching

The website supports two languages:
- **English (EN)** - Left-to-Right (LTR)
- **Arabic (AR)** - Right-to-Left (RTL)

Users can switch languages using the language switcher in the header. The entire UI, including text direction, will automatically adjust.

## Sections

1. **Hero Section** - Main landing area with call-to-action
2. **Judicial Specialties** - Showcase of legal practice areas
3. **Recent Victories** - News about won cases
4. **Contact Information** - Address, phone, email, office hours, and contact form

## Customization

- Update translations in `src/locales/en.json` and `src/locales/ar.json`
- Modify colors in `src/index.css` (CSS variables)
- Add more cases in the Cases component
- Update contact information in the Contact component

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for use.





# Lawyer
