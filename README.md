# Dr. Tijo Alex Dental Care — Website

Official website for **Dr. Tijo Alex Dental Care**, a multi-specialist dental clinic based in Alappuzha, Kerala, India. Built with React 19 and deployed to [tijoalexdentalcare.in](https://tijoalexdentalcare.in).

---

## Features

- **Home page** — hero section, "Why Choose Us?" overview, and a horizontally scrollable services carousel
- **Our Team page** — profiles for each specialist doctor with specialisation details
- **Our Story page** — clinic background and history
- **Contact Us section** — phone, WhatsApp, email, and address in the footer
- **Responsive navbar** — hamburger menu for mobile with smooth hash-link scroll navigation

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| React Router DOM | 7 | Client-side routing |
| React Icons | 5 | Icon library |
| Create React App | 5 | Build tooling |
| gh-pages | 6 | GitHub Pages deployment |

---

## Project Structure

```
src/
├── assets/          # Images for services, doctors, and clinic
├── components/
│   ├── Navbar.jsx          # Top navigation bar with hamburger menu
│   ├── Footbar.jsx         # Footer with contact details
│   ├── ContactUsButton.jsx # Reusable CTA button
│   └── ImageGallery.jsx    # Image gallery component
├── data/
│   ├── services.js         # Services list with imported images
│   ├── services.json       # (legacy) services data
│   └── doctor-details.json # Doctor profiles and specialisations
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── OurTeam.jsx         # Team/doctors page
│   └── OurStory.jsx        # Clinic story page
├── App.js                  # Root component with HashRouter and routes
└── index.js                # Entry point
```

---

## Services

The clinic offers 12 dental services:

- Orthodontics
- Dental Implants
- Prosthodontics
- Oral Surgery
- Root Canal Treatment
- Gum Care
- Child Dentistry
- Cosmetic Dentistry
- Teeth Whitening
- Preventive Dentistry
- Oral Cancer Screening
- Emergency Care

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) in development mode. The page hot-reloads on file changes.

### Run tests

```bash
npm test
```

### Build for production

```bash
npm run build
```

Outputs an optimised production build to the `build/` directory.

---

## Deployment

The site is deployed to GitHub Pages via the `gh-pages` package.

```bash
npm run deploy
```

This runs `npm run build` first (via the `predeploy` script), then pushes the `build/` directory to the `gh-pages` branch. The live site is served at [https://tijoalexdentalcare.in](https://tijoalexdentalcare.in).

---

## Contact

| Channel | Details |
|---|---|
| Phone | 04772 970297 |
| WhatsApp | 9847048002 |
| Email | drtijoalex@yahoo.co.in |
| Email | info@drtijoalexorthodonticcentre.com |
| Address | Thevarcad Building, North of Vazhicherry Bridge, Alappuzha – 688001 |
