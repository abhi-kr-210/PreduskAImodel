# AI Studio

A modern AI interface with a beautiful landing page and comprehensive AI tools.

## Features

- **Landing Page**: Beautiful animated home page with gradient effects and smooth transitions
- **AI Studio**: Full-featured AI interface with model selection, parameter controls, and chat functionality
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with persistent preferences
- **Modern UI**: Built with Next.js, Tailwind CSS, and Framer Motion

## Pages

- **Home (`/`)**: Landing page with animated elements and navigation to the main application
- **Main Application (`/mainpage`)**: Full AI Studio interface with all tools and features

## Navigation

- Click the arrow button on the home page to enter the main application
- Use the "Home" link in the header to return to the landing page
- Click the "AI Studio" logo to navigate back to home

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Icons**: Custom SVG and PNG assets
- **Theme**: Dark/Light mode with system preference detection

## Project Structure

```
├── app/
│   ├── page.tsx              # Home landing page
│   ├── mainpage/
│   │   └── page.tsx          # Main application page
│   └── layout.tsx            # Root layout with theme provider
├── components/
│   ├── layout/
│   │   ├── Home.tsx          # Landing page component
│   │   └── MainShell.tsx     # Main application shell
│   ├── chat/                 # Chat interface components
│   ├── model/                # Model selection components
│   ├── params/               # Parameter control components
│   ├── prompt/               # Prompt editor components
│   └── ui/                   # Reusable UI components
└── src/assets/               # Images and static assets
```
