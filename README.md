Purvanchal SunBliss - Luxury Real Estate Website
A modern, responsive real estate website for Purvanchal SunBliss luxury residential project. Built with React, TypeScript, and Tailwind CSS, featuring a sophisticated design and seamless user experience.

🏡 Live Demo
Production: https://www.sunblisspurvanchal.co.in

Vercel: https://sunbliss-project-x94n.vercel.app

✨ Features
Frontend
Modern Design: Luxury-focused UI with golden accents and elegant typography

Responsive Layout: Optimized for all devices (mobile, tablet, desktop)

Interactive Components:

Hero section with call-to-action buttons

Interactive amenities showcase

Location map dialog

Schedule visit form

Quick inquiry form

Smooth Animations: Hover effects, transitions, and scroll animations

WhatsApp Integration: Floating WhatsApp button with pre-typed message

Backend
RESTful API: Express.js server with MongoDB integration

Database: MongoDB Atlas for storing inquiries and site visit requests

CORS Configuration: Proper cross-origin setup for production domains

Data Collections:

inquiries - Quick inquiry form submissions

site_visits - Schedule visit form submissions

🛠️ Tech Stack
Frontend
React 18 - Modern React with hooks

TypeScript - Type-safe development

Vite - Fast build tool and dev server

Tailwind CSS - Utility-first CSS framework

Shadcn/ui - High-quality UI components

React Hook Form - Form handling with validation

Zod - Schema validation

Lucide React - Beautiful icons

Backend
Node.js - JavaScript runtime

Express.js - Web framework

MongoDB - NoSQL database

MongoDB Atlas - Cloud database service

CORS - Cross-origin resource sharing

Dotenv - Environment variables

Deployment
Frontend: Vercel (with custom domain)

Backend: Render

Database: MongoDB Atlas

Domain: GoDaddy DNS management

🚀 Getting Started
Prerequisites
Node.js 18+

npm or yarn

MongoDB Atlas account

Installation
Clone the repository

git clone https://github.com/Abhishek798234/Sunbliss-project.git
cd Sunbliss-project

Copy

Insert at cursor
bash
Install dependencies

npm install

Copy

Insert at cursor
bash
Set up environment variables

Create .env.local:

VITE_API_URL=http://localhost:3001
VITE_MONGODB_URI=your_mongodb_connection_string

Copy

Insert at cursor
env
Create server/.env:

MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development

Copy

Insert at cursor
env
Start the development servers

Frontend:

npm run dev

Copy

Insert at cursor
bash
Backend:

npm run server

Copy

Insert at cursor
bash
📁 Project Structure
purvanchal-sunbliss/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Shadcn UI components
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Amenities.tsx   # Amenities showcase
│   │   ├── Location.tsx    # Location section
│   │   ├── Contact.tsx     # Contact section
│   │   ├── QuickInquiry.tsx # Inquiry form
│   │   └── WhatsAppFloat.tsx # WhatsApp button
│   ├── assets/             # Images and static files
│   ├── lib/                # Utility functions
│   └── pages/              # Page components
├── server/                 # Backend API
│   ├── index.js           # Express server
│   └── package.json       # Backend dependencies
├── public/                # Static assets
└── package.json           # Frontend dependencies

Copy

Insert at cursor
🎨 Design System
Primary Color: Deep sophisticated blue (#1e3a8a)

Secondary Color: Warm golden (#d97706)

Background: Light gold (#f5f3f0)

Typography: Playfair Display (serif) + Inter (sans-serif)

Gradients: Luxury-focused color combinations

📱 Key Components
Hero Section
Full-screen background image

Call-to-action buttons

Smooth scroll indicator

Amenities
Interactive grid layout

Detailed view on click

High-quality images

Forms
Quick Inquiry Form

Schedule Visit Dialog

Form validation with Zod

Success/error notifications

WhatsApp Integration
Floating button (bottom-left)

Pre-typed message

Direct WhatsApp Web integration

🌐 Deployment
Frontend (Vercel)
Connect GitHub repository

Set environment variables

Deploy with custom domain

Backend (Render)
Create web service

Set root directory to server

Configure environment variables

Auto-deploy on git push

Database (MongoDB Atlas)
Create cluster

Configure network access

Create database user

Get connection string

📊 Environment Variables
Frontend (.env.production)
VITE_API_URL=https://sunbliss-project.onrender.com
VITE_MONGODB_URI=mongodb+srv://...

Copy

Insert at cursor
env
Backend (Render Environment)
MONGODB_URI=mongodb+srv://...
NODE_ENV=production

Copy

Insert at cursor
env
🔧 Scripts
# Development
npm run dev          # Start frontend dev server
npm run server       # Start backend server

# Production
npm run build        # Build frontend
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint

Copy

Insert at cursor
bash
📞 Contact Information
Phone: +918377951951

Email: mailto:Gainacre@gmail.com, mailto:info@gainacre.com

Address: UG-30, Sethi Mart, Sector-150, Noida, UP-201301

📄 License
This project is proprietary and confidential. All rights reserved.

🤝 Contributing
This is a private project. For any modifications or updates, please contact the development team.

Built with ❤️ for Purvanchal SunBliss
